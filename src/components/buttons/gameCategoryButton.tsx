export const GameCategoryButton = ({
  imagePath,
  onClick,
  id,
}: {
  imagePath: string;
  onClick: () => void;
  id: string;
}) => {
  return (
    <button
      id="game-category-button"
      onClick={onClick}
      className="
            flex 
            flex-row 
            justify-center 
            items-center 
            w-[75%]
            h-[3rem]
            sm:h-[5rem]
            relative
            bg-gradient-to-br from-yellow-300 to-pink-600
            rounded-full
            ring-4
            ring-neutral-800
            pt-1
            pb-1
            mt-3
            mb-3
            "
    >
      <img
        id="game-category-button-image"
        src={imagePath}
        className="
          h-full w-full object-contain
      "
      />
    </button>
  );
};
