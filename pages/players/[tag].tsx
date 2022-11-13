import React from "react";
import { GetServerSideProps } from "next/types";
import PlayerSearchResult from "components/search/searchResult/players";
import SearchError from "components/search/searchError";
import { API_CLIENT_URL } from "constants/http";
import APIRequest from "utils/api";
import { APIPlayer } from "types/api";

interface IPlayerPageProps {
  playerData: APIPlayer;
  message?: string;
}

function PlayerPage({ playerData, message }: IPlayerPageProps) {
  if (message !== undefined) {
    return <SearchError message={message} />;
  }
  return <PlayerSearchResult playerData={playerData} />;
}

export default PlayerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag } = context.query;

  try {
    const response = await APIRequest<{
      result: APIPlayer;
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
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
