import { useEffect, useState } from 'react';
import { ActorCard } from './actorCard/actorCard';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';
import { Actor } from '../../types/types';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Loading } from '../Loading/loading';
import { AnswerResult } from './answerResult/answerResult';

export const MainContainer = () => {
  const [currentActors, setCurrentActors] = useState<Array<Actor>>([]);
  const [nextQuestionActors, setNextQuestionActors] = useState<Array<Actor>>(
    []
  );
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [lastAnswer, setLastAnswer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questionNotYetAnswered, setQuestionNotYetAnswered] =
    useState<boolean>(false);

  const preLoadNextQuestionActors = () => {
    fetchActorData(null, null, setNextQuestionActors, setIsLoading);
  };

  const goToNextQuestion = () => {
    setCurrentActors(nextQuestionActors);
    setNextQuestionActors([]);
    setQuestionNotYetAnswered(true);
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

  useEffect(() => {
    console.group('useEffect triggered');
    console.log('currentActors', currentActors);
    console.log('questionNotYetAnswered', questionNotYetAnswered);
    if (currentActors.length === 0 || !questionNotYetAnswered) {
      console.log('fetchActorData called');
      fetchActorData(null, null, setCurrentActors, setIsLoading);
      setQuestionNotYetAnswered(true);
    }
    console.groupEnd();
  }, []);

  return (
    <div
      id="main-container"
      className="
    flex
    flex-col
    items-center 
    justify-between
    h-screen
    "
    >
      <Header />
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
            />
          </>
        ) : null}
      </div>
      <Footer
        questionNotYetAnswered={questionNotYetAnswered}
        currentScore={currentScore}
      />
    </div>
  );
};
