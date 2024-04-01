import { useEffect, useState } from 'react';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';
import { Actor } from '../../types/types';
import { Header } from './header/header';
import { Game } from '../game/game';
import { Menu } from '../menu/menu';
import * as topStars from '../../gameTemplates/topStars.json';

const templates = {
  topStars: topStars.default,
};

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
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const preLoadNextQuestionActors = () => {
    console.log('preLoadNextQuestionActors called');
    console.log('questionTemplateInUse:', questionTemplateInUse);
    if (questionTemplateInUse !== 'random') {
      console.group('OH DEAR');
      console.log(
        'fetching actors' +
          templates[questionTemplateInUse][questionNumber + 1][0] +
          ' and ' +
          templates[questionTemplateInUse][questionNumber + 1][1]
      );
      console.groupEnd();
      return fetchActorData(
        templates[questionTemplateInUse][questionNumber + 1][0],
        templates[questionTemplateInUse][questionNumber + 1][1],
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
    if (questionTemplateInUse !== 'random') {
      setQuestionNumber((prev) => prev + 1);
    }
  };

  const startNewGame = (gameType: string) => {
    console.log('the gameType is:', gameType);
    setQuestionTemplateInUse(gameType);
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
      case 'topStars':
        fetchActorData(
          topStars.default[0][0],
          topStars.default[0][1],
          setCurrentActors,
          setIsLoading
        );
        break;
      default:
        console.error('gameType not recognised, gametype:', gameType);
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

  // useEffect(() => {
  //   console.group('useEffect triggered');
  //   console.log('currentActors', currentActors);
  //   console.log('questionNotYetAnswered', questionNotYetAnswered);
  //   // if (currentActors.length === 0 || !questionNotYetAnswered) {
  //   //   console.log('fetchActorData called');
  //   //   fetchActorData(null, null, setCurrentActors, setIsLoading);
  //   //   setQuestionNotYetAnswered(true);
  //   // }
  //   startNewGame();
  //   console.groupEnd();
  // }, []);

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
        />
      ) : (
        <Menu startNewGame={startNewGame} />
      )}
    </div>
  );
};
