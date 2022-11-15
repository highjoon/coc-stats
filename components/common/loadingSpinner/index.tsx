import React from "react";
import Image from "next/image";

function LoadingSpinner() {
  return (
    <div className="w-full h-screen bg-white rounded-md md:h-[356px]">
      <div className="flex items-center justify-center h-full">
        <div className="relative w-12 h-12">
          <Image
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
