import { useState } from 'react';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';
import { Actor } from '../../types/types';
import { Header } from './header/header';
import { Game } from '../game/game';
import { Menu } from '../menu/menu';
import marvel from '../../gameTemplates/marvel.json';
import nineties from '../../gameTemplates/nineties.json';
import british from '../../gameTemplates/british.json';
import scifi from '../../gameTemplates/scifi.json';
import testOnly from '../../gameTemplates/testOnly.json';
import { GameType } from '../../types/types';
import { twoRandomActorsFromRemainingActorIds } from '../../functions/selectTwoRandomActors';

const templates = {
  marvel: marvel,
  nineties: nineties,
  british: british,
  testOnly: testOnly,
  scifi: scifi,
};

export type Templates = typeof templates;

let randomActorIds: Array<number> = [];

export const MainContainer = () => {
  const [showGame, setShowGame] = useState<boolean>(false);
  const [currentActors, setCurrentActors] = useState<Array<Actor>>([]);
  const [nextQuestionActors, setNextQuestionActors] = useState<Array<Actor>>(
    []
  );
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [lastAnswer, setLastAnswer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiCallLimitReached, setApiCallLimitReached] =
    useState<boolean>(false);
  const [questionNotYetAnswered, setQuestionNotYetAnswered] =
    useState<boolean>(false);
  const [questionTemplateInUse, setQuestionTemplateInUse] =
    useState<string>('random');

  // TODO: Make an originalQuestionTemplateInUse so that the share button text doesn't say 'random' was being played, if the player makes it all the way through

  // const oneRandomActorFromRemainingActorIds = () => {
  //   console.log(
  //     'fetching one random actor from remainingActorIds, current length: ',
  //     randomActorIds.length
  //   );
  //   return randomActorIds.splice(
  //     Math.floor(Math.random() * randomActorIds.length),
  //     1
  //   )[0];
  // };

  const preLoadNextQuestionActors = () => {
    console.log('🫥 preLoadNextQuestionActors called');
    if (questionTemplateInUse !== 'random') {
      console.log(
        '🫥Preloading next question actors from questionTemplateInUse:',
        questionTemplateInUse
      );
      if (randomActorIds.length < 2) {
        window.alert(
          "Blimey. You've made it through all the actors in this game template. The game will continue, but with random actors from now on."
        );
        setQuestionTemplateInUse('random');
      }
      const twoActors = twoRandomActorsFromRemainingActorIds(randomActorIds);
      return fetchActorData(
        twoActors[0],
        twoActors[1],
        setNextQuestionActors,
        setIsLoading,
        setApiCallLimitReached
      );
    }
    console.log('fetching two random actors!!');
    return fetchActorData(
      null,
      null,
      setNextQuestionActors,
      setIsLoading,
      setApiCallLimitReached
    );
  };

  const goToNextQuestion = () => {
    setCurrentActors(nextQuestionActors);
    // TODO: something to deal with clicking really fast through to the next question, before the next actors are loaded
    setQuestionNotYetAnswered(true);
  };

  const startNewGame = (gameType: GameType) => {
    console.log('Starting new game. The gameType is:', gameType);
    setQuestionTemplateInUse(gameType);
    if (gameType !== 'random') {
      randomActorIds = [...templates[gameType]].flat();
    }
    setApiCallLimitReached(false);
    setCurrentScore(0);
    setCurrentActors([]);
    setNextQuestionActors([]);
    setLastAnswer(false);
    setQuestionNotYetAnswered(true);
    setIsLoading(true);

    let actor1, actor2;
    switch (gameType) {
      case 'random':
        actor1 = actor2 = null;
        break;
      default:
        [actor1, actor2] = twoRandomActorsFromRemainingActorIds(randomActorIds);
    }

    fetchActorData(
      actor1,
      actor2,
      setCurrentActors,
      setIsLoading,
      setApiCallLimitReached
    );
    setShowGame(true);
  };

  const actor1isOlder = currentActors[0]?.birthday < currentActors[1]?.birthday;
  const showAnswerScreen =
    currentActors.length === 2 && !questionNotYetAnswered;

  const handleClickActorCard = (choice: number) => {
    console.log(
      'clickActorCard:',
      choice,
      'questionNotYetAnswered',
      questionNotYetAnswered
    );

    preLoadNextQuestionActors();

    console.log(
      'the older actor was: ',
      actor1isOlder ? currentActors[0].name : currentActors[1].name
    );
    if (actor1isOlder) {
      if (choice === 0) {
        console.log('Choice 0 correct');
        setCurrentScore((prev: number) => prev + 1);
        setLastAnswer(true);
      } else {
        console.log('wrong');
        setLastAnswer(false);
      }
    } else {
      if (choice === 1) {
        console.log('Choice 1 correct');
        setCurrentScore((prev: number) => prev + 1);
        setLastAnswer(true);
      } else {
        console.log('wrong');
        setLastAnswer(false);
      }
    }
    setQuestionNotYetAnswered(false);
    // setIsLoading(true);
    // fetchActorData(null, null, setCurrentActors, setIsLoading);
  };

  return (
    <div
      id="main-container"
      className="
    flex
    flex-col
    items-center 
    justify-between
    h-full
    w-full
    "
    >
      <Header />

      {showGame ? (
        <Game
          currentActors={currentActors}
          isLoading={isLoading}
          questionNotYetAnswered={questionNotYetAnswered}
          lastAnswer={lastAnswer}
          currentScore={currentScore}
          showAnswerScreen={showAnswerScreen}
          handleClickActorCard={handleClickActorCard}
          goToNextQuestion={goToNextQuestion}
          startNewGame={startNewGame}
          setShowGame={setShowGame}
          gameType={questionTemplateInUse}
          actor1isOlder={actor1isOlder}
          apiCallLimitReached={apiCallLimitReached}
        />
      ) : (
        <Menu startNewGame={startNewGame} />
      )}
    </div>
  );
};
