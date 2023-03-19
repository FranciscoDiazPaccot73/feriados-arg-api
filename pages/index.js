import Head from 'next/head';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    window.location.assign('/docs')
  }, [])

  return (
    <div>
      <Head>
        <title>Not Found</title>
        <meta name="description" content="FeriadosAPI Docs - Powered by https://pjnovas.gitbooks.io/no-laborables/content/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
