import React from "react";
import { useRouter } from "next/router";
import { flexEvenly } from "styles/globalStyles";

function ClanInfoTab() {
  const router = useRouter();

  const moveToBasicInfo = () => {
    router.replace({
      pathname: `/clan/${String(router.query.tag)}`,
      query: { type: "basic" },
    });
  };

  const moveToWarInfo = () => {
    router.replace({
      pathname: `/clan/${String(router.query.tag)}`,
      query: { type: "war" },
    });
  };

  const moveToLeageInfo = () => {
    router.replace({
      pathname: `/clan/${String(router.query.tag)}`,
      query: { type: "league" },
    });
  };

  return (
    <div className={`${flexEvenly} w-full gap-2`}>
      <button
        type="button"
        className={`w-full p-2 rounded-md ${
          router.query.type === "basic" ? "bg-header text-white" : "bg-white"
        }`}
        onClick={moveToBasicInfo}
      >
        클랜 정보
      </button>
      <button
        type="button"
        className={`w-full p-2 rounded-md ${
          router.query.type === "war" ? "bg-header text-white" : "bg-white"
        }`}
        onClick={moveToWarInfo}
      >
        클랜전 정보
      </button>
      <button
        type="button"
        className={`w-full p-2 rounded-md ${
          router.query.type === "league" ? "bg-header text-white" : "bg-white"
        }`}
        onClick={moveToLeageInfo}
      >
        리그전 정보
      </button>
    </div>
  );
}

export default ClanInfoTab;
