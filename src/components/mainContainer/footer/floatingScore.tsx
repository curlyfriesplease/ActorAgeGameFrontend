export const FloatingScore = ({ currentScore }: { currentScore: number }) => {
  return (
    <div
      className="
      id='floatingScore'
      text-emerald-400 
      absolute 
      text-lg
      left-3
      -translate-y-15
      max-w-[100px]
      w-[15%]
      wrap-text
      bg-amber-700
      "
    >
      <h4>Score:</h4>
      <h4>{currentScore}</h4>
    </div>
  );
};
