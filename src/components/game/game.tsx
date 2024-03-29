import { Actor } from '../../types/types';
import { Footer } from '../mainContainer/footer/footer';
import { ActorCard } from '../mainContainer/actorCard/actorCard';
import { AnswerResult } from '../mainContainer/answerResult/answerResult';
import { Loading } from '../Loading/loading';

export const Game = ({
  currentActors,
  isLoading,
  questionNotYetAnswered,
  lastAnswer,
  currentScore,
  showAnswerScreen,
  handleClickActorCard,
  goToNextQuestion,
  startNewGame,
  setShowGame,
}: {
  currentActors: Array<Actor>;
  isLoading: boolean;
  questionNotYetAnswered: boolean;
  lastAnswer: boolean;
  currentScore: number;
  showAnswerScreen: boolean;
  handleClickActorCard: (choice: number) => void;
  goToNextQuestion: () => void;
  startNewGame: () => void;
  setShowGame: (showGame: boolean) => void;
}) => {
  return (
    <>
      <div
        id="actor-cards"
        className="flex-col 
    justify-center 
    items-center 
    h-[85vh]
    bg-lime-900
    relative
    "
      >
        {currentActors && currentActors[0] && !isLoading ? (
          <ActorCard
            data={currentActors[0]}
            onClick={() => handleClickActorCard(0)}
            age={currentActors[0].birthday}
            questionNotYetAnswered={questionNotYetAnswered}
          />
        ) : (
          <Loading />
        )}
        {currentActors && currentActors[1] && !isLoading ? (
          <ActorCard
            data={currentActors[1]}
            onClick={() => handleClickActorCard(1)}
            age={currentActors[1].birthday}
            questionNotYetAnswered={questionNotYetAnswered}
          />
        ) : (
          <Loading />
        )}

        {showAnswerScreen ? (
          <>
            <AnswerResult
              goToNextQuestion={goToNextQuestion}
              lastAnswer={lastAnswer}
              currentScore={currentScore}
              setShowGame={setShowGame}
            />
          </>
        ) : null}
      </div>
      <Footer
        questionNotYetAnswered={questionNotYetAnswered}
        currentScore={currentScore}
        lastAnswer={lastAnswer}
      />
    </>
  );
};
