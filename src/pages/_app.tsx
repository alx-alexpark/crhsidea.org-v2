import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default App;
