import { GameCategoryButton } from '../buttons/gameCategoryButton';
import { Button } from '../../types/types';
import { motion } from 'framer-motion';

const buttonArray = [
  {
    imagePath: '/src/assets/marvlogo.png',
    label: 'marvel',
  },
  {
    imagePath: '/src/assets/topstars.png',
    label: 'topStars',
  },
  {
    imagePath: '/src/assets/nineties.png',
    label: 'nineties',
  },
  {
    imagePath: '/src/assets/random.png',
    label: 'random',
  },
];

export const Menu = ({
  startNewGame,
}: {
  startNewGame: (gameType: string) => void;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  };

  return (
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
            onClick={() => startNewGame(button.label)}
            id={button.label}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
