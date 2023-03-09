import {useContext, useState} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';

export const CardProduct = ({el}) => {
  // console.log(el);
  const {addProductToCart} = useContext(EcommerceContext);
  const [quantity, setQuantity] = useState(0);
  const [visibleQuantity, setVisibleQuantity] = useState(false);

  // const handleAddProductClick = () => {
  //   setVisibleQuantity(true);
  // };

  // const handleMinorQuantity = () => {
  //   if (quantity === 1) {
  //     setVisibleQuantity(false);
  //   } else {
  //     setQuantity(quantity - 1);
  //   }
  // };

  const handleMoreQuantity = () => {
    setQuantity(quantity + 1);
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
      </div>
      {visibleQuantity ? (
        <div className="flex justify-between items-center">
          <button
            className="w-1/3 font-primary text-center border border-solid border-gray-400"
            // onClick={handleMinorQuantity}
          >
            -
          </button>
          <p className="w-1/3 text-center">{quantity}</p>
          <button
            className="w-1/3 font-primary text-center border border-solid border-gray-400"
            onClick={handleMoreQuantity}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="w-full font-primary text-center border border-solid border-gray-400"
          // onClick={() => addProductToCart(el)}
          onClick={() => setVisibleQuantity(true)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
