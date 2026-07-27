import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Smart Homes | Property Consultancy in Punjab</title>
        <meta
          name="description"
          content="Smart Homes helps Pakistani families and investors find verified, authority-approved plots and commercial units across Punjab."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f2e2b" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
