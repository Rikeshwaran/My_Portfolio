import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RobotScene from "./RobotScene";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const texts = [
    "Welcome to my page !...",
    "Hi, I'm Rikeshwaran ",
    "Let's explore more about me !..."
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (textIndex >= texts.length) return;

    if (charIndex < texts[textIndex].length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 80);

      return () => clearTimeout(typingTimer);
    } else {
      if (textIndex < texts.length - 1) {
        const pauseTimer = setTimeout(() => {
          setVisible(false);

          setTimeout(() => {
            setDisplayText("");
            setCharIndex(0);
            setTextIndex(prev => prev + 1);
            setVisible(true);
          }, 600);
        }, 1500);

        return () => clearTimeout(pauseTimer);
      }
    }
  }, [charIndex, textIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
        className="welcome-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >


      {/* LEFT TEXT */}
      <div className="content">
        <motion.h1
          className="typing-line"
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {displayText}
        </motion.h1>
      </div>

      {/* RIGHT ROBOT */}
      <motion.div
        className="robot"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <RobotScene />
      </motion.div>

    </motion.div>
  );
};

export default Welcome;
