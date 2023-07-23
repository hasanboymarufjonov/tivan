import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import BASE_URL from "../config";

const LatestItems = () => {
  const [latestItems, setLatestItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestItems();
  }, []);

  const fetchLatestItems = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/collections/latest-items`);
      const data = await response.json();
      setLatestItems(data);
    } catch (error) {
      console.error("Error fetching latest items:", error);
    } finally {
      setLoading(false);
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {latestItems.map((item) => (
          <div
            key={item._id}
            className="p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.itemName} in {item.collectionName}
            </h5>
            <h5 className="mb-2 text-base font-base tracking-tight text-gray-900 dark:text-white">
              Author: {item.collectionAuthor}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.itemDescription}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Created at: {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestItems;
