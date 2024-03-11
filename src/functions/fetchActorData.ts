import { Actor } from '../types/types';

export const fetchActorData = (
  actor1: number | null,
  actor2: number | null,
  setCurrentActors: React.Dispatch<React.SetStateAction<Array<Actor>>>
) => {
  fetch('https://39gvqht805.execute-api.eu-west-2.amazonaws.com/v1/actors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      actor1: actor1 ? actor1 : null,
      actor2: actor2 ? actor2 : null,
    }),
  })
    .then((response) => {
      // console.log('response', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const jsonObject = JSON.parse(data.body).message;
      console.log('jsonObject', jsonObject);
      setCurrentActors(jsonObject);
    })
    .catch((error) => console.error('error', error));
};
