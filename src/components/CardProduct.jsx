export const CardProduct = ({srcimage, title, description, price}) => {
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
    </div>
  );
};
