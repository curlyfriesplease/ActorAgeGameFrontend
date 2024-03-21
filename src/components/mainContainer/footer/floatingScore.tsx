export const FloatingScore = ({ currentScore }: { currentScore: number }) => {
  return (
    <h4
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
      Score:
      <h3>{currentScore}</h3>
    </h4>
  );
};
