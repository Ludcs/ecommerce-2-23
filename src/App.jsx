import {useContext} from 'react';
import {Filters} from './components/Filters';
import {Header} from './components/Header';
import {ProductsList} from './components/ProductsList';
import {EcommerceContext} from './context/EcommerceContext';

function App() {
  const {currentCategory, loading} = useContext(EcommerceContext);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
          <p className="font-primary font-bold text-3xl">Loading...</p>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
