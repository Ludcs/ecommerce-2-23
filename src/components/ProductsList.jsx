import React, {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';
import {CardProduct} from './CardProduct';

export const ProductsList = () => {
  const {
    allProducts,
    products,
    productsByCategories,
    productsByPrice,
    productsBySearch,
  } = useContext(EcommerceContext);

  return (
    <>
      {allProducts ? (
        <div className="pb-3 border-gray-900 border-r border-solid w-full border-b">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {products.map((el) => (
              <CardProduct key={el.id} el={el} />
            ))}
          </div>
        </div>
      ) : (
        <div className=" pb-3 border-gray-900 border-r border-b border-solid w-full">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {productsByCategories.length !== 0 &&
              productsByCategories.map((el) => (
                <CardProduct key={el.id} el={el} />
              ))}
            {productsByPrice.length !== 0 &&
              productsByPrice.map((el) => <CardProduct key={el.id} el={el} />)}
            {(productsBySearch.length === 0) &
            (productsByCategories.length === 0) &
            (productsByPrice.length === 0) ? (
              <p className="font-primary font-bold text-xl uppercase">
                no product was found 🔍
              </p>
            ) : (
              productsBySearch.map((el) => <CardProduct key={el.id} el={el} />)
            )}
          </div>
        </div>
      )}
    </>
  );
};
