export const SeeFullCredits = ({ actorId }: { actorId: number }) => {
  const onClick = (event: React.MouseEvent) => {
    // in a new tab, open https://www.howoldwasthat.actor/actor/{actorId}
    event.stopPropagation();
    window.open(`https://www.howoldwasthat.actor/actor/${actorId}`, '_blank');
  };

  return (
    <button
      id="seeFullCreditsLink"
      className="
        absolute 
        top-1/2 
        -translate-y-1/2 
        right-[-3rem] 
        rounded 
        p-0
        w-20
        h-20
        rounded-full
        bg-gradient-to-r from-sky-300 to-yellow-300
        drop-shadow-2xl
        z-10
        rotate-[8deg]
        ring-4
        ring-neutral-950
        flex
        flex-center
        justify-center
        items-center
        text-base
        text-neutral-950
        z-20
        "
      onClick={onClick}
    >
      See full credits
    </button>
  );
};
