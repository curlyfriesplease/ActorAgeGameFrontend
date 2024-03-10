import React, { Suspense, useEffect, useState } from 'react';
import { ActorCard } from './actorCard/actorCard';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';

export const MainContainer = () => {
  const [currentActors, setCurrentActors] = useState<object>({});
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [questionNotYetAnswered, setQuestionNotYetAnswered] =
    useState<boolean>(false);

  useEffect(() => {
    console.log('useEffect triggered');
    const fetchData = async () => {
      const actors = await fetchActorData(null, null);
      console.log({ actors });
      setCurrentActors(actors);
      console.log({ currentActors });
    };
    fetchData();
  }, []);

  console.log({ currentActors });

  return (
    <div id="main-container">
      <h3>HOWTA game</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <ActorCard actor={currentActors} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ActorCard actor={currentActors} />
      </Suspense>
    </div>
  );
};
