import { FC } from 'react';

interface ProjectStatusProps {
  status: 'winner' | 'we tried';
  awardName: string;
}

export const ProjectStatus: FC<ProjectStatusProps> = ({ status, awardName }) => {
  return (
    <div className='project-status-wrap'>
      <div style={{ backgroundColor: status === 'winner' ? '#FFD15C' : '#4CF8BA' }}>
        {status.toUpperCase()}
      </div>

      <span>{awardName}</span>
    </div>
  );
};
