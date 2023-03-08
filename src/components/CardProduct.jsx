import {useState} from 'react';

export const CardProduct = ({srcimage, title, description, price}) => {
  const [quantity, setQuantity] = useState(1);
  const [visibleQuantity, setVisibleQuantity] = useState(false);

  const handleMinorQuantity = () => {
    if (quantity === 1) {
      setVisibleQuantity(false);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleMoreQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className=" w-64 flex flex-col justify-between">
      <div className="w-64 h-64">
        <img className="w-64 h-64 object-contain" src={srcimage} alt={title} />
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <p className="font-primary font-bold text-base text-center uppercase">
          {title}
        </p>
        <p className="font-primary text-xs text-center">{description}</p>
        <p className="font-primary font-bold text-base">${price}</p>
      </div>
      {visibleQuantity ? (
        <div className="flex justify-between items-center">
          <button
            className="w-1/3 font-primary text-center border border-solid border-gray-400"
            onClick={handleMinorQuantity}
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
          onClick={() => setVisibleQuantity(true)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
