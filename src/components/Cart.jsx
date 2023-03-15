import React, {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';

export const Cart = () => {
  const {
    showCart,
    setShowCart,
    productsInCart,
    setProductsInCart,
    addProductToCart,
    deleteProductFromCart,
  } = useContext(EcommerceContext);

  const sumTotalPriceAllProducts = productsInCart.reduce(
    (acc, el) => acc + el.amount * el.price,
    0
  );

  const handleResetCart = () => {
    setProductsInCart([]);
    setShowCart(false);
  };
  // w-[339px]
  return (
    <>
      {showCart && (
        <>
          <div className=" shadow-lg shadow-slate-500 flex flex-col m-auto min-w-[339px] p-3 overflow-y-scroll max-h-64 font-primary bg-white border-l border-b border-r border-solid border-gray-800 absolute top-16 right-16 gap-2">
            {productsInCart.length === 0 ? (
              <p className="text-center font-primary font-semibold uppercase">
                empty cart
              </p>
            ) : (
              productsInCart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 w-full items-center bg-green-300"
                >
                  <div className="flex items-center justify-start w-full">
                    <img
                      className="w-14 h-14"
                      src={item.images[0]}
                      alt={item.title}
                    />
                    <p className="italic truncate">{item.title}</p>
                  </div>
                  <div className="flex justify-end items-center w-full gap-10">
                    <div className="flex gap-2">
                      <button
                        className="text-base"
                        onClick={() => deleteProductFromCart(item)}
                      >
                        -
                      </button>
                      <p className="font-semibold text-base">{item.amount}</p>
                      <button
                        className="text-base"
                        onClick={() => addProductToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="pr-2 text-base">
                      ${item.price * item.amount}
                    </p>
                  </div>
                </div>
              ))
            )}
            {productsInCart.length !== 0 && (
              <div className="flex justify-between items-start mt-2">
                <p className="uppercase font-bold text-lg">subtotal:</p>
                <p className="uppercase font-bold text-lg">
                  ${sumTotalPriceAllProducts}
                </p>
              </div>
            )}

            {productsInCart.length !== 0 && (
              <button
                className="bg-slate-200 py-2 rounded uppercase font-semibold"
                onClick={() => handleResetCart()}
              >
                clean cart
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};
