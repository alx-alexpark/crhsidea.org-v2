import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ProjectStatus } from './ProjectStatus';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectImage } from './ProjectImage';
import { ProjectBanner } from './ProjectBanner';
import { wrap } from '../../utils';

export interface Project {
  name: string;
  description: string;
  date: Date;
  imgSrc: string;
  competitionName: string;
  won?: boolean;
  awardName?: string;
}

export interface ProjectDisplayProps {
  projects: Project[];
}

const textVariants = {
  inactive: {
    y: 150,
    opacity: 0,
  },
  active: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 },
  },
  exit: {
    y: -250,
    opacity: 0,
    transition: { duration: 0.8 },
  },
};

export const ProjectDisplay: FC<ProjectDisplayProps> = ({ projects }) => {
  const [page, setPage] = useState(0);
  const autoIntervalId = useRef<NodeJS.Timer>();

  const updatePage = useCallback(
    (direction: number) => {
      setPage((p) => wrap(0, projects.length, direction > 0 ? p + 1 : p - 1));
    },
    [projects]
  );

  useEffect(() => {
    autoIntervalId.current = setInterval(() => updatePage(1), 10000);
    return () => clearInterval(autoIntervalId.current);
  }, [updatePage]);

  const displayedProject = projects[page];

  return (
    <>
      <ProjectBanner competitionName={displayedProject.competitionName} />

      <div className='project-display-wrap'>
        <div>
          <AnimatePresence>
            <motion.div
              key={displayedProject.name}
              variants={textVariants}
              initial='inactive'
              animate='active'
              exit='exit'
              transition={{ bounce: false, duration: 0.7 }}
              className='pd-content-wrap'
            >
              <h1 className='pd-title'>{displayedProject.name}</h1>

              <p className='pd-desc'>{displayedProject.description}</p>

              <ProjectStatus status='winner' />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='pd-image-wrap'>
          <ProjectImage customKey={displayedProject.name + 'image'} src={displayedProject.imgSrc} />
        </div>
      </div>
    </>
  );
};
