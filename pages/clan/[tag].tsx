import React from "react";
import { GetServerSideProps } from "next";
import SearchError from "components/search/searchError";
import ClanSearchResult from "components/search/searchResult/clan";
import APIRequest from "utils/api";
import { APIClan } from "types/api";
import { API_CLIENT_URL } from "constants/http";

interface IClanPageProps {
  clanData: APIClan;
  message?: string;
}

function ClanPage({ clanData, message }: IClanPageProps) {
  if (message !== undefined) {
    return <SearchError message={message} />;
  }

  return <ClanSearchResult clanData={clanData} />;
}

export default ClanPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag } = context.query;

  try {
    const response = await APIRequest<{
      result: APIClan;
      status: number;
      message?: string;
    }>(`${String(API_CLIENT_URL)}/api/clan/${encodeURIComponent(String(tag))}`);

    if (response.status > 200) {
      return {
        props: {
          message: response.message,
        },
      };
    }
    return {
      props: {
        clanData: response.result,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
