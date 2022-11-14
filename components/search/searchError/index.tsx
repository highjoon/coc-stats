import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function SearchError({ message }: { message?: string }) {
  const router = useRouter();

  const moveToHome = () => {
    router.push("/");
  };

  return (
    <section className="w-full max-w-5xl p-4 mt-5 bg-default">
      <div className="flex flex-col items-center justify-center w-full gap-10 p-10 bg-white rounded-lg">
        <div className="relative w-72 h-72 md:w-32 md:h-32">
          <Image src="/assets/images/notFound.png" layout="fill" />
        </div>
        <span className="text-4xl font-extrabold">{message}</span>
        <span
          onClick={moveToHome}
          role="presentation"
          className="text-lg font-bold cursor-pointer hover:text-header"
        >
          홈으로 돌아가기
        </span>
      </div>
    </section>
  );
}

export default SearchError;
