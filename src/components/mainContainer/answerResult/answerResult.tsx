import { SparklesCore } from '../../effects/sparkles';
import { StaggeredBounceInLetters } from '../../effects/staggeredBounceInLetters';

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
      w-[90%]
      h-[40%]
      rounded-full
      "
      onClick={() => {
        if (lastAnswer) goToNextQuestion();
        else if (!lastAnswer) setShowGame(false);
      }}
    >
      <SparklesCore
        id="tsParticlesAnswerResult"
        background="transparent"
        minSize={0.9}
        maxSize={2.5}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#fda4af"
      />
      <div
        className="
        flex
        flex-col
        justify-center 
        items-center 
        w-full 
        h-full
        absolute
        font-honk
        font-normal
        "
      >
        <StaggeredBounceInLetters
          text={lastAnswer ? 'Correct' : 'Wrong'}
          isVisible={true}
        />
        {!lastAnswer && <p className="text-5xl">Score: {currentScore}</p>}
      </div>
    </div>
  );
};
