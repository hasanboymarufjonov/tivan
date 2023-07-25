import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BASE_URL from "../config";
import { useTranslation } from "react-i18next";

const MyCollections = () => {
  const { t } = useTranslation();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [collectionId, setCollectionId] = useState("");

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/collections`, {
        credentials: "include", // Include cookies with the request
      });

      if (response.ok) {
        const data = await response.json();
        setCollections(data.reverse());
      } else {
        console.error("Error fetching collections:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAddItem = async (collectionId) => {
    try {
      const newItem = {
        itemName: itemName,
        itemDescription: itemDescription,
      };

      const response = await fetch(
        `${BASE_URL}/api/collections/${collectionId}
      `,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
          credentials: "include",
        }
      );
      setIsModalOpen(false);

      if (response.ok) {
        fetchCollections();
        toast.success("Item added");
        setItemName("");
        setItemDescription("");
      } else {
        console.error("Error adding item:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 dark:bg-gray-900 gap-1 p-1 min-h-[calc(100vh-64px)]">
      {collections.length === 0 ? (
        <>
          <p className="text-red-500 mt-4">
            *{t("Collections not created yet")}
          </p>
        </>
      ) : (
        <>
          {" "}
          {collections.map((collection) => (
            <div
              key={collection._id}
              className=" p-6 bg-white border border-gray-200  dark:bg-gray-800 dark:border-none"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {collection.collectionName}
              </h5>

              <p className="dark:text-white">#{collection.collectionTopic}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {collection.collectionDescription}
              </p>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setCollectionId(collection._id);
                }}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2ae6d] rounded-lg hover:bg-[#bda06b] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-gray-900 dark:focus:ring-gray-400"
              >
                {t("Add item")}
              </button>

              {collection.collectionItems.length > 0 ? (
                <table className="mt-4 w-full border text-center dark:text-white dark:border-white">
                  <thead>
                    <tr>
                      <th className=" border-r border-b">{t("Item Name")}</th>
                      <th className=" border-b">{t("Item Description")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collection.collectionItems.map((item) => (
                      <tr key={item._id}>
                        <td className="border-b border-r">{item.itemName}</td>
                        <td className="border-b">{item.itemDescription}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-red-500 mt-4">*{t("No items added")}</p>
              )}

              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                  <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">
                      {" "}
                      {t("Add item")}{" "}
                    </h3>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 mb-2 w-full"
                      placeholder="Add Item Name"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                    <textarea
                      className="border border-gray-300 p-2 mb-2 w-full"
                      placeholder="Add Item Description"
                      value={itemDescription}
                      onChange={(e) => setItemDescription(e.target.value)}
                    />
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => handleAddItem(collectionId)}
                    >
                      {t("Add item")}
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
                      onClick={() => setIsModalOpen(false)}
                    >
                      {t("Cancel ")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MyCollections;
