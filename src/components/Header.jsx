import {useContext} from 'react';
import User from '../assets/u_user.png';
import {EcommerceContext} from '../context/EcommerceContext';

export const Header = () => {
  const {
    categorias,
    currentCategory,
    setcurrentCategory,
    filteredByCategories,
    productsByCategories,
    setProductsByCategories,
    filteredBySearch,
    setProductsByPrice,
    minPrice,
    setMinPrice,
    productsByPrice,
    setProductsBySearch,
    setAllProducts,
    search,
    setSearch,
  } = useContext(EcommerceContext);

  const handleImputChange = ({target}) => {
    setSearch(target.value.toLowerCase());
    filteredBySearch(target.value.toLowerCase());
  };

  const handleClickAllProducts = (e) => {
    setProductsByCategories([]);
    setProductsByPrice([]);
    setProductsBySearch([]);
    setMinPrice(0);
    setcurrentCategory(e.target.lastChild.data);
    setAllProducts(true);
    setSearch('');
  };

  return (
    <main className="bg-white w-4/5 h-32 mx-auto">
      <div className="h-16 bg-white border border-gray-900 font-mono flex px-16 justify-between items-center ">
        <svg
          width="17"
          height="26"
          viewBox="0 0 17 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-transparent"
        >
          <path
            d="M0.34 0.835998V-0.164002H-0.66V0.835998H0.34ZM16.936 0.835998H17.936V-0.164002H16.936V0.835998ZM16.936 3.932V4.932H17.936V3.932H16.936ZM4.012 3.932V2.932H3.012V3.932H4.012ZM4.012 11.96H3.012V12.96H4.012V11.96ZM13.66 11.96H14.66V10.96H13.66V11.96ZM13.66 14.876V15.876H14.66V14.876H13.66ZM4.012 14.876V13.876H3.012V14.876H4.012ZM4.012 26V27H5.012V26H4.012ZM0.34 26H-0.66V27H0.34V26ZM0.34 1.836H16.936V-0.164002H0.34V1.836ZM15.936 0.835998V3.932H17.936V0.835998H15.936ZM16.936 2.932H4.012V4.932H16.936V2.932ZM3.012 3.932V11.96H5.012V3.932H3.012ZM4.012 12.96H13.66V10.96H4.012V12.96ZM12.66 11.96V14.876H14.66V11.96H12.66ZM13.66 13.876H4.012V15.876H13.66V13.876ZM3.012 14.876V26H5.012V14.876H3.012ZM4.012 25H0.34V27H4.012V25ZM1.34 26V0.835998H-0.66V26H1.34Z"
            fill="black"
          />
        </svg>
        <p className="text-xl font-primary font-bold">Faithfull The Brand</p>
        <img src={User} alt="User Icon" />
      </div>
      <div className="h-16 bg-white border border-gray-900 border-t-0 px-16 font-primary text-sm flex justify-between items-center ">
        <div className="w-36 h-full p-5 border-l border-gray-900 flex justify-center items-center">
          <p
            className="cursor-pointer uppercase"
            onClick={(e) => handleClickAllProducts(e)}
          >
            all
          </p>
        </div>
        {categorias.map((el, index) => {
          if (index === 0) {
            return (
              <div
                key={el}
                className="w-36 h-full p-5 border-l border-r border-gray-900 flex justify-center items-center"
              >
                <p
                  className="cursor-pointer uppercase"
                  onClick={() => filteredByCategories(el)}
                >
                  {el}
                </p>
              </div>
            );
          } else if (index === 5) {
            return (
              <div
                key={el}
                className="w-36 h-full p-5 border-r border-gray-900 flex justify-center items-center"
              >
                <p
                  className="cursor-pointer uppercase"
                  onClick={() => filteredByCategories(el)}
                >
                  {el}
                </p>
              </div>
            );
          } else {
            return (
              <div
                key={el}
                className="w-36 h-full p-5  border-r border-gray-900 flex justify-center items-center"
              >
                <p
                  className="cursor-pointer uppercase"
                  onClick={() => filteredByCategories(el)}
                >
                  {el}
                </p>
              </div>
            );
          }
        })}
        <div className="p-5 border-r border-gray-900 flex justify-center items-center">
          <input
            className={`${
              currentCategory !== 'all' && 'cursor-not-allowed'
            } "outline-none pr-1"`}
            type="text"
            value={search}
            name={search}
            placeholder="SEARCH"
            disabled={
              (minPrice > 0) & (productsByPrice.length !== 0) ||
              productsByCategories.length !== 0
            }
            onChange={(e) => handleImputChange(e)}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0917 16.9083L15 13.8417C16.2001 12.3454 16.7813 10.4461 16.624 8.53443C16.4668 6.62276 15.5831 4.844 14.1546 3.56388C12.7262 2.28377 10.8615 1.5996 8.94411 1.65207C7.02671 1.70454 5.20228 2.48965 3.84596 3.84596C2.48965 5.20228 1.70454 7.02671 1.65207 8.94411C1.5996 10.8615 2.28377 12.7262 3.56388 14.1546C4.844 15.5831 6.62276 16.4668 8.53443 16.624C10.4461 16.7813 12.3454 16.2001 13.8417 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.2811 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0917 18.0667C18.2419 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2419 17.0637 18.0917 16.9083ZM9.16668 15C8.01295 15 6.88514 14.6579 5.92585 14.0169C4.96657 13.3759 4.21889 12.4649 3.77738 11.399C3.33587 10.3331 3.22035 9.16021 3.44543 8.02865C3.67051 6.8971 4.22608 5.8577 5.04189 5.04189C5.8577 4.22608 6.8971 3.67051 8.02865 3.44543C9.16021 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2915 13.2915C12.1975 14.3854 10.7138 15 9.16668 15Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="border-r border-gray-900 flex p-5 justify-center items-center gap-x-1.5">
          <p>CART</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 5.83332H13.3333V4.99999C13.3333 4.11594 12.9821 3.26809 12.357 2.64297C11.7319 2.01785 10.884 1.66666 9.99998 1.66666C9.11592 1.66666 8.26808 2.01785 7.64296 2.64297C7.01784 3.26809 6.66665 4.11594 6.66665 4.99999V5.83332H4.16665C3.94563 5.83332 3.73367 5.92112 3.57739 6.0774C3.42111 6.23368 3.33331 6.44564 3.33331 6.66666V15.8333C3.33331 16.4964 3.59671 17.1323 4.06555 17.6011C4.53439 18.0699 5.17027 18.3333 5.83331 18.3333H14.1666C14.8297 18.3333 15.4656 18.0699 15.9344 17.6011C16.4033 17.1323 16.6666 16.4964 16.6666 15.8333V6.66666C16.6666 6.44564 16.5788 6.23368 16.4226 6.0774C16.2663 5.92112 16.0543 5.83332 15.8333 5.83332ZM8.33331 4.99999C8.33331 4.55796 8.50891 4.13404 8.82147 3.82148C9.13403 3.50892 9.55795 3.33332 9.99998 3.33332C10.442 3.33332 10.8659 3.50892 11.1785 3.82148C11.4911 4.13404 11.6666 4.55796 11.6666 4.99999V5.83332H8.33331V4.99999ZM15 15.8333C15 16.0543 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1666 16.6667H5.83331C5.6123 16.6667 5.40034 16.5789 5.24406 16.4226C5.08778 16.2663 4.99998 16.0543 4.99998 15.8333V7.49999H6.66665V8.33332C6.66665 8.55434 6.75444 8.7663 6.91072 8.92258C7.067 9.07886 7.27897 9.16666 7.49998 9.16666C7.72099 9.16666 7.93295 9.07886 8.08923 8.92258C8.24551 8.7663 8.33331 8.55434 8.33331 8.33332V7.49999H11.6666V8.33332C11.6666 8.55434 11.7544 8.7663 11.9107 8.92258C12.067 9.07886 12.279 9.16666 12.5 9.16666C12.721 9.16666 12.933 9.07886 13.0892 8.92258C13.2455 8.7663 13.3333 8.55434 13.3333 8.33332V7.49999H15V15.8333Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};
