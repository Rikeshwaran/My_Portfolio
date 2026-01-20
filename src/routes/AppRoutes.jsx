import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Welcome from "../components/Welcome/Welcome";

import Home from "../pages/Home/Home";
import About from "../pages/OtherPages/About";
import Projects from "../pages/OtherPages/Projects";
import Education from "../pages/OtherPages/Education";

import Layout from "../layout/Layout";



const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
    
        <Route path="/" element={<Welcome />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
