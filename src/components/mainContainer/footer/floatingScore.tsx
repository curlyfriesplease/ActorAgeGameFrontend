export const FloatingScore = ({ currentScore }: { currentScore: number }) => {
  return (
    <div
      className="
      id='floatingScore'
      absolute 
      bottom-1
      left-3
      max-w-[140px]
      max-h-[140px]
      w-[20%]
      wrap-text
      font-jersey
      rounded-full
      backdrop-blur-xl
      "
    >
      <h4 className="text-2xl text-neutral-100">SCORE</h4>
      <h4 className="text-5xl">{currentScore}</h4>
    </div>
  );
};
