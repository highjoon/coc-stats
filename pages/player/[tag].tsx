import React from "react";
import { GetServerSideProps } from "next";
import PlayerSearchResult from "components/search/searchResult/player";
import SearchError from "components/search/searchError";
import APIRequest from "utils/api";
import { APIPlayer } from "types/api";
import { API_CLIENT_URL } from "constants/http";

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
      `${String(API_CLIENT_URL)}/api/player/${encodeURIComponent(String(tag))}`,
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
