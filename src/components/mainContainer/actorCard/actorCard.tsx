import { Actor } from '../../../types/types';

export const ActorCard = (data: Actor, ...props: any[]) => {
  console.log('actorCard:', data);
  return (
    <div
      id="actor-card"
      onClick={props.onClick}
      className="outline-dashed outline-2 outline-offset-2 m-5 p-7"
    >
      <h4>Actor Card</h4>
      <p>{data?.actor?.name}</p>
      <p>{data?.actor?.birthday}</p>
      <p className="text-xs text-gray-500">
        Popularity score {data?.actor?.popularity}
      </p>
    </div>
  );
};
