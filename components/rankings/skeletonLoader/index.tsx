import React from "react";

function SkeletonLoader() {
  return (
    <>
      <div className="relative flex items-center justify-between w-full px-20 py-3 border-b-2 cursor-pointer md:p-2 border-b-default last:border-none">
        <div className="flex flex-row items-center justify-center w-full h-full space-x-5 animate-pulse">
          <div className="w-20 h-20 bg-gray-300 rounded-full md:w-14 md:h-14" />
          <div className="flex flex-col w-1/2 space-y-3">
            <div className="w-1/2 h-6 bg-gray-300 rounded-md" />
            <div className="w-4/6 h-6 bg-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col w-1/2 space-y-3">
            <div className="w-1/2 h-6 bg-gray-300 rounded-md" />
            <div className="w-4/6 h-6 bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-between w-full px-20 py-3 border-b-2 cursor-pointer md:p-2 border-b-default last:border-none">
        <div className="flex flex-row items-center justify-center w-full h-full space-x-5 animate-pulse">
          <div className="w-20 h-20 bg-gray-300 rounded-full md:w-14 md:h-14" />
          <div className="flex flex-col w-1/2 space-y-3">
            <div className="w-1/2 h-6 bg-gray-300 rounded-md" />
            <div className="w-4/6 h-6 bg-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col w-1/2 space-y-3">
            <div className="w-1/2 h-6 bg-gray-300 rounded-md" />
            <div className="w-4/6 h-6 bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-between w-full px-20 py-3 border-b-2 cursor-pointer md:p-2 border-b-default last:border-none">
        <div className="flex flex-row items-center justify-center w-full h-full space-x-5 animate-pulse">
          <div className="w-20 h-20 bg-gray-300 rounded-full md:w-14 md:h-14" />
          <div className="flex flex-col w-1/2 space-y-3">
            <div className="w-1/2 h-6 bg-gray-300 rounded-md" />
            <div className="w-4/6 h-6 bg-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col w-1/2 space-y-3">
            <div className="w-1/2 h-6 bg-gray-300 rounded-md" />
            <div className="w-4/6 h-6 bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonLoader;
