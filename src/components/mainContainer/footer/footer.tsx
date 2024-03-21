import { AnswerResult } from '../answerResult/answerResult';
import { Actor } from '../../../types/types';
import { FloatingScore } from './floatingScore';

export const Footer = ({
  currentActors,
  questionNotYetAnswered,
  setQuestionNotYetAnswered,
  lastAnswer,
  currentScore,
}: {
  currentActors: Array<Actor>;
  questionNotYetAnswered: boolean;
  setQuestionNotYetAnswered: (arg0: boolean) => void;
  lastAnswer: boolean;
  currentScore: number;
}) => {
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
      {currentActors.length === 2 && !questionNotYetAnswered ? (
        <AnswerResult
          setQuestionNotYetAnswered={setQuestionNotYetAnswered}
          lastAnswer={lastAnswer}
        />
      ) : null}
      <FloatingScore currentScore={currentScore} />
    </div>
  );
};
