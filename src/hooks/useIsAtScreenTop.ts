import { RefObject, useEffect, useState } from 'react';

export const useIsAtScreenTop = (ref: RefObject<HTMLDivElement>, threshold: number) => {
  const [atTop, setAtTop] = useState<null | boolean>(null);

  useEffect(() => {
    const listener = () => {
      const top = ref.current?.getBoundingClientRect().top;

      // check if element is on top of the screen
      if (typeof top != 'undefined' && top <= threshold) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener('scroll', listener);
    listener();

    return () => window.removeEventListener('scroll', listener);
  }, [ref, threshold]);

  return atTop;
};
