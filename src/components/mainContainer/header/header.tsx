import HOWTA_png_small_title_compressed from '../../../assets/HOWTA_png_small_title_compressed.png';

export const Header = () => {
  return (
    <div
      id="header"
      className="
    h-[10vh] 
    max-h-[100px] 
    flex 
    items-center 
    justify-center
    pt-4
    rounded p-1
    "
    >
      <img
        src={HOWTA_png_small_title_compressed}
        alt="HOWTA"
        className="max-w-full h-full"
      />
    </div>
  );
};
