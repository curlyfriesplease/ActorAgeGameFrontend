export const AnswerResult = ({
  goToNextQuestion,
  lastAnswer,
}: {
  goToNextQuestion: () => void;
  lastAnswer: boolean;
}) => {
  console.log(lastAnswer, ' answerResult lastAnswer');
  return (
    <div
      id="answer-result"
      className="
      absolute 
      top-1/2 
      left-1/2 
      -translate-x-1/2 
      -translate-y-1/2 
      z-10
      w-[80vw]
      h-full
      flex
      justify-center
      items-center
      "
      onClick={() => goToNextQuestion()}
    >
      <p className="h-6 p-0 w-[40%]">{lastAnswer ? 'Correct!' : 'Wrong!'}</p>
    </div>
  );
};
