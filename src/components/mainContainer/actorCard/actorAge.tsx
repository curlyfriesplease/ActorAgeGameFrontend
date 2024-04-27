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
      left-[-4rem] 
      rounded 
      p-0
      w-24
      h-24
      rounded-full
      bg-gradient-to-r from-yellow-300 to-pink-600
      drop-shadow-2xl
      z-10
      -rotate-[12deg]
      ring-8
      ring-neutral-950
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
        text-neutral-950
      "
      >
        {showDeathInfo && <p className="text-xs">Would be</p>}
        <p className="z-10">{age}</p>
        {showDeathInfo && <p className="text-xs">died aged {deathAge}</p>}
      </div>
    </div>
  );
};
