import { Actor } from '../../../types/types';

export const ActorCard = (data: Actor) => {
  console.log('actorCard:', data);
  return (
    <div id="actor-card">
      <h4>Actor Card</h4>
      <p>{data?.actor?.name}</p>
      <p>{data?.actor?.birthday}</p>
      <p className="text-xs text-gray-500">
        Popularity score {data?.actor?.popularity}
      </p>
    </div>
  );
};
