export const AnswerResult = ({
  goToNextQuestion,
  lastAnswer,
  currentScore,
  setShowGame,
}: {
  goToNextQuestion: () => void;
  lastAnswer: boolean;
  currentScore: number;
  setShowGame: (showGame: boolean) => void;
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
      flex-col
      justify-center
      items-center
      "
      onClick={() => {
        if (lastAnswer) goToNextQuestion();
      }}
    >
      <p
        className="h-6 
      p-0 
      w-[40%]
      bg-lime-500 
      "
      >
        {lastAnswer ? 'Correct!' : 'Wrong!'}
      </p>

      {!lastAnswer && (
        <>
          <p className="bg-lime-500">Final score: {currentScore}</p>
          <p className="bg-lime-500" onClick={() => setShowGame(false)}>
            Close
          </p>
        </>
      )}
    </div>
  );
};
