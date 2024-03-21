import { useEffect, useState } from 'react';
import { ActorCard } from './actorCard/actorCard';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';
import { Actor } from '../../types/types';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Loading } from '../Loading/loading';

export const MainContainer = () => {
  const [currentActors, setCurrentActors] = useState<Array<Actor>>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [lastAnswer, setLastAnswer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questionNotYetAnswered, setQuestionNotYetAnswered] =
    useState<boolean>(false);

  const handleClickActorCard = (choice: number) => {
    console.log(
      'clickActorCard:',
      choice,
      'questionNotYetAnswered',
      questionNotYetAnswered
    );

    const actor1isOlder = currentActors[0].birthday < currentActors[1].birthday;
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
    setIsLoading(true);
    fetchActorData(null, null, setCurrentActors, setIsLoading);
  };

  useEffect(() => {
    console.log('useEffect triggered');
    console.log('currentActors', currentActors);
    console.log('questionNotYetAnswered', questionNotYetAnswered);
    if (currentActors.length === 0 || !questionNotYetAnswered) {
      console.log('fetchActorData called');
      fetchActorData(null, null, setCurrentActors, setIsLoading);
      setQuestionNotYetAnswered(true);
    }
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
        "
      >
        {currentActors && currentActors[0] && !isLoading ? (
          <ActorCard
            data={currentActors[0]}
            onClick={() => handleClickActorCard(0)}
          />
        ) : (
          <Loading />
        )}
        {currentActors && currentActors[1] && !isLoading ? (
          <ActorCard
            data={currentActors[1]}
            onClick={() => handleClickActorCard(1)}
          />
        ) : (
          <Loading />
        )}
      </div>
      <Footer
        currentActors={currentActors}
        questionNotYetAnswered={questionNotYetAnswered}
        setQuestionNotYetAnswered={setQuestionNotYetAnswered}
        lastAnswer={lastAnswer}
        currentScore={currentScore}
      />
    </div>
  );
};
