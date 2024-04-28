// All this code below is copied from https://ui.aceternity.com/components/animated-tooltip

import { useState } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { KnownForData } from '../../../types/types';

export const KnownForAnimatedTooltip = ({
  items,
  gameOver,
}: {
  gameOver: boolean;
  items: KnownForData[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const releaseYear = (item) => {
    if (item.media_type === 'tv') {
      return item.first_air_date.split('-')[0];
    } else {
      return item.release_date.split('-')[0];
    }
  };
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className={`-mr-4  relative group ${
            gameOver
              ? 'pointer-events-none grayscale opacity-40'
              : 'pointer-events-auto'
          }`}
          key={item.original_name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, x: -40, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: 'nowrap',
              }}
              className="
              absolute 
              -top-16 
              -left-1/2 
              translate-x-1/2 
              flex 
              text-xs 
              flex-col 
              items-center 
              justify-center 
              rounded-md 
              bg-black 
              z-50 
              shadow-xl 
              px-4 
              py-2
              max-w-[160px]
              sm:max-w-[400px]
              text-wrap
              overflow-hidden
              "
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="font-bold text-wrap text-white relative z-30 text-base">
                {item.original_title || item.original_name}
              </div>
              <div className="text-white text-xs">{releaseYear(item)}</div>
            </motion.div>
          )}
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.original_title || item.original_name}
            className={`
            object-cover
             !m-0 
             !p-0 
             object-top 
             rounded-full
             h-20
             w-20
             md:h-28
             md:w-28
             ${gameOver ? '' : 'ring-4'}
             
             ring-neutral-950
             group-hover:scale-105 
             group-hover:z-30
             relative 
             transition 
             duration-500`}
          />
        </div>
      ))}
    </>
  );
};
