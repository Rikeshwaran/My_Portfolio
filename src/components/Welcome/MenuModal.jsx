import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./MenuModal.css";

const menuItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
];

const MenuModal = ({ close }) => {
  const navigate = useNavigate();

  const go = (path) => {
    close();
    setTimeout(() => navigate(path), 400);
  };

  return (
    <motion.div
      className="menu-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Panel */}
      <motion.div
        className="menu-panel"
        initial={{ scale: 0.8, y: 80, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 80, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <button className="close-btn" onClick={close}>
          ✕
        </button>

        {/* Menu Links */}
        <motion.div
          className="menu-links scroll-menu"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {menuItems.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => go(item.path)}
              className="menu-item"
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {item.name}
              <span className="line"></span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MenuModal;
