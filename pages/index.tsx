import Head from "next/head";
import HomeView from "components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clash of Clans Stats</title>
      </Head>
      <HomeView />
    </>
  );
}
