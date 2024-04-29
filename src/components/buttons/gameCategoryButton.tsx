export const GameCategoryButton = ({
  imagePath,
  onClick,
}: {
  imagePath: string;
  onClick: () => void;
}) => {
  return (
    <button
      id="game-category-button"
      onClick={onClick}
      className="
            relative
            bg-gradient-to-br from-yellow-300 to-pink-600
            rounded-full
            ring-4
            ring-neutral-800
            pt-1
            pb-1
            h-full
            w-full
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
