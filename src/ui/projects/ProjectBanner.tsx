import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RightArrowIcon } from '../../svgs-components/RightArrow';

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
            <a href={competitionURL} target='_blank' rel='noreferrer'>
              <span className='pd-submission-comp-name'>{competitionName}</span>
            </a>
          </h2>
          <a href={competitionURL} target='_blank' rel='noreferrer' className='view-hack'>
            <span>{'VIEW HACKATHON'}</span>
            <RightArrowIcon className='icon' />
          </a>
        </div>
        <AnimatePresence>
          <motion.div
            key={competitionName}
            animate={{ x: '100%' }}
            transition={{ bounce: false, duration: 1, delay: 0.2 }}
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
            <a href={competitionURL} target='_blank' rel='noreferrer'>
              <span className='pd-submission-comp-name'>{competitionName}</span>
            </a>
          </h2>
          <a href={competitionURL} target='_blank' rel='noreferrer' className='view-hack'>
            <span>{'VIEW HACKATHON'}</span>
            <RightArrowIcon className='icon' />
          </a>
        </motion.div>
      </AnimatePresence>
    )}
  </div>
);
