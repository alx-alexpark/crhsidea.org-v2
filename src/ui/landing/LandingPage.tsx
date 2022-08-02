import Image from 'next/image';
import { FC, Suspense } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { RadialGlow } from './RadialGlow';
import { StatItem } from './StatItem';

export const LandingPage: FC = () => {
  const hidePhoneSVG = useMediaQuery('(max-width: 470px)');
  const showRadialGlow = useMediaQuery('(min-width: 1024px)');

  return (
    <div className='lp-wrap'>
      {showRadialGlow && (
        <>
          <RadialGlow top='-15vw' left='-10vw' />
          <RadialGlow top='-15vw' right='-10vw' />
          <RadialGlow bottom='-15vw' right='-15vw' />
          <RadialGlow top='20vh' right='-15vw' />
        </>
      )}
      <div className='inner'>
        <div className='main-content'>
          <h1 className='lp-title'>CRHS IDEA</h1>
          <h2 className='lp-sub'>
            {"Let's "}
            <span className='highlight'>explore&nbsp;</span>software
          </h2>
          <p className='lp-p'>Start your CS journey today</p>

          <div className='media-wrap'>
            <Image src='/svgs/github-logo.svg' alt='' width='40px' height='40px' />
            <Image src='/svgs/discord-logo.svg' alt='' width='40px' height='40px' />
          </div>
        </div>
        {!hidePhoneSVG && (
          <div className='phone-wrap'>
            <Image className='phone' src='/svgs/iphone-12.svg' alt='' layout='fill' />
          </div>
        )}

        <div className='stat-wrap'>
          <StatItem text='30+ Hackathons' hasLine />
          <StatItem text='20+ Wins' hasLine />
          <StatItem text='200+ Volunteer Hours' hasLine />
        </div>
      </div>
    </div>
  );
};
