import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MenuModal from "./Menumodal";
import "./Header.css";

const Header = ({ currentIndex, pages , onMenuToggle }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <header className="app-header">
        <div className="header-title">
          {currentIndex <= 0 ? "Welcome" : "RIKESHWARAN M"}
        </div>

        {!isMobile && (
          <div className="page-dots">
            {pages.map((path, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => navigate(path)}
              />
            ))}
          </div>
        )}

        <div 
            className="menu-btn" 
            onClick={() => {
              setOpen(true);
               onMenuToggle(true)
               }
               }>☰</div>
      </header>
      <AnimatePresence>
        {open && <MenuModal close={() => {
          setOpen(false);
          onMenuToggle(false);
        }} />}

      </AnimatePresence>

    </>
  );
};

export default Header;
