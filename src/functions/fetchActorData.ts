import { Actor } from '../types/types';

export const fetchActorData = (
  actor1: number | null,
  actor2: number | null,
  setActors: React.Dispatch<React.SetStateAction<Array<Actor>>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setApiCallLimitReached: React.Dispatch<React.SetStateAction<boolean>>,
  callCount: number = 0
) => {
  console.log('fetchActorData called with actor1:', actor1, 'actor2:', actor2);
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
        console.log('✅ Successful data fetch: both actors have birthdays');
        console.dir(jsonObject);
        setActors(jsonObject);
      } else if (callCount < 10) {
        console.group(
          '🔴 at least one actor does not have a birthday, fetching again...'
        );
        console.log('jsonObjectLength:', jsonObject.length);
        console.log(
          jsonObject[0].name,
          ' actor1birthday: ',
          jsonObject[0].birthday
        );
        console.log(
          jsonObject[1].name,
          ' actor2birthday: ',
          jsonObject[1].birthday
        );
        console.groupEnd();
        fetchActorData(
          null,
          null,
          setActors,
          setIsLoading,
          setApiCallLimitReached,
          callCount + 1
        );
      }
      if (callCount >= 10) {
        console.error(
          '🔴 10 consecutive calls made without 2x birthday-having actors. Stopping further API calls'
        );
        setApiCallLimitReached(true);
      }
    })
    .then(() => setIsLoading(false))
    .catch((error) => {
      console.error('error', error);
      setApiCallLimitReached(true);
    });
};
