export const Menu = ({
  startNewGame,
}: {
  startNewGame: (gameType: string) => void;
}) => {
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
      <p className="bg-lime-500" onClick={() => startNewGame('random')}>
        Start new random game
      </p>
      <br />
      <p className="bg-lime-500" onClick={() => startNewGame('topStars')}>
        Start new Top Stars game
      </p>
    </div>
  );
};
