export const FloatingScore = ({ currentScore }: { currentScore: number }) => {
  const tailwindScoreColor = () => {
    let textColor;
    if (currentScore < 1) textColor = `text-red-50`;
    else if (currentScore > 9) textColor = `text-red-950`;
    else textColor = `text-red-${currentScore}00`;
    console.log('textColor', textColor);
    return textColor;
  };

  return (
    <div
      id="floatingScore"
      className={`
      absolute 
      bottom-4
      left-3
      max-w-[140px]
      max-h-[140px]
      w-[20%]
      wrap-text
      font-jersey
      rounded-full
      backdrop-blur-xl
      ${tailwindScoreColor()}
      `}
    >
      <h4 className="text-2xl">SCORE</h4>
      <h4 className="text-5xl">{currentScore}</h4>
    </div>
  );
};
