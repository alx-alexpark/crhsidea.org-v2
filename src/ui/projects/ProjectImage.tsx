import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

const variants = {
  inactive: (horz: boolean) => (horz ? { x: '-100%' } : { y: '100%' }),
  active: (horz: boolean) => ({
    y: 0,
    x: 0,
    [horz ? 'width' : 'height']: '100%',
  }),
  exit: (horz: boolean) => (horz ? { x: '100%' } : { y: '-100%' }),
};

export const ProjectImage: FC<{ customKey: string; src: string }> = ({ customKey, src }) => {
  const toggleHorzImg = useMediaQuery({ maxWidth: 1023 });

  return (
    <AnimatePresence>
      <motion.img
        key={customKey}
        initial="inactive"
        animate="active"
        exit="exit"
        variants={variants}
        custom={toggleHorzImg}
        transition={{
          bounce: false,
          duration: 0.85,
          delay: 0.1,
          height: { delay: 0.95, duration: 0.8 },
        }}
        className="pd-image"
        style={{
          height: toggleHorzImg ? 'auto' : '120%',
          position: 'absolute',
        }}
        src={src}
        alt=""
      />
    </AnimatePresence>
  );
};
