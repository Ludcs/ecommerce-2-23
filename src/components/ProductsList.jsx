import React from 'react';
import {CardProduct} from './CardProduct';

export const ProductsList = ({products}) => {
  return (
    <div className="border-b border-gray-900 border-r border-solid h-[680px] overflow-y-scroll w-2/3">
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {products.map((el) => (
          <CardProduct
            key={el.id}
            srcimage={el.images[2]}
            title={el.title}
            description={el.description}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

//w-2/3 h-[680px] pr-16 bg-green-300 overflow-y-scroll
