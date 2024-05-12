export function twoRandomActorsFromRemainingActorIds(
  randomActorIds: number[]
): [number, number] {
  if (randomActorIds.length < 2) {
    throw new Error('Not enough actors to select two unique ones.');
  }

  const firstRandomIndex = Math.floor(Math.random() * randomActorIds.length);
  const firstActor = randomActorIds.splice(firstRandomIndex, 1)[0];

  const secondRandomIndex = Math.floor(Math.random() * randomActorIds.length);
  const secondActor = randomActorIds.splice(secondRandomIndex, 1)[0];

  return [firstActor, secondActor];
}
