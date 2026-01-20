import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RobotScene from "./RobotScene";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  // // Auto redirect after 4 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/home");
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="welcome-container">
      
      {/* LEFT CONTENT */}
      <motion.div
        className="content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          RIKESHWARAN M
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="typing"
        >
          Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Building ideas into scalable solutions
        </motion.p>
      </motion.div>

      {/* RIGHT ROBOT */}
      <motion.div
        className="robot"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <RobotScene />
      </motion.div>

    </div>
  );
};

export default Welcome;
