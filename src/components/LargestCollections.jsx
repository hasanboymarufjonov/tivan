import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";
import BASE_URL from "../config";

const LargestCollections = () => {
  const [largestCollections, setLargestCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLargestCollections();
  }, []);

  const fetchLargestCollections = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/collections/largest-collections`
      );
      setLargestCollections(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching largest collections:", error);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        {largestCollections.map((collection) => (
          <div
            key={collection._id}
            className="p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {collection.collectionName}
            </h5>
            <p className="dark:text-white">#{collection.collectionTopic}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {collection.collectionDescription}
            </p>
            <p className="font-semibold text-gray-600 dark:text-gray-300">
              Number of Items: {collection.collectionItems.length}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LargestCollections;
