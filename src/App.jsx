import {useState, useEffect} from 'react';
import {Filters} from './components/Filters';
import {Header} from './components/Header';
import {ProductsList} from './components/ProductsList';
import {productitos as initialProducts} from './mocks/products.json';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [categorias, setCategorias] = useState([]);
  const [currentCategory, setcurrentCategory] = useState('all');
  const [productsByCategories, setProductsByCategories] = useState([]);
  const [productsByPrice, setProductsByPrice] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [allProducts, setAllProducts] = useState(true);

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
    console.log(str);

    if (str === 'all') {
      setAllProducts(true);
      setProductsByCategories([]);
      setcurrentCategory(str);
    } else {
      setProductsByCategories(products.filter((el) => el.category === str));
      setAllProducts(false);
      setProductsByPrice([]);
      setMinPrice(0);
      setcurrentCategory(str);
    }
  };

  const filteredByPrice = (price) => {
    let prices = products.filter((el) => el.price >= price);
    setProductsByPrice(prices);
    setAllProducts(false);
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-200">
        <Header
          categorias={categorias}
          setcurrentCategory={setcurrentCategory}
          filteredByCategories={filteredByCategories}
          setProductsByCategories={setProductsByCategories}
          setProductsByPrice={setProductsByPrice}
          setMinPrice={setMinPrice}
          products={products}
          setProducts={setProducts}
          setAllProducts={setAllProducts}
        />
        <div className="bg-white border-gray-900 border-l border-r border-solid flex h-16 items-center justify-start mx-auto px-16 w-4/5">
          <p className="font-primary text-sm text-gray-400">
            home → {currentCategory}
          </p>
        </div>
        <section className="w-4/5 mx-auto bg-white flex">
          <Filters
            categorias={categorias}
            currentCategory={currentCategory}
            setcurrentCategory={setcurrentCategory}
            filteredByPrice={filteredByPrice}
            filteredByCategories={filteredByCategories}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
          />
          <ProductsList
            allProducts={allProducts}
            products={products}
            productsByCategories={productsByCategories}
            productsByPrice={productsByPrice}
          />
        </section>
      </div>
    </>
  );
}

export default App;

// useEffect(() => {
//   fetch('https://fakestoreapi.com/products?limit=5')
//     .then((res) => res.json())
//     .then((json) => setProducts(json));
//   console.log(products);
// }, []);

// function getOnlyCategories(data) {
//   return data.reduce((categorie, item) => {
//     if (!categorie.includes(item.category)) {
//       categorie.push(item.category);
//       console.log(categorie);
//     }
//     return categorie;
//   }, []);
// }

// console.log('Categorias:', categorias.length - 1);

// const getSoloCategories = (json) => {
//     json.reduce((acc, item) => {
//       if (!acc.includes(item.category)) {
//         acc.push(item.category);
//       }
//       return acc;
//     }, []) //acc empieza siendo array vacio
// };

// console.log(getSoloCategories(initialProducts));
// console.log(categorias);
