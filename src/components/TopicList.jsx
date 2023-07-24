import React from "react";
import { Link } from "react-router-dom";

const TopicList = () => {
  const topics = [
    "books",
    "games",
    "movies",
    "tvseries",
    "foods",
    "space",
    "sport",
    "animals",
    "people",
    "phones",
    "places",
    "other",
  ];

  return (
    <div className="min-h-[120px]">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {topics.map((topic) => (
          <p key={topic} className="text-[#d2ae6d] dark:text-blue-700 text-xl">
            <Link to={`/collections/${topic}`}>#{topic}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default TopicList;
