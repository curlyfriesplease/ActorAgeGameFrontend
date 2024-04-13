import { Actor } from '../../../types/types';
import { ShimmerButton } from '../../buttons/shimmerButton';
import { useEffect } from 'react';
import { SparklesCore } from '../../effects/sparkles';

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
            top-1/2 
            -translate-y-1/2 
            left-[-5rem] 
            rounded 
            p-0
            w-36
            h-36
            rounded-full
            "
            >
              <SparklesCore
                id={`tsParticlesActorAge-${data?.id}`}
                background="transparent"
                minSize={1.2}
                maxSize={3.2}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#3b82f6"
                speed={8}
              />
              <div
                id="agePositioningContainer"
                className="
                top-1/2 
                left-1/2 
                -translate-x-1/2 
                -translate-y-1/2 
                z-10
                -rotate-30
                flex
                flex-col
                justify-center 
                items-center 
                w-full 
                h-full
                absolute
                font-honk
                font-normal
                text-6xl
              "
              >
                <p>{getAge(age)}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
