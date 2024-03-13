import React, { Suspense, useEffect, useState } from 'react';
import { ActorCard } from './actorCard/actorCard';
import { fetchActorData } from '../../functions/fetchActorData';
import './style.css';
import { Actor } from '../../types/types';
import { AnswerResult } from './answerResult/answerResult';

export const MainContainer = () => {
  const [currentActors, setCurrentActors] = useState<Array<Actor>>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [lastAnswer, setLastAnswer] = useState<Boolean>(false);
  const [questionNotYetAnswered, setQuestionNotYetAnswered] =
    useState<boolean>(false);

  const handleClickActorCard = (choice: number) => {
    console.log(
      'clickActorCard:',
      choice,
      'questionNotYetAnswered',
      questionNotYetAnswered
    );
    const actor1isOlder = currentActors[0].birthday > currentActors[1].birthday;
    if (actor1isOlder) {
      if (choice === 0) {
        setCurrentScore((prev: number) => prev + 1);
        setLastAnswer(true);
      }
    } else {
      if (choice === 1) {
        setCurrentScore((prev: number) => prev + 1);
        setLastAnswer(true);
      }
    }
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

  useEffect(() => {
    if (!questionNotYetAnswered) {
      fetchActorData(null, null, setCurrentActors);
      setQuestionNotYetAnswered(true);
    }
  }, [questionNotYetAnswered]);

  return (
    <div id="main-container">
      <h2 className="text-orange-500">HOWTA game</h2>
      {currentActors && currentActors[0] ? (
        <ActorCard
          data={currentActors[0]}
          onClick={() => handleClickActorCard(0)}
        />
      ) : (
        <p>Loading....</p>
      )}
      {currentActors && currentActors[1] ? (
        <ActorCard
          data={currentActors[1]}
          onClick={() => handleClickActorCard(1)}
        />
      ) : (
        <p>Loading....</p>
      )}

      {currentActors.length === 2 && !questionNotYetAnswered ? (
        <AnswerResult
          currentActors={currentActors}
          setCurrentScore={setCurrentScore}
          setQuestionNotYetAnswered={setQuestionNotYetAnswered}
          lastAnswer={lastAnswer}
        />
      ) : null}

      <h4 className="text-emerald-400">Current score: {currentScore}</h4>
      <h4 className="text-emerald-400">
        questionNotYetAnswered: {String(questionNotYetAnswered)}
      </h4>
    </div>
  );
};
