import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import "./Layout.css";

const pages = ["/home", "/about", "/projects", "/education"];

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = pages.indexOf(location.pathname);

  const goNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  return (
    <>
      <Header currentIndex={currentIndex} pages={pages} />

      <motion.main
        className="content-scroll"
        key={location.pathname}
        style={{
          height: "calc(100vh - 80px)",
          marginTop: "80px",
          position: "relative",
          overflow: "auto"
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Outlet />
      </motion.main>

      {/* FIXED NAVIGATION (BOTTOM RIGHT) */}
      <div className="fixed-nav">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="nav-btn"
        >
          ←
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === pages.length - 1}
          className="nav-btn"
        >
          →
        </button>
      </div>
    </>
  );
};

export default Layout;
