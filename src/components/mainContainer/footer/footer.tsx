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
  console.log(questionNotYetAnswered, 'questionNotYetAnswered');
  return (
    <div
      id="footer"
      className="
        h-[5vh] 
        w-[100vw]
        max-h-[100px] 
        bg-blue-700 
        rounded p-1
        relative
        "
    >
      {lastAnswer && <FloatingScore currentScore={currentScore} />}
    </div>
  );
};
