export const RadialGlowSVG: SVGComponent = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 522 408' {...props}>
    <ellipse
      cx='261'
      cy='184'
      fill='url(#paint0_radial_43_107)'
      fillOpacity='0.5'
      rx='261'
      ry='224'
    ></ellipse>
    <defs>
      <radialGradient
        id='paint0_radial_43_107'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='matrix(0 224 -261 0 261 184)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2400FF' stopOpacity='0.29'></stop>
        <stop offset='1' stopColor='#2400FF' stopOpacity='0'></stop>
      </radialGradient>
    </defs>
  </svg>
);
