import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

interface TextSwitchProps extends MotionProps {
  interval: number;
  text: string[];
}

const variants = {
  inactive: {
    y: 30,
    opacity: 0,
    transition: { delay: 0.3 },
  },
  active: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export const TextSwitch: FC<TextSwitchProps> = ({ text, interval, ...props }) => {
  const [index, setIndex] = useState(0);
  const autoIntervalId = useRef<NodeJS.Timer>();

  const updateIndex = useCallback(
    (direction: number) =>
      setIndex((i) => {
        if (direction > 0 && i >= text.length - 1) {
          return i;
        }

        if (direction < 0 && i === 0) {
          return i;
        }

        if (direction > 0) return i + 1;
        else return i - 1;
      }),
    [text]
  );

  useEffect(() => {
    autoIntervalId.current = setInterval(() => updateIndex(1), interval);
    return () => clearInterval(autoIntervalId.current);
  }, [updateIndex, interval]);

  return (
    <AnimatePresence>
      <motion.h2
        key={text[index]}
        variants={variants}
        initial='inactive'
        animate='active'
        exit='exit'
        transition={{ bounce: false, duration: 0.5, delay: 0.5 }}
        {...props}
      >
        {text[index]}
      </motion.h2>
    </AnimatePresence>
  );
};
