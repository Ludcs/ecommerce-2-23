import {createContext, useState, useEffect} from 'react';
import {productitos as initialProducts} from '../mocks/products.json';

export const EcommerceContext = createContext();

export const EcommerceProvider = ({children}) => {
  const [products, setProducts] = useState(initialProducts);
  const [categorias, setCategorias] = useState([]);
  const [currentCategory, setcurrentCategory] = useState('all');
  const [productsByCategories, setProductsByCategories] = useState([]);
  const [productsByPrice, setProductsByPrice] = useState([]);
  const [productsBySearch, setProductsBySearch] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [allProducts, setAllProducts] = useState(true);
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const result = initialProducts.reduce((acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    }, []);
    setCategorias(result);
  }, []);

  const filteredByCategories = (str) => {
    if (str === 'all') {
      setAllProducts(true);
      setProductsByCategories([]);
      setcurrentCategory(str);
    } else {
      setProductsByCategories(products.filter((el) => el.category === str));
      setAllProducts(false);
      setProductsByPrice([]);
      setProductsBySearch([]);
      setMinPrice(0);
      setcurrentCategory(str);
      setSearch('');
    }
  };

  const filteredByPrice = (price) => {
    let prices = products.filter((el) => el.price >= price);
    setProductsByPrice(prices);
    setAllProducts(false);
  };

  const filteredBySearch = (str) => {
    let productSearch = products.filter((el) => {
      if (
        el.title.toLowerCase().includes(str.toLowerCase()) ||
        el.description.toLowerCase().includes(str.toLowerCase())
      ) {
        return el;
      }
    });

    if (str === '') {
      setProductsBySearch([]);
      setAllProducts(true);
    } else {
      setProductsBySearch(productSearch);
      setAllProducts(false);
    }
  };

  const addProductToCart = (product) => {
    let inCart = productsInCart.find((el) => el.id === product.id);
    if (inCart) {
      setProductsInCart(
        productsInCart.map((el) => {
          if (el.id === product.id) {
            return {...inCart, amount: inCart.amount + 1};
          } else {
            return el;
          }
        })
      );
    } else {
      setProductsInCart([...productsInCart, {...product, amount: 1}]);
    }
  };

  const deleteProductFromCart = (product) => {
    let existInCart = productsInCart.find((el) => el.id === product.id);
    if (existInCart.amount === 1) {
      setProductsInCart(productsInCart.filter((el) => el.id !== product.id));
    } else {
      setProductsInCart(
        productsInCart.map((el) => {
          if (el.id === product.id) {
            return {...existInCart, amount: existInCart.amount - 1};
          } else {
            return el;
          }
        })
      );
    }
  };

  return (
    <EcommerceContext.Provider
      value={{
        products,
        setProducts,
        categorias,
        setCategorias,
        currentCategory,
        setcurrentCategory,
        productsByCategories,
        setProductsByCategories,
        productsByPrice,
        setProductsByPrice,
        productsBySearch,
        setProductsBySearch,
        minPrice,
        setMinPrice,
        allProducts,
        setAllProducts,
        search,
        setSearch,
        filteredByCategories,
        filteredByPrice,
        filteredBySearch,
        showCart,
        setShowCart,
        addProductToCart,
        productsInCart,
        setProductsInCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
