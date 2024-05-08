import HOWTA_png_small_title_compressed from '../../../assets/HOWTA_png_small_title_compressed.png';

export const Header = () => {
  return (
    <div
      id="header"
      className="
    h-[10vh] 
    max-h-[100px] 
    w-[95%]
    max-w-[700px]
    flex 
    items-center 
    justify-around
    pt-4
    rounded p-1
    "
    >
      <button
        className="bg-blue-300 bg-opacity-80 font-jost text-sky-900 p-2 text-sm ring-2 ring-neutral-800 hover:bg-blue-400 w-[75px]"
        onClick={() =>
          (window.location.href = 'https://game.howoldwasthat.actor')
        }
      >
        GAME
      </button>
      <img
        src={HOWTA_png_small_title_compressed}
        alt="HOWTA"
        className="max-w-[40%]"
      />
      <button
        className="bg-blue-100 bg-opacity-80 font-jost text-sky-900 p-2 text-sm hover:bg-blue-400 w-[75px]"
        onClick={() =>
          (window.location.href = 'https://www.howoldwasthat.actor')
        }
      >
        SEARCH
      </button>
    </div>
  );
};
