import React from "react";
import Image from "next/image";

function LoadingSpinner() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 bg-default">
      <div className="w-full h-screen bg-white rounded-md">
        <div className="flex items-center justify-center h-full">
          <div className="relative w-12 h-12">
            <Image
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt="loading-spinner"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingSpinner;
