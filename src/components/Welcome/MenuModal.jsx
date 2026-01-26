import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./MenuModal.css";

const MenuModal = ({ close }) => {
  const navigate = useNavigate();

  const go = (path) => {
    close();
    setTimeout(() => navigate(path), 200);
  };

  return (
    <motion.div
      className="menu-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="menu-panel"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <button onClick={() => go("/home")}>Home</button>
        <button onClick={() => go("/about")}>About</button>
        <button onClick={() => go("/projects")}>Projects</button>
        <button onClick={() => go("/education")}>Education</button>
        <button onClick={close}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default MenuModal;
