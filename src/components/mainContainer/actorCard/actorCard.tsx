import { Actor } from '../../../types/types';
// import { ShimmerButton } from '../../buttons/shimmerButton';
import { ConnectButton } from '../../buttons/connectButton';
// import { useEffect } from 'react';
import { ActorAge } from './actorAge';

export const ActorCard = ({
  data,
  onClick,
  age,
  questionNotYetAnswered,
}: {
  data: Actor;
  onClick: () => void;
  age: string;
  questionNotYetAnswered: boolean;
}) => {
  const getAge = (ageString: string) => {
    const today = new Date();
    const birthDate = new Date(ageString);
    let ageAsInteger = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageAsInteger--;
    }
    return ageAsInteger;
  };

  return (
    <div
      id="actor-card"
      onClick={onClick}
      className="
      p-2
      flex 
      flex-col 
      justify-center 
      items-center 
      h-[50%]
      relative
      "
    >
      {!data ? (
        <p>Loading....</p>
      ) : (
        <div id="actorCardInnerContainer" className="relative h-full">
          <div
            id="imageContainer"
            className="
            flex 
            flex-col
            justify-center 
            items-center
            h-full
            "
          >
            <img
              src={
                data?.profile_path
                  ? `https://image.tmdb.org/t/p/w500${data?.profile_path}`
                  : '/PlaceholderFilmPoster.png'
              }
              alt={data?.name}
              className="
              rounded-[120px]
              object-contain
              max-h-full
              "
            />
          </div>
          {data?.name && (
            <div
              id="actorName"
              className="
            absolute 
            bottom-5 
            left-0 
            right-0 
            rounded p-2 
            "
            >
              <ConnectButton text={data?.name} />
            </div>
          )}

          {!questionNotYetAnswered && (
            <ActorAge age={getAge(age)} id={data?.id} />
          )}
        </div>
      )}
    </div>
  );
};
