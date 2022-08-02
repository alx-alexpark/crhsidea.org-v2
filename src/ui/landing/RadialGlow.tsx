import { FC } from 'react';
import Image from 'next/image';

type RadialGlowProps = Partial<{
  top: string;
  left: string;
  right: string;
  bottom: string;
}>;

export const RadialGlow: FC<RadialGlowProps> = (props) => (
  <div style={{ position: 'absolute', width: '25vw', height: '30vw', zIndex: 2, ...props }}>
    <Image src='/svgs/radial-glow.svg' layout='fill' alt='' />
  </div>
);
