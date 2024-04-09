import { Actor } from '../../../types/types';
import { ShimmerButton } from '../../buttons/shimmerButton';
import { useEffect } from 'react';

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

  useEffect(() => {
    const element = document.querySelector('.animate-shimmery');
    const handleAnimationStart = (event) => {
      if (event.animationName === 'shimmery') {
        console.log('Shimmery animation started');
      }
    };

    if (element) {
      element.addEventListener('animationstart', handleAnimationStart);
    }

    // Clean up function
    return () => {
      if (element) {
        element.removeEventListener('animationstart', handleAnimationStart);
      }
    };
  }, []);

  return (
    <div
      id="actor-card"
      onClick={onClick}
      className="
      outline-dashed 
      outline-2 
      outline-offset-2 
      p-2
      flex 
      flex-col 
      justify-center 
      items-center 
      h-[50%]
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
              rounded-full
              object-contain
              max-h-full
              "
            />
          </div>

          <div
            id="actorName"
            className="
            absolute 
            bottom-3 
            left-0 
            right-0 
            rounded p-2 
            "
          >
            {data?.name && <ShimmerButton text={data?.name} />}
          </div>

          {!questionNotYetAnswered && (
            <div
              id="actorAge"
              className="
            absolute 
            bottom-15 
            right-3 
            bg-fuchsia-500 
            rounded p-2
            "
            >
              <p>{getAge(age)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
