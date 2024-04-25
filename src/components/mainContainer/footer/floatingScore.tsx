import { Fire } from './fireAnimation/fire';

export const FloatingScore = ({ currentScore }: { currentScore: number }) => {
  const tailwindScoreColor = () => {
    // Not the most elegant function, but sadly tailwind doesn't support a dynamically generated class name, it only accepts complete unbroken strings https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    switch (currentScore) {
      case 0:
        return 'text-red-50';
      case 1:
        return 'text-red-100';
      case 2:
        return 'text-red-200';
      case 3:
        return 'text-red-300';
      case 4:
        return 'text-red-400';
      case 5:
        return 'text-red-500';
      case 6:
        return 'text-red-600';
      case 7:
        return 'text-red-700';
      case 8:
        return 'text-red-800';
      case 9:
        return 'text-red-900';
      default:
        return 'text-red-950';
    }
  };

  const scoreColor = tailwindScoreColor();
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
      ${scoreColor}
      `}
    >
      <h4 className="text-2xl">SCORE</h4>
      <h4 className="text-5xl">{currentScore}</h4>
      {currentScore > 3 && <Fire />}
    </div>
  );
};
