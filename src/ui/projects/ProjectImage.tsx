import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const variants = {
  inactive: (horz: boolean) => (horz ? { x: '-100%' } : { y: '100%', scale: 1.2 }),
  active: {
    y: 0,
    x: 0,
    scale: 1,
  },
  exit: (horz: boolean) => (horz ? { x: '100%' } : { y: '-100%' }),
};

export const ProjectImage: FC<{ customKey: string | null; src: string }> = ({ customKey, src }) => {
  const toggleHorzImg = useMediaQuery('(max-width: 1023px)');

  return (
    <AnimatePresence>
      <motion.img
        key={customKey}
        initial='inactive'
        animate='active'
        exit='exit'
        variants={variants}
        custom={toggleHorzImg}
        transition={{
          bounce: false,
          duration: 0.85,
          delay: 0.1,
          scale: { delay: 1, duration: 1 },
        }}
        className='pd-image'
        style={{
          [toggleHorzImg ? 'width' : 'height']: '100%',
          position: 'absolute',
        }}
        src={src}
        alt=''
      />
    </AnimatePresence>
  );
};
