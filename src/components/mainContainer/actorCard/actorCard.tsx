import { Actor } from '../../../types/types';

export const ActorCard = ({
  data,
  onClick,
}: {
  data: Actor;
  onClick: () => void;
}) => {
  console.log('actorCard:', data);
  return (
    <div
      id="actor-card"
      onClick={onClick}
      className="outline-dashed outline-2 outline-offset-2 m-5 p-7"
    >
      {!data ? (
        <p>Loading....</p>
      ) : (
        <>
          <h4>Actor Card</h4>
          <p>{data?.name}</p>
          <p>{data?.birthday}</p>
          <p className="text-xs text-gray-500">
            Popularity score {data?.popularity}
          </p>
        </>
      )}
    </div>
  );
};
