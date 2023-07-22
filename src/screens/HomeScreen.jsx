import React from "react";
import LargestCollections from "../components/LargestCollections";
import LatestItems from "../components/LatestItems";

const HomeScreen = () => {
  return (
    <div className="dark:bg-gray-900">
      <h2 className="text-3xl lg:text-5xl dark:text-white text-center py-8">
        Latest items
      </h2>
      <LatestItems />
      <h2 className="text-3xl lg:text-5xl dark:text-white text-center py-8">
        Largest collections
      </h2>
      <LargestCollections />
    </div>
  );
};

export default HomeScreen;
