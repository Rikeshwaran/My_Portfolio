import { Routes, Route } from "react-router-dom";
import Welcome from "../components/Welcome/Welcome";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
