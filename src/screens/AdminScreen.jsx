import React, { useEffect, useState } from "react";
import BASE_URL from "../config";
import { useTranslation } from "react-i18next";

const AdminScreen = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/users/manage`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  function changeRole(userId, currentRole) {
    const newRole = currentRole === "User" ? "Admin" : "User";

    fetch(`${BASE_URL}/api/users/${userId}/update-role`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: newRole }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === data._id ? { ...user, role: data.role } : user
          )
        );
      })
      .catch((error) => console.error("Error updating user role:", error));
  }

  function changeStatus(userId, currentStatus) {
    const newStatus = currentStatus === "Unblock" ? "Blocked" : "Unblock";
    fetch(`${BASE_URL}/api/users/${userId}/update-status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === data._id ? { ...user, status: data.status } : user
          )
        );
      })
      .catch((error) => console.error("Error updating user status:", error));
  }

  function deleteUser(userId) {
    fetch(`${BASE_URL}/api/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Filter out the deleted user from the users state
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      })
      .catch((error) => console.error("Error deleting user:", error));
  }

  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 min-h-[calc(100vh-64px)]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              {t("Name ")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("Email ")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("Role ")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("Status ")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("Created At")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("Updated At")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("Delete User")}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="w-4 p-4">{index + 1}</td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.name}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td
                className="px-6 py-4 font-bold text-blue-500 whitespace-nowrap dark:text-blue-500 cursor-pointer"
                onClick={() => changeRole(user._id, user.role)}
              >
                {user.role}
              </td>
              <td
                className={`px-6 py-4 font-bold ${
                  user.status === "Blocked" ? "text-red-500" : "text-green-500"
                } whitespace-nowrap cursor-pointer`}
                onClick={() => changeStatus(user._id, user.status)}
              >
                {user.status}
              </td>
              <td className="px-6 py-4">
                {new Date(user.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4">
                {new Date(user.updatedAt).toLocaleString()}
              </td>
              <td
                className="px-6 py-4 font-bold text-red-500 whitespace-nowrap cursor-pointer"
                onClick={() => deleteUser(user._id)}
              >
                {t("Delete ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminScreen;
