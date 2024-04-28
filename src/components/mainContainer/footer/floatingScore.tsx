import { Fire } from './fireAnimation/fire';

export const FloatingScore = ({ currentScore }: { currentScore: number }) => {
  const tailwindScoreColor = () => {
    // Not the most elegant function, but sadly tailwind doesn't support a dynamically generated class name, it only accepts complete unbroken strings https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    switch (currentScore) {
      case 0:
        return 'text-green-900';
      case 1:
        return 'text-emerald-900';
      case 2:
        return 'text-teal-900';
      case 3:
        return 'text-cyan-900';
      case 4:
        return 'text-sky-900';
      case 5:
        return 'text-blue-900';
      case 6:
        return 'text-indigo-900';
      case 7:
        return 'text-violet-900';
      case 8:
        return 'text-slate-900';
      case 9:
        return 'text-zinc-900';
      default:
        return 'text-neutral-950';
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
      ${scoreColor}
      `}
    >
      {currentScore > 9 && <Fire />}
      <h4 className="text-2xl z-10 relative">SCORE</h4>
      <h4 className="text-5xl z-10 relative">{currentScore}</h4>
    </div>
  );
};
