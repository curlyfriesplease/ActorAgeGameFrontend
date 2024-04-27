import { GameCategoryButton } from '../buttons/gameCategoryButton';
import { Button } from '../../types/types';

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
  return (
    <div
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
    >
      {buttonArray.map((button: Button) => (
        <GameCategoryButton
          imagePath={button.imagePath}
          onClick={() => startNewGame(button.label)}
          id={button.label}
        />
      ))}
    </div>
  );
};
