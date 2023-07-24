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
      </Routes>
    </div>
  );
};

export default App;
