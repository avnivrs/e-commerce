import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      className='scroll-smooth m-0 outline-0 p-0 list-none no-underline box-border cursor-default'
    >
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <meta name='theme-color' content='#ffffff' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      </Head>
      <body className='text-outer-space bg-white dark:text-wild-sand dark:bg-shark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
