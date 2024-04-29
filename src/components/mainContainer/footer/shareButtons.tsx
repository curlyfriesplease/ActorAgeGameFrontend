import { motion } from 'framer-motion';
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  EmailIcon,
  EmailShareButton,
} from 'react-share';

const variants = {
  hidden: { opacity: 0, y: 50, x: '-50%' },
  visible: { opacity: 1, y: 0, x: '-50%', transition: { duration: 2 } },
};

// TODO: https://developers.facebook.com/async/registration/dialog/?src=default register app with facebook
// Then get an App ID

export const ShareButtons = ({
  currentScore,
  gameType,
}: {
  currentScore: number;
  gameType: string;
}) => {
  const formattedGameName =
    gameType.charAt(0).toUpperCase() + gameType.slice(1);
  const shareUrl = `https://game.howoldwasthat.actor/${gameType}`;
  const title =
    '🎬 I just scored ' +
    currentScore +
    ' on the ' +
    formattedGameName +
    ' game mode! 🎥';
  return (
    <motion.div
      className="
          absolute 
          bottom-4 
          left-1/2
          max-w-[400px] 
          max-h-[150px] 
          h-auto
          w-[75vw] 
          wrap-text
          rounded-3xl
          text-neutral-950
          bg-neutral-950
          bg-opacity-90
          z-10
          flex
          flex-col
            justify-center
            items-center
        "
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <p className="text-xl text-neutral-100 mt-2 font-jersey">
        SHARE YOUR SCORE
      </p>
      <div
        id="share-buttons-row"
        className="
        mt-3
        mb-2
        flex
        flex-row
        justify-around
        items-center
        w-[90%]
      "
      >
        <div className="individualShareButton">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
        </div>

        <div className="individualShareButton">
          <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
            <FacebookMessengerIcon size={48} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="individualShareButton">
          <EmailShareButton
            url={shareUrl}
            subject={
              'I just played the ' +
              formattedGameName +
              ' HowOldWasThat.actor game mode!'
            }
            body={title}
          >
            <EmailIcon size={48} round />
          </EmailShareButton>
        </div>

        <div className="individualShareButton">
          <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>
        </div>
      </div>
    </motion.div>
  );
};
