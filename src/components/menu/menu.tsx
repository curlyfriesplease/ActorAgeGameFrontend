export const Menu = ({ startNewGame }: { startNewGame: () => void }) => {
  return (
    <div
      id="menu"
      className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        z-10
        w-full
        flex
        flex-col
        justify-center
        items-center
        "
    >
      <p className="bg-lime-500" onClick={() => startNewGame()}>
        Start new game
      </p>
    </div>
  );
};
