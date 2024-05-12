import { Actor } from '../../types/types';
import { Footer } from '../mainContainer/footer/footer';
import { ActorCard } from '../mainContainer/actorCard/actorCard';
import { AnswerResult } from '../mainContainer/answerResult/answerResult';
import { Loading } from '../Loading/loading';
import { motion, AnimatePresence } from 'framer-motion';
import { GameType } from '../../types/types';
import { getAge } from '../../functions/getAge';

export const Game = ({
  currentActors,
  isLoading,
  questionNotYetAnswered,
  lastAnswer,
  currentScore,
  showAnswerScreen,
  handleClickActorCard,
  goToNextQuestion,
  setShowGame,
  gameType,
  actor1isOlder,
}: {
  currentActors: Array<Actor>;
  isLoading: boolean;
  questionNotYetAnswered: boolean;
  lastAnswer: boolean;
  currentScore: number;
  showAnswerScreen: boolean;
  handleClickActorCard: (choice: number) => void;
  goToNextQuestion: () => void;
  startNewGame: (gameType: GameType) => void;
  setShowGame: (showGame: boolean) => void;
  gameType: string;
  actor1isOlder: boolean;
}) => {
  const gameOver = showAnswerScreen && !lastAnswer;
  console.group('Game.tsx issue debugging');
  console.log('currentActors:', currentActors);
  console.log(currentActors[0] && currentActors[1]);
  console.log('isLoading:', isLoading);
  console.groupEnd();

  const actor1age = getAge(currentActors[0]?.birthday);
  const actor2age = getAge(currentActors[1]?.birthday);
  const actorsAreTheSameAge = actor1age === actor2age;
  const getSameAgeClarification = (id: number) => {
    if (actorsAreTheSameAge) {
      if ((actor1isOlder && id === 1) || (!actor1isOlder && id === 2)) {
        return '(older)';
      } else {
        return '(younger)';
      }
    } else {
      return '';
    }
  };

  return (
    <>
      <div
        id="actor-cards"
        className="flex-col 
        justify-center 
        items-center 
        h-[85vh]
        relative
        "
      >
        {currentActors[0] && currentActors[1] && !isLoading ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentActors[0].id}
                initial={{ x: 500, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                exit={{ x: -500, opacity: 0, transition: { duration: 0.5 } }}
                className="
              h-[50%]
              w-full
              "
                id="actor-card-0-motion-div"
              >
                <ActorCard
                  data={currentActors[0]}
                  onClick={() => handleClickActorCard(0)}
                  age={actor1age}
                  deathAge={currentActors[0].deathday}
                  questionNotYetAnswered={questionNotYetAnswered}
                  showAnswerScreen={showAnswerScreen}
                  lastAnswer={lastAnswer}
                  gameOver={gameOver}
                  sameAgeClarification={getSameAgeClarification(1)}
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentActors[1].id}
                initial={{ x: 500, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.35 },
                }}
                exit={{ x: -500, opacity: 0, transition: { duration: 0.6 } }}
                className="
              h-[50%]
              w-full
              "
                id="actor-card-1-motion-div"
              >
                <ActorCard
                  data={currentActors[1]}
                  onClick={() => handleClickActorCard(1)}
                  age={actor2age}
                  deathAge={currentActors[1].deathday}
                  questionNotYetAnswered={questionNotYetAnswered}
                  showAnswerScreen={showAnswerScreen}
                  lastAnswer={lastAnswer}
                  gameOver={gameOver}
                  sameAgeClarification={getSameAgeClarification(2)}
                />
              </motion.div>
            </AnimatePresence>
          </>
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
        currentScore={currentScore}
        lastAnswer={lastAnswer}
        gameOver={gameOver}
        gameType={gameType}
      />
    </>
  );
};
