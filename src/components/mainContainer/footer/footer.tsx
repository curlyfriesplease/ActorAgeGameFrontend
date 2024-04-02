import { FloatingScore } from './floatingScore';

export const Footer = ({
  questionNotYetAnswered,
  currentScore,
  lastAnswer,
}: {
  questionNotYetAnswered: boolean;
  currentScore: number;
  lastAnswer: boolean;
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
    </div>
  );
};
