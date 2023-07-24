import React from "react";
import LargestCollections from "../components/LargestCollections";
import LatestItems from "../components/LatestItems";
import TopicList from "../components/TopicList";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-gray-900">
      <h2 className="text-3xl lg:text-5xl dark:text-white text-center py-8">
        {t("Latest items")}
      </h2>
      <LatestItems />
      <h2 className="text-3xl lg:text-5xl dark:text-white text-center py-8">
        {t("Largest collections")}
      </h2>
      <LargestCollections />
      <h2 className="text-3xl lg:text-5xl dark:text-white text-center py-8">
        {t("Topics ")}
      </h2>
      <TopicList />
    </div>
  );
};

export default HomeScreen;
