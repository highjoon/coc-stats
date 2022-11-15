import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/assets/icons/logo.webp" />
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
