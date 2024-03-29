import { Actor } from '../types/types';

export const fetchActorData = (
  actor1: number | null,
  actor2: number | null,
  setActors: React.Dispatch<React.SetStateAction<Array<Actor>>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log('fetchActorData called');
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
      console.log('response', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const jsonObject = JSON.parse(data.body).message;
      if (
        jsonObject.length === 2 &&
        'birthday' in jsonObject[0] &&
        jsonObject[0].birthday !== null &&
        'birthday' in jsonObject[1] &&
        jsonObject[1].birthday !== null
      ) {
        console.log('Successful data fetch: both actors have birthdays');
        setActors(jsonObject);
      } else {
        console.log(
          '🔴 at least one actor does not have a birthday, fetching again'
        );
        fetchActorData(null, null, setActors, setIsLoading);
      }
    })
    .then(() => setIsLoading(false))
    .catch((error) => console.error('error', error));
};
