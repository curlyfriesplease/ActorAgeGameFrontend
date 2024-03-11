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

  useEffect(() => {
    console.log('useEffect triggered');
    const fetchData = async () => {
      const actors = await fetchActorData(null, null, setCurrentActors);
    };

    if (currentActors.length === 0 || questionNotYetAnswered) {
      fetchData();
    }
  }, []);

  return (
    <div id="main-container">
      <h3>HOWTA game</h3>
      <h4>Array length: {currentActors?.length}</h4>
      {currentActors && currentActors[0] ? (
        <ActorCard actor={currentActors[0]} />
      ) : null}
      {currentActors && currentActors[1] ? (
        <ActorCard actor={currentActors[1]} />
      ) : null}
    </div>
  );
};
