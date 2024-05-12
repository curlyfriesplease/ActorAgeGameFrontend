import { useState } from 'react';
import { GameCategoryButton } from '../buttons/gameCategoryButton';
import { Button } from '../../types/types';
import { motion, AnimatePresence } from 'framer-motion';
import { GameType } from '../../types/types';
import marvlogo from '../../assets/marvlogo.png';
import nineties from '../../assets/nineties.png';
import random from '../../assets/random.png';
import ukFlag from '../../assets/ukFlag.png';
import testing from '../../assets/testing.png';
import { SparklesCore } from '../effects/sparkles';

const buttonArray = [
  {
    imagePath: marvlogo,
    label: 'marvel',
  },
  {
    imagePath: nineties,
    label: 'nineties',
  },
  {
    imagePath: random,
    label: 'random',
  },
  {
    imagePath: ukFlag,
    label: 'british',
  },
  {
    imagePath: testing,
    label: 'testOnly',
  },
];

export const Menu = ({
  startNewGame,
}: {
  startNewGame: (gameType: GameType) => void;
}) => {
  const [greetingDismissed, setGreetingDismissed] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="menu"
        className="
        absolute 
        top-1/2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        z-10
        w-full
        flex
        flex-col
        justify-center
        items-center
        "
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {!greetingDismissed && (
          <motion.div
            id="greeting"
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.25 },
            }}
            exit={{ x: -500, opacity: 0, transition: { duration: 0.6 } }}
            className="w-[80%] max-w-[300px] flex flex-col justify-center items-center text-neutral-950 font-jost text-2xl"
          >
            <SparklesCore
              id="tsParticlesAnswerResult"
              background="transparent"
              minSize={1.8}
              maxSize={3.3}
              particleDensity={50}
              className="w-full h-full absolute z-0"
              particleColor="#fda4af"
            />
            <p className="w-[90%] m-3 mb-6 text-3xl">To play, simply guess</p>
            <img src="/TitleCalendar.png" />
            <p className="w-[90%] text-4xl font-bold text-sky-900 drop-shadow-xl mb-10 mt-3 ">
              Which actor was born first?
            </p>
            <button
              onClick={() => setGreetingDismissed(true)}
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
            h-full
            w-full
            max-w-[30rem]
            font-honk
            text-5xl
            "
            >
              Play
            </button>
          </motion.div>
        )}

        {greetingDismissed && (
          <>
            <p className="font-honk text-4xl m-2">Pick a game mode:</p>
            {buttonArray.map((button: Button) => (
              <motion.div
                variants={itemVariants}
                className="         
            w-[75%]
            h-[4rem]
            sm:h-[5rem]
            mt-3
            mb-3
            flex 
            flex-row 
            justify-center 
            items-center 
            "
                key={`motionDiv-${button.label}`}
              >
                <GameCategoryButton
                  imagePath={button.imagePath}
                  onClick={() => startNewGame(button.label as GameType)}
                />
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
