import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectBannerProps {
  competitionName: string;
  competitionURL: string;
  horizontal: boolean;
  won?: boolean;
}

const contentVariants = {
  inactive: {
    y: 100,
    opacity: 0,
  },
  active: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.25 },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.8 },
  },
};

export const ProjectBanner: FC<ProjectBannerProps> = ({
  competitionName,
  won,
  competitionURL,
  horizontal,
}) => (
  <div className='pd-submission-banner'>
    {horizontal ? (
      <>
        <div className='pd-submission-inner'>
          <h2 className='pd-submission-title'>
            {'Submitted to '}
            <span className='pd-submission-comp-name'>{competitionName}</span>
          </h2>
          <Link href={competitionURL}>
            <a>
              <span className='view-hack'>{'VIEW HACKATHON'}</span>
            </a>
          </Link>
        </div>
        <AnimatePresence>
          <motion.div
            key={competitionName}
            animate={{ x: '100%' }}
            transition={{ bounce: false, duration: 1.5 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              top: 0,
              left: 0,
            }}
          />
        </AnimatePresence>
      </>
    ) : (
      <AnimatePresence>
        <motion.div
          key={competitionName}
          className='pd-submission-inner'
          variants={contentVariants}
          initial='inactive'
          animate='active'
          exit='exit'
        >
          <h2 className='pd-submission-title'>
            {'Submitted to '}
            <span className='pd-submission-comp-name'>{competitionName}</span>
          </h2>
          <Link href={competitionURL}>
            <a>
              <span className='view-hack'>{'VIEW HACKATHON'}</span>
            </a>
          </Link>
        </motion.div>
      </AnimatePresence>
    )}
  </div>
);
