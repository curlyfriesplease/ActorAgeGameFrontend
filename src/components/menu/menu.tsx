import { useState } from 'react';
import { GameCategoryButton } from '../buttons/gameCategoryButton';
import { Button } from '../../types/types';
import { motion, AnimatePresence } from 'framer-motion';
import { GameType } from '../../types/types';
import marvlogo from '../../assets/marvlogo.png';
import nineties from '../../assets/nineties.png';
import random from '../../assets/random.png';
//import topstars from '../../assets/topstars.png';

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
            <p className="w-[90%] m-3 mb-6">
              Welcome to the <i>How Old Was That Actor</i> Game! <br /> To play,
              simply guess
            </p>
            <p className="w-[90%] text-4xl font-bold text-sky-700 drop-shadow-xl">
              Which actor was born first?
            </p>
            <p className="w-[90%] m-3 mt-6 mb-9">Click below to start!</p>
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
            pt-1
            pb-1
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
