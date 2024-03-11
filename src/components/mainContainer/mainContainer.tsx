import React, { Suspense, useEffect, useState } from 'react';
import { ActorCard } from './actorCard/actorCard';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';
import { Actor } from '../../types/types';

export const MainContainer = () => {
  const [currentActors, setCurrentActors] = useState<Array<Actor>>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [questionNotYetAnswered, setQuestionNotYetAnswered] =
    useState<boolean>(false);

  const handleClickActorCard = (choice: number) => {
    console.log(
      'clickActorCard:',
      choice,
      'questionNotYetAnswered',
      questionNotYetAnswered
    );
    // is correct answer?
    setQuestionNotYetAnswered(false);
  };

  useEffect(() => {
    console.log('useEffect triggered');
    console.log('currentActors', currentActors);
    console.log('questionNotYetAnswered', questionNotYetAnswered);
    if (currentActors.length === 0 || !questionNotYetAnswered) {
      console.log('fetchActorData called');
      fetchActorData(null, null, setCurrentActors);
      setQuestionNotYetAnswered(true);
    }
  }, []);

  return (
    <div id="main-container">
      <h2 className="text-orange-500">HOWTA game</h2>
      {currentActors && currentActors[0] ? (
        <ActorCard
          actor={currentActors[0]}
          onClick={() => handleClickActorCard(0)}
        />
      ) : null}
      {currentActors && currentActors[1] ? (
        <ActorCard
          actor={currentActors[1]}
          onClick={() => handleClickActorCard(1)}
        />
      ) : null}
      <h4 className="text-emerald-400">Current score: {currentScore}</h4>
    </div>
  );
};
