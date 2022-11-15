import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/assets/icons/logo.webp" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
