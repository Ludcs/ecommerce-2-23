import {useContext, useState} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';

export const CardProduct = ({el}) => {
  const {addProductToCart} = useContext(EcommerceContext);

  const handleAddProductClick = () => {
    addProductToCart(el);
  };

  return (
    <div className=" w-64 flex flex-col justify-between">
      <div className="w-64 h-64">
        <img
          className="w-64 h-64 object-contain"
          src={el.images[0]}
          alt={el.title}
        />
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <p className="font-primary font-bold text-base text-center uppercase">
          {el.title}
        </p>
        <p className="font-primary text-xs text-center">{el.description}</p>
        <p className="font-primary font-bold text-base">${el.price}</p>
        <button
          className="w-full font-primary text-center border border-solid border-gray-400"
          onClick={handleAddProductClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
