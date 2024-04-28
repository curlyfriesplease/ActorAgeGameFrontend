import { Actor } from '../../../types/types';
import { ConnectButton } from '../../buttons/connectButton';
import { ActorAge } from './actorAge';
import { KnownForAnimatedTooltip } from './knownFor';
import { SeeFullCredits } from './seeCredits';

export const ActorCard = ({
  data,
  onClick,
  age,
  deathAge,
  questionNotYetAnswered,
  gameOver,
}: {
  data: Actor;
  onClick: () => void;
  age: string;
  deathAge: string;
  questionNotYetAnswered: boolean;
  showAnswerScreen: boolean;
  lastAnswer: boolean;
  gameOver: boolean;
}) => {
  const getAge = (ageString: string) => {
    if (ageString === null) return null;
    const today = new Date();
    const birthDate = new Date(ageString);
    let ageAsInteger = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageAsInteger--;
    }
    return ageAsInteger;
  };
  const getDeathAge = (birthdayString: string, deathAgeString: string) => {
    if (deathAgeString === null) return null;
    const birthDate = new Date(birthdayString);
    const deathDate = new Date(deathAgeString);
    let ageAsInteger = deathDate.getFullYear() - birthDate.getFullYear();
    const m = deathDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && deathDate.getDate() < birthDate.getDate())) {
      ageAsInteger--;
    }
    return ageAsInteger;
  };

  return (
    <div
      id="actor-card"
      className="
      p-2
      flex 
      flex-col 
      justify-center 
      items-center 
      h-full
      relative
      "
    >
      {!data ? (
        <p>Loading....</p>
      ) : (
        <>
          <div id="actorCardInnerContainer" className="relative h-full">
            <div
              id="imageContainer"
              className="
            flex 
            flex-col
            justify-center 
            items-center
            h-full
            z-10
            "
            >
              <img
                src={
                  data?.profile_path
                    ? `https://image.tmdb.org/t/p/w500${data?.profile_path}`
                    : '/PlaceholderFilmPoster.png'
                }
                alt={data?.name}
                onClick={onClick}
                className={`
                rounded-[120px]
                object-contain
                max-h-full
                ring-8
                ring-neutral-950
                ${gameOver ? 'grayscale' : ''}
                `}
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

            <div
              id="knownForItems"
              className="
              flex 
              flex-col 
              items-center 
              justify-center 
              mb-10 
              absolute 
              top-1/2 
              -translate-y-1/2 
              sm:-right-[18%]
              -right-[22%] 
              z-1
              "
            >
              <KnownForAnimatedTooltip
                items={data.known_for}
                gameOver={gameOver}
              />
            </div>

            {gameOver && <SeeFullCredits actorId={data?.id} />}

            {!questionNotYetAnswered && (
              <ActorAge
                age={getAge(age)}
                id={data?.id}
                deathAge={getDeathAge(age, deathAge)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
