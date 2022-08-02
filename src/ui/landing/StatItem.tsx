import { FC } from 'react';

export const StatItem: FC<{ text: string; hasLine?: boolean }> = ({ text, hasLine }) => (
  <div className='stat-item'>
    <h3>{text}</h3>
    {hasLine && <div className='line'></div>}
  </div>
);
