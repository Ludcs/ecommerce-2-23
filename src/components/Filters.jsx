import React from 'react';

export const Filters = ({
  filteredByPrice,
  filteredByCategories,
  categorias,
  currentCategory,
  setcurrentCategory,
  minPrice,
  setMinPrice,
  productsBySearch,
}) => {
  const handleMinPriceChange = (e) => {
    console.log(e.target.value);
    setMinPrice(e.target.value);
    filteredByPrice(e.target.value);
  };

  const handleOptionsChange = ({target}) => {
    filteredByCategories(target.value);
    setcurrentCategory(target.value);
  };

  return (
    <div className="bg-white border-b border-gray-900 border-l border-solid flex flex-col pt-8 px-16 w-1/3">
      <h2 className="pb-8 flex items-center font-primary text-5xl border-b border-gray-400 uppercase">
        / {currentCategory}
      </h2>
      <label
        htmlFor="filters-category"
        className="pt-8 mb-3 font-primary font-bold text-sm"
      >
        CATEGORIES:
      </label>
      {/* DEFAULT VALUE CATEGORY */}
      <select
        defaultValue={currentCategory}
        onChange={(e) => handleOptionsChange(e)}
        id="filters-category"
        className="font-primary font-bold text-sm h-10 px-2 mb-8 rounded-md border-solid border-gray-400 uppercase"
      >
        {/* DEFAULT OPTION */}
        <option value={currentCategory} hidden>
          {currentCategory}
        </option>

        <option
          value="all"
          hidden={currentCategory === 'all'}
          onChange={(e) => handleOptionsChange(e)}
        >
          all
        </option>

        {categorias.map((el) => (
          <option
            key={el}
            value={el}
            hidden={el === currentCategory}
            onChange={(e) => handleOptionsChange(e)}
          >
            {el}
          </option>
        ))}
      </select>

      {/* PRICE FILTER */}
      {(currentCategory === 'all') & (productsBySearch.length === 0) ? (
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
      ) : null}
    </div>
  );
};
