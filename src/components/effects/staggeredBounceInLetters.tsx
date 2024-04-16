import { motion, AnimatePresence } from 'framer-motion';

export const StaggeredBounceInLetters = ({
  text,
  isVisible,
}: {
  text: string;
  isVisible: boolean;
}) => {
  const textSplitIntoLetters = text.split('');
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', duration: 1.25, bounce: 0.6 },
          }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <div
            className="
            h-24
            p-0 
            text-8xl
            "
          >
            {textSplitIntoLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    duration: 0.5,
                    delay: index * 0.08,
                    bounce: 0.25,
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
