import { Actor } from '../../../types/types';

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
      p-1
      "
    >
      {!data ? (
        <p>Loading....</p>
      ) : (
        <div
          id="actorCardInnerContainer"
          className="
        relative 
        h-full
        rounded-5xl
        overflow-hidden
        border-stone-500
        border-8
        "
        >
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
              object-contain
              max-h-full
              "
            />
          </div>
          <div
            id="actorName"
            className="
            absolute 
            bottom-5 
            left-0 
            right-0 
            bg-fuchsia-500 
            rounded-lg 
            p-2
            m-6
            "
          >
            <p>{data?.name}</p>
            {/* <p>{data?.birthday}</p> */}
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
