import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/assets/icons/logo.webp" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#31313c" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="description"
          content="내 전적이 궁금해? COCStats에서 확인해봐!"
        />
        <meta property="og:title" content="COC 전적검색" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cocstats.awslearner-highjoon.com/"
        />
        <meta property="og:image" content="/assets/icons/logo.webp" />
        <meta property="og:article:author" content="COC 전적검색" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
