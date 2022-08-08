import { CSSProperties, FC } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { StatItem } from './StatItem';
import { TextSwitch } from './TextSwitch';
import Link from 'next/link';
import { IPhone12Icon } from '../../svgs-components/IPhone12';
import { GithubLogoIcon } from '../../svgs-components/GithubLogo';
import { RemindLogoIcon } from '../../svgs-components/RemindLogo';
import { DiscordLogoIcon } from '../../svgs-components/DiscordLogo';
import { RadialGlowSVG } from '../../svgs-components/RadialGlow';

const radialGlowStyles: CSSProperties = {
  position: 'absolute',
  width: '25vw',
  height: '30vw',
  zIndex: 2,
};

export const LandingPage: FC = () => {
  const hidePhoneSVG = useMediaQuery('(max-width: 470px)');
  const showRadialGlow = useMediaQuery('(min-width: 1024px)');

  return (
    <div className='lp-wrap'>
      {showRadialGlow && (
        <>
          <RadialGlowSVG style={{ top: '-15vw', left: '-10vw', ...radialGlowStyles }} />
          <RadialGlowSVG style={{ top: '-15vw', right: '-10vw', ...radialGlowStyles }} />
          <RadialGlowSVG style={{ bottom: '-15vw', right: '-15vw', ...radialGlowStyles }} />
          <RadialGlowSVG style={{ top: '10vh', right: '-15vw', ...radialGlowStyles }} />
        </>
      )}
      <div className='inner'>
        <div className='main-content'>
          <h1 className='lp-title'>CRHS IDEA</h1>
          <h2 className='lp-sub'>
            {"Let's"}&nbsp;
            <span className='highlight'>
              <TextSwitch interval={2000} text={['explore', 'create', 'innovate.']} />
            </span>
          </h2>
          <p className='lp-p'>Start your CS journey today</p>

          <div className='media-wrap'>
            <Link href='https://discord.gg/McY7QFHN' target='_blank'>
              <a>
                <RemindLogoIcon className='media-svg' />
              </a>
            </Link>
            <Link href='https://github.com/crhsidea' target='_blank'>
              <a>
                <GithubLogoIcon className='media-svg' />
              </a>
            </Link>
            <Link href='https://discord.gg/McY7QFHN' target='_blank'>
              <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DiscordLogoIcon className='media-svg' style={{ width: '44px' }} />
              </a>
            </Link>
          </div>
        </div>
        {!hidePhoneSVG && (
          <div className='phone-wrap'>
            <IPhone12Icon className='iphone-svg' screenSrc='/imgs/iphone-screen.png' />
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
