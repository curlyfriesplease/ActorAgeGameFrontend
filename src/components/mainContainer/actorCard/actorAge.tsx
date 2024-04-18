import { SparklesCore } from '../../effects/sparkles';

export const ActorAge = ({
  age,
  id,
  deathAge,
}: {
  age: number;
  id: number;
  deathAge: number;
}) => {
  const showDeathInfo = typeof deathAge === 'number' && !isNaN(deathAge);

  return (
    <div
      id="actorAge"
      className="
      absolute 
      top-1/2 
      -translate-y-1/2 
      left-[-5rem] 
      rounded 
      p-0
      w-28
      h-28
      rounded-full
      bg-gradient-to-r from-yellow-300/20 via-pink-500/70 to-yellow-400/40
      drop-shadow-2xl
      z-10
      -rotate-[12deg]
      "
    >
      <SparklesCore
        id={`tsParticlesActorAge-${id}`}
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
        font-gabarito
        font-normal
        text-6xl
        z-10
      "
      >
        {showDeathInfo && <p className="text-xs text-slate-800">Would be</p>}
        <p className="z-10">{age}</p>
        {showDeathInfo && (
          <p className="text-xs text-slate-800">died aged {deathAge}</p>
        )}
      </div>
    </div>
  );
};
