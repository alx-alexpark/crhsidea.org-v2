import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ProjectStatus } from './ProjectStatus';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectImage } from './ProjectImage';
import { ProjectBanner } from './ProjectBanner';
import { wrap } from '../../utils';
import { useIsAtScreenTop } from '../../hooks/useIsAtScreenTop';

export interface Project {
  name: string;
  description: string;
  date: Date;
  imgSrc: string;
  competitionName: string;
  won?: boolean;
  awardName?: string;
  competitionURL: string;
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

const AUTO_SLIDE_INTERVAL = 5000;

export const ProjectDisplay: FC<ProjectDisplayProps> = ({ projects }) => {
  const [page, setPage] = useState(0);
  const autoIntervalId = useRef<NodeJS.Timer>();
  const projectDisplayRef = useRef<HTMLDivElement>(null);

  const lockAnimation = !useIsAtScreenTop(projectDisplayRef, 20);

  const updatePage = useCallback(
    (direction: number) => {
      setPage((p) => wrap(0, projects.length, direction > 0 ? p + 1 : p - 1));
    },
    [projects]
  );

  const lockablePageUpdate = useCallback(
    (direction: number) => {
      setPage((p) => (lockAnimation ? p : wrap(0, projects.length, direction > 0 ? p + 1 : p - 1)));
    },
    [projects, lockAnimation]
  );

  useEffect(() => {
    autoIntervalId.current = setInterval(() => lockablePageUpdate(1), AUTO_SLIDE_INTERVAL);
    return () => clearInterval(autoIntervalId.current);
  }, [updatePage, lockablePageUpdate]);

  const displayedProject = projects[page];

  return (
    <div className='project-display-wrap' ref={projectDisplayRef}>
      <ProjectBanner
        competitionName={displayedProject.competitionName}
        competitionURL={displayedProject.competitionURL}
      />
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
  );
};
