import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function NotFound() {
  const router = useRouter();

  const moveToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 p-10 mt-10 bg-white rounded-lg">
      <div className="relative w-72 h-72">
        <Image src="/assets/images/notFound.png" layout="fill" />
      </div>
      <span className="text-4xl font-extrabold">
        페이지를 찾을 수 없습니다!
      </span>
      <span
        onClick={moveToHome}
        role="presentation"
        className="text-lg font-bold cursor-pointer hover:text-header"
      >
        홈으로 돌아가기
      </span>
    </div>
  );
}

export default NotFound;
