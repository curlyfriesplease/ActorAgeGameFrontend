export const LoadingInterrupted = ({
  setShowGame,
}: {
  setShowGame: (showGame: boolean) => void;
}) => {
  return (
    <div
      id="loading"
      className="
          flex 
          flex-col 
          justify-center 
          items-center 
          h-full
          "
    >
      <p className="w-[80%] text-2xl text-sky-900 drop-shadow-xl mb-10 mt-3 ">
        Uh-oh! themoviedb.org, where we get our data, appears to be having
        trouble. This game is over, Jefe!
      </p>
      <button
        onClick={() => setShowGame(false)}
        className="
            relative
            bg-gradient-to-l from-yellow-300 to-pink-600
            rounded-full
            border-2
            border-neutral-800
            ring-4
            ring-neutral-800
            mt-4
            pt-4
            pb-4
            h-auto
            w-[90%]
            max-w-[30rem]
            font-honk
            text-5xl
            "
      >
        Return to menu
      </button>
    </div>
  );
};
