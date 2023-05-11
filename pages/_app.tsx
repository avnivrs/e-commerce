import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { createContext, useEffect, useState } from 'react';

import '@/styles/globals.css';
import { AppContextData } from '@/public/interfaces';

const MOBILE_BREAKPOINT = 600;
const LAPTOP_BREAKPOINT = 1024;
const SMALL_MOBILE_BREAKPOINT = 400;

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const AppContext = createContext<AppContextData>({
  screenWidth: 0,
  menuOpened: false,
  LAPTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
  overlayOpened: false,
  SMALL_MOBILE_BREAKPOINT,
});

export default function App({ Component, pageProps }: AppProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [overlayOpened, setOverlayOpened] = useState(false);

  // componentDidMount
  useEffect(() => setScreenWidth(window.screen.availWidth), []);

  return (
    <AppContext.Provider
      value={{
        menuOpened,
        screenWidth,
        setMenuOpened,
        overlayOpened,
        setOverlayOpened,
        MOBILE_BREAKPOINT,
        LAPTOP_BREAKPOINT,
        SMALL_MOBILE_BREAKPOINT,
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main
        className={`root transition-all w-full duration-500 absolute top-0 ${montserrat.className}`}
      >
        <Script id='unload-script'>{`
          window.onbeforeunload = () => window.scrollTo(0, 0);
          
          scrollRate = 10;

          const scrollDivInit = () => {
              divContainer = document.getElementById('products');
              reachedEnd = false;

              if(!divContainer) return;

              divContainer.scrollLeft = 0;
              previousScrollLeft = 0;

              scrollInterval = setInterval('scrollDiv()', scrollRate);
          }

          const scrollDiv = () => {
              if (reachedEnd) {
                  reachedEnd = !(divContainer.scrollLeft === 0);

                  divContainer.scrollLeft = previousScrollLeft;
                  previousScrollLeft--;
              }
              else {
                  divContainer.scrollLeft = previousScrollLeft;
                  previousScrollLeft++;

                  reachedEnd = divContainer.scrollLeft >= (divContainer.scrollWidth - divContainer.offsetWidth);
              }
          }

          const pauseScroll = () => clearInterval(scrollInterval);

          const resumeScroll = () => {
              previousScrollLeft = divContainer.scrollLeft;
              scrollInterval = setInterval('scrollDiv()', scrollRate);
          }

          window.onload = scrollDivInit();

          if(divContainer){
            divContainer.onmouseover = pauseScroll;
            divContainer.onmouseout = resumeScroll;
          }
        `}</Script>

        <Component {...pageProps} />

        <div
          id='alert'
          style={{ bottom: '-100px' }}
          className='fixed left-1/2 -translate-x-1/2 w-max max-w-[80vw] p-4 bg-transparent text-white mb-8 rounded-md text-[1rem] transition-all duration-500 ease-in-out'
        />
      </main>
    </AppContext.Provider>
  );
}
