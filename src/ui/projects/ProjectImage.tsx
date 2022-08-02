import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const variants = {
  inactive: (horz: boolean) => (horz ? { x: '-100%' } : { y: '100%' }),
  active: (horz: boolean) => ({
    y: 0,
    x: 0,
    [horz ? 'width' : 'height']: '100%',
  }),
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
          height: { delay: 0.95, duration: 0.8 },
        }}
        className='pd-image'
        style={{
          height: toggleHorzImg ? 'auto' : '120%',
          position: 'absolute',
        }}
        src={src}
        alt=''
      />
    </AnimatePresence>
  );
};
