import { FC } from 'react';

interface ProjectStatusProps {
  status: 'winner' | 'we tried';
}

export const ProjectStatus: FC<ProjectStatusProps> = ({ status }) => {
  return (
    <div
      className="project-status"
      style={{ backgroundColor: status === 'winner' ? '#FFD15C' : '#4CF8BA' }}
    >
      {status.toUpperCase()}
    </div>
  );
};
