export const Alert = ({message}) => {
  return (
    <div className="w-full h-8 bg-red-300 text-red-500 absolute top-0 text-center text-xl font-semibold">
      <p>{message}</p>
    </div>
  );
};
