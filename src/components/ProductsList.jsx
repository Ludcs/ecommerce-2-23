import React from 'react';
import {CardProduct} from './CardProduct';

export const ProductsList = ({products, categorias, productsByCategories}) => {
  return (
    <div className="border-b border-gray-900 border-r border-solid h-[680px] overflow-y-scroll w-2/3">
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {productsByCategories.length === 0
          ? products.map((el) => (
              <CardProduct
                key={el.id}
                srcimage={el.images[0]}
                title={el.title}
                description={el.description}
                price={el.price}
              />
            ))
          : productsByCategories.map((el) => (
              <CardProduct
                key={el.id}
                srcimage={el.images[0]}
                title={el.title}
                description={el.description}
                price={el.price}
              />
            ))}
      </div>
    </div>
  );
};
