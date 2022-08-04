import { AppProps } from 'next/app';
import Head from 'next/head'
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head> 
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
};

export default App;
