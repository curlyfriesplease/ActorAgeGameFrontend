export const fetchActorData = (
  actor1: number | null,
  actor2: number | null
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
      console.log(data.body);
      return data.body;
    })
    .catch((error) => console.error('error', error));
};
