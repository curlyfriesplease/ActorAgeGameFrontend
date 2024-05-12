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
      w-screen
      h-full
      flex
      flex-col
      justify-center
      items-center
      w-[90%]
      h-[40%]
      rounded-full
      z-10
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
        className="w-full h-full absolute z-0"
        particleColor="#fda4af"
      />
      <div
        id="answer-bounceInLetters-container"
        className="
        absolute
        flex
        flex-col
        justify-center 
        items-center 
        w-100vw 
        h-full
        absolute
        font-honk
        font-normal
        pointer-events-none
        "
      >
        <StaggeredBounceInLetters
          text={lastAnswer ? 'Correct' : 'Wrong'}
          isVisible={true}
        />
        {!lastAnswer && (
          <>
            <p className="text-4xl">Score: </p>
            <p className="text-7xl">{currentScore}</p>
          </>
        )}
      </div>
    </div>
  );
};
