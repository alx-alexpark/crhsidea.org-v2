import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

const variants = {
  inactive: {
    y: '100%',
  },
  active: {
    y: 0,
    height: '100%',
  },
  exit: {
    y: '-100%',
  },
};

export const ProjectImage: FC<{ key: string; src: string }> = ({ key, src }) => {
  return (
    <AnimatePresence>
      <motion.img
        key={key}
        initial="inactive"
        animate="active"
        exit="exit"
        variants={variants}
        transition={{
          bounce: false,
          duration: 0.85,
          delay: 0.1,
          height: { delay: 0.95, duration: 0.8 },
        }}
        className="pd-image"
        style={{ height: '120%', position: 'absolute' }}
        src={src}
        alt=""
      />
    </AnimatePresence>
  );
};
