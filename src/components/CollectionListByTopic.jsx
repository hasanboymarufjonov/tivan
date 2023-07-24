import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";
import {
  SkeletonHeader,
  SkeletonHeader2,
  SkeletonHeader3,
} from "./SkeletonHeader";
import { useParams } from "react-router-dom";
import BASE_URL from "../config";
import { useTranslation } from "react-i18next";

const CollectionListByTopic = () => {
  const { topicId } = useParams();
  const { t } = useTranslation();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/collections/${topicId}`
        );
        setCollections(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollections();
  }, [topicId]);

  if (loading) {
    return (
      <div className="dark:bg-gray-900 min-h-[calc(100vh-64px)] ">
        <div className="5 grid grid-cols-3 md:grid-cols-3 gap-4 p-6">
          <SkeletonHeader2 />
          <SkeletonHeader />
          <SkeletonHeader3 />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 min-h-[500px]">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-900 min-h-[calc(100vh-64px)]">
      <h2 className="text-center text-5xl py-5 dark:text-white">#{topicId}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 p-1">
        {collections.map((collection) => (
          <div
            key={collection._id}
            className="p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {collection.collectionName}
            </h5>
            <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
              {t("Author ")}: {collection.collectionAuthor}
            </h5>
            <p className="dark:text-white">#{collection.collectionTopic}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {collection.collectionDescription}
            </p>
            <p className="font-semibold text-gray-600 dark:text-gray-300">
              {t("Number of Items")}: {collection.collectionItems.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionListByTopic;
