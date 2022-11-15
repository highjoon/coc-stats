import HomeView from "components/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clash of Clans Stats</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <HomeView />
    </>
  );
}
