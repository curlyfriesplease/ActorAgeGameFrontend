export function twoRandomActorsFromRemainingActorIds(
  randomActorIds: number[]
): [number, number] {
  console.log('👹  length of randomActorIds:', randomActorIds.length);
  console.log(randomActorIds);

  if (randomActorIds.length < 2) {
    throw new Error('Not enough actors to select two unique ones.');
  }

  let firstRandomIndex = Math.floor(Math.random() * randomActorIds.length);
  let secondRandomIndex;

  // Ensures we don't get the same actor twice
  do {
    secondRandomIndex = Math.floor(Math.random() * randomActorIds.length);
  } while (firstRandomIndex === secondRandomIndex);

  // If secondRandomIndex is smaller than firstRandomIndex, swap them. Because in a minute the higher index is getting removed first
  if (secondRandomIndex < firstRandomIndex) {
    [firstRandomIndex, secondRandomIndex] = [
      secondRandomIndex,
      firstRandomIndex,
    ];
  }

  const firstActor = randomActorIds[firstRandomIndex];
  const secondActor = randomActorIds[secondRandomIndex];
  console.log(
    'twoRandomActorsFromRemainingActorIds: firstActor:',
    firstActor,
    'secondActor:',
    secondActor
  );

  // Remove the selected actors from the array
  randomActorIds.splice(secondRandomIndex, 1);
  randomActorIds.splice(firstRandomIndex, 1);

  return [firstActor, secondActor];
}
