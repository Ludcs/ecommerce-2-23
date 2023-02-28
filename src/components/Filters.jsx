import React, {useState} from 'react';

export const Filters = ({categorias, currentCategory}) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const currentCatToUpper = currentCategory.toUpperCase();

  return (
    <div className="bg-white border-b border-gray-900 border-l border-solid flex flex-col pt-8 px-16 w-1/3">
      <h2 className="pb-8 flex items-center font-primary text-5xl border-b border-gray-400">
        / {currentCatToUpper}
      </h2>
      <label
        htmlFor="filters-category"
        className="pt-8 mb-3 font-primary font-bold text-sm"
      >
        CATEGORIES:
      </label>
      <select
        id="filters-category"
        className="font-primary font-bold text-sm h-10 px-2 mb-8 rounded-md border-solid border-gray-400"
      >
        <option value="all">{currentCatToUpper}</option>
        {categorias.map((el) => {
          if (el.toUpperCase() === currentCatToUpper) {
            <option key={el} value="decoration">
              {el.toUpperCase()}
            </option>;
          }
        })}
      </select>
      <label
        htmlFor="filter-price"
        className="mb-3 font-primary font-bold text-sm"
      >
        PRICE FROM:
      </label>
      <div className="flex w-full items-center gap-4 px-0 pb-8">
        <input
          className="w-full"
          type="range"
          id="filter-price"
          min="0"
          max="1000"
          onChange={handleMinPriceChange}
        />
        <span className="font-primary font-bold text-base">${minPrice}</span>
      </div>
    </div>
  );
};
