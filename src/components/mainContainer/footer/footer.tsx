import { FloatingScore } from './floatingScore';
import { ShareButtons } from './shareButtons';

export const Footer = ({
  currentScore,
  lastAnswer,
  gameOver,
  gameType,
}: {
  currentScore: number;
  lastAnswer: boolean;
  gameOver: boolean;
  gameType: string;
}) => {
  return (
    <div
      id="footer"
      className="
        h-[3vh] 
        w-[100vw]
        max-h-[100px] 
        rounded p-1
        relative
        "
    >
      {lastAnswer && <FloatingScore currentScore={currentScore} />}
      {gameOver && (
        <ShareButtons currentScore={currentScore} gameType={gameType} />
      )}
    </div>
  );
};
