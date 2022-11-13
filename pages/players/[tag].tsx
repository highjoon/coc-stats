import React from "react";
import { GetServerSideProps } from "next/types";
import PlayerSearchResult from "components/search/searchResult/players";
import SearchError from "components/search/searchError";
import { API_CLIENT_URL } from "constants/http";
import APIRequest from "utils/api";
import { APIPlayer } from "types/api";
import { ITroopsResponse } from "types/troops";

interface IPlayerPageProps {
  playerData: APIPlayer;
  troopsData: ITroopsResponse;
  message?: string;
}

function PlayerPage({ playerData, troopsData, message }: IPlayerPageProps) {
  if (message !== undefined) {
    return <SearchError message={message} />;
  }

  return <PlayerSearchResult playerData={playerData} troopsData={troopsData} />;
}

export default PlayerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag } = context.query;

  try {
    const response = await APIRequest<{
      result: APIPlayer;
      troops: ITroopsResponse;
      status: number;
      message?: string;
    }>(
      `${String(API_CLIENT_URL)}/api/players/${encodeURIComponent(
        String(tag),
      )}`,
    );

    if (response.status > 200) {
      return {
        props: {
          message: response.message,
        },
      };
    }
    return {
      props: {
        playerData: response.result,
        troopsData: response.troops,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
