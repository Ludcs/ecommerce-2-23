import {useContext} from 'react';
import {Filters} from './components/Filters';
import {Header} from './components/Header';
import {ProductsList} from './components/ProductsList';
import {EcommerceContext} from './context/EcommerceContext';

function App() {
  const {currentCategory} = useContext(EcommerceContext);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-200">
        <Header />
        <div className="bg-white border-gray-900 border-l border-r border-solid flex h-16 items-center justify-start mx-auto px-16 max-w-7xl">
          <p className="font-primary text-sm text-gray-400">
            home → {currentCategory}
          </p>
        </div>
        <section className="max-w-7xl mx-auto bg-white flex min-h-[calc(100vh-192px)]">
          <Filters />
          <ProductsList />
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
