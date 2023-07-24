import React from "react";

const SkeletonHeader = () => {
  return (
    <div>
      <div role="status" className="max-w-sm  animate-pulse ">
        <div className="h-14 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const SkeletonHeader2 = () => {
  return (
    <div>
      <div role="status" className="max-w-sm  animate-pulse ">
        <div className="h-14 rounded-full bg-transparent max-w-[360px] mb-2.5"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
const SkeletonHeader3 = () => {
  return (
    <div>
      <div role="status" className="max-w-sm  animate-pulse ">
        <div className="h-14 bg-transparent rounded-full max-w-[360px] mb-2.5"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export { SkeletonHeader, SkeletonHeader2, SkeletonHeader3 };
