export const AnswerResult = ({
  setQuestionNotYetAnswered,
  lastAnswer,
}: {
  setQuestionNotYetAnswered: (value: boolean) => void;
  lastAnswer: boolean;
}) => {
  console.log(lastAnswer, ' answerResult lastAnswer');
  return (
    <div id="answer-result">
      <button
        onClick={() => setQuestionNotYetAnswered(false)}
        className="h-6 p-0 w-[40%]"
      >
        {lastAnswer ? 'Correct!' : 'Wrong!'}
      </button>
    </div>
  );
};
