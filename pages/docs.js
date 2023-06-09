import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(import('swagger-ui-react'), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <Head>
        <title>FeriadosAPI Docs</title>
        <meta name="description" content="FeriadosAPI Docs - Powered by https://pjnovas.gitbooks.io/no-laborables/content/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwaggerUI url="/swagger.json" />
    </div>
  );
}
