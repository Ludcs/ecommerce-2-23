import React from 'react';

export const Filters = ({
  filteredByPrice,
  filteredByCategories,
  categorias,
  currentCategory,
  minPrice,
  setMinPrice,
}) => {
  const handleMinPriceChange = (e) => {
    console.log(e.target.value);
    setMinPrice(e.target.value);
    filteredByPrice(e.target.value);
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
        <option defaultValue="" selected disabled hidden>
          Select a category here!
        </option>
        <option value="all" hidden={currentCatToUpper === 'ALL'}>
          ALL
        </option>
        {categorias.map((el) => (
          <option
            key={el}
            value={el.toUpperCase()}
            hidden={el.toUpperCase() === currentCatToUpper}
            onClick={() => filteredByCategories(el)}
          >
            {el.toUpperCase()}
          </option>
        ))}
      </select>
      {currentCategory !== 'All' ? null : (
        <>
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
              max="1500"
              onChange={handleMinPriceChange}
            />
            <span className="font-primary font-bold text-base">
              ${minPrice}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
