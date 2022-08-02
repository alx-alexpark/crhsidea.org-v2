import { useState, useEffect } from 'react';

/**
 * Thanks to Tomas Carnecky for making this article:
 * https://observablehq.com/@werehamster/avoiding-hydration-mismatch-when-using-react-hooks
 */
export const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMatches] = useState<null | boolean>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    const listener = () => setMatches(!!mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);

    listener();

    return () => {
      mediaQueryList.addEventListener('change', listener);
    };
  }, [mediaQueryString]);

  return matches;
};
