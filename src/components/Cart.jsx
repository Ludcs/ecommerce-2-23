import React, {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';

export const Cart = () => {
  const {showCart, productsInCart, addProductToCart} =
    useContext(EcommerceContext);

  return (
    <>
      {showCart && (
        //Mapear productsInCart!
        <div className="flex flex-col m-auto p-3 w-[450px] font-primary bg-slate-300 border-l border-b border-r border-solid border-gray-800 absolute top-16 right-16 gap-2">
          {productsInCart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between w-full items-center bg-red-200"
            >
              <img
                className="w-14 h-14"
                src={item.images[0]}
                alt={item.title}
              />
              <p>{item.title}</p>
              <div className="flex justify-between gap-1">
                <button>-</button>
                <p>{item.amount}</p>
                <button onClick={() => addProductToCart(item)}>+</button>
              </div>
              <p>$ {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
