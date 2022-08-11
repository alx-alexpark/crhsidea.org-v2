import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ProjectStatus } from './ProjectStatus';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectImage } from './ProjectImage';
import { ProjectBanner } from './ProjectBanner';
import { wrap } from '../../utils';
import { useIsAtScreenTop } from '../../hooks/useIsAtScreenTop';
import { useMediaQuery } from '../../hooks/useMediaQuery';

/**
 * verticalImgSrc recieves priority over imgSrc when screen is larger
 *  */
export interface Project {
  name: string;
  description: string;
  date: Date;
  imgSrc: string;
  verticalImgSrc?: string;
  competitionName: string;
  won?: boolean;
  awardName?: string;
  competitionURL: string;
}

export interface ProjectDisplayProps {
  projects: Project[];
}

const AUTO_SLIDE_INTERVAL = 5000;

export const ProjectDisplay: FC<ProjectDisplayProps> = ({ projects }) => {
  const isMobile = Boolean(useMediaQuery('(max-width: 1023px)'));

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
    lockablePageUpdate(1);
    autoIntervalId.current = setInterval(() => lockablePageUpdate(1), AUTO_SLIDE_INTERVAL);
    return () => clearInterval(autoIntervalId.current);
  }, [updatePage, lockablePageUpdate]);

  const displayedProject = projects[page];

  // use vertical image on larger screen due to layout
  const imageSrc = (!isMobile && displayedProject.verticalImgSrc) || displayedProject.imgSrc;

  return (
    <div className='project-display-wrap' ref={projectDisplayRef}>
      <ProjectContent
        horizontal={isMobile}
        projectDesc={displayedProject.description}
        projectName={displayedProject.name}
        awardName={displayedProject.awardName || ''}
        won={Boolean(displayedProject.won)}
      />
      <ProjectImage
        customKey={displayedProject.name + 'image'}
        src={imageSrc}
        horizontal={isMobile}
      />
      <ProjectBanner
        competitionName={displayedProject.competitionName}
        competitionURL={displayedProject.competitionURL}
        horizontal={isMobile}
      />
    </div>
  );
};

const verticalTextVariants = {
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

const ProjectContent: FC<{
  projectName: string;
  projectDesc: string;
  horizontal: boolean;
  won: boolean;
  awardName: string;
}> = ({ projectName, projectDesc, horizontal, won, awardName }) =>
  horizontal ? (
    <div style={{ position: 'relative' }}>
      <div className='pd-content-wrap'>
        <h1 className='pd-title'>{projectName}</h1>

        <p className='pd-desc'>{projectDesc}</p>

        <ProjectStatus status={won ? 'winner' : 'we tried'} awardName={awardName} />
      </div>

      <AnimatePresence>
        <motion.div
          key={projectName}
          animate={{ x: '100%' }}
          transition={{ bounce: false, duration: 1.3, delay: 0.1 }}
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
    </div>
  ) : (
    <div>
      <AnimatePresence>
        <motion.div
          key={projectName}
          variants={verticalTextVariants}
          initial='inactive'
          animate='active'
          exit='exit'
          transition={{ bounce: false, duration: 0.7 }}
          className='pd-content-wrap'
        >
          <h1 className='pd-title'>{projectName}</h1>

          <p className='pd-desc'>{projectDesc}</p>

          <ProjectStatus status={won ? 'winner' : 'we tried'} awardName={awardName} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
