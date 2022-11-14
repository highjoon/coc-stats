import { GetStaticProps } from "next";
import { QueryClient } from "@tanstack/react-query";
import HomeView from "components/home";
import QUERY_KEYS from "constants/queryKeys";

export default function Home() {
  return <HomeView />;
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery([QUERY_KEYS.locations], () => {});

    return {
      props: {},
    };
  } catch (e) {
    return { notFound: true };
  }
};
