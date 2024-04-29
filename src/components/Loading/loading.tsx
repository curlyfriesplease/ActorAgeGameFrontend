import loader from '../../assets/loader.png';

export const Loading = () => {
  return (
    <div
      id="loading"
      className="
        flex 
        flex-col 
        justify-center 
        items-center 
        h-full
        "
    >
      <img src={loader} alt="loading" />
    </div>
  );
};
