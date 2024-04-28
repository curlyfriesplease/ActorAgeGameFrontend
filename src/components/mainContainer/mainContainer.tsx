import { useState } from 'react';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';
import { Actor } from '../../types/types';
import { Header } from './header/header';
import { Game } from '../game/game';
import { Menu } from '../menu/menu';
import topStars from '../../gameTemplates/topStars.json';
import marvel from '../../gameTemplates/marvel.json';
import nineties from '../../gameTemplates/nineties.json';
import { GameType } from '../../types/types';

const templates = {
  topStars: topStars,
  marvel: marvel,
  nineties: nineties,
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
  const [questionNotYetAnswered, setQuestionNotYetAnswered] =
    useState<boolean>(false);
  const [questionTemplateInUse, setQuestionTemplateInUse] =
    useState<string>('random');

  const oneRandomActorFromRemainingActorIds = () => {
    console.log(
      'fetching one random actor from remainingActorIds, current length: ',
      randomActorIds.length
    );
    return randomActorIds.splice(
      Math.floor(Math.random() * randomActorIds.length),
      1
    )[0];
  };

  const preLoadNextQuestionActors = () => {
    console.log('preLoadNextQuestionActors called');
    if (questionTemplateInUse !== 'random') {
      console.group(
        'Preloading next question actors from questionTemplateInUse:',
        questionTemplateInUse
      );
      console.groupEnd();
      return fetchActorData(
        oneRandomActorFromRemainingActorIds(),
        oneRandomActorFromRemainingActorIds(),
        setNextQuestionActors,
        setIsLoading
      );
    }
    console.log('fetching random actors!!');
    return fetchActorData(null, null, setNextQuestionActors, setIsLoading);
  };

  const goToNextQuestion = () => {
    console.log('questionTemplateInUse:', questionTemplateInUse);
    setCurrentActors(nextQuestionActors);
    // TODO: something to deal with clicking really fast through to the next question, before the next actors are loaded
    setQuestionNotYetAnswered(true);
  };

  const startNewGame = (gameType: GameType) => {
    console.log('the gameType is:', gameType);
    setQuestionTemplateInUse(gameType);
    if (gameType !== 'random') {
      randomActorIds = [...templates[gameType]].flat();
    }
    setCurrentScore(0);
    setCurrentActors([]);
    setNextQuestionActors([]);
    setLastAnswer(false);
    setQuestionNotYetAnswered(true);
    setIsLoading(true);
    switch (gameType) {
      case 'random':
        fetchActorData(null, null, setCurrentActors, setIsLoading);
        break;
      default:
        fetchActorData(
          oneRandomActorFromRemainingActorIds(),
          oneRandomActorFromRemainingActorIds(),
          setCurrentActors,
          setIsLoading
        );
    }
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
    h-screen
    w-screen
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
        />
      ) : (
        <Menu startNewGame={startNewGame} />
      )}
    </div>
  );
};
