import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCollection from "./components/AddCollection";
import MyCollections from "./components/MyCollections";
import PrivateRoute from "./components/PrivateRoute";
import CollectionListByTopic from "./components/CollectionListByTopic";
import AdminScreen from "./screens/AdminScreen";
import AdminRoute from "./components/AdminRoute";

const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/create" element={<AddCollection />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/mycollections" element={<MyCollections />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
        <Route
          path="/collections/:topicId"
          element={<CollectionListByTopic />}
        />
        <Route path="" element={<AdminRoute />}>
          <Route path="/admin" element={<AdminScreen />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
