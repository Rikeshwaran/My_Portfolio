import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">

      <motion.div
        className="bg-glow glow1"
        animate={{ x: [0, 120, -120, 0], y: [0, -80, 80, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="bg-glow glow2"
        animate={{ x: [0, -150, 150, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          animate={{
            textShadow: [
              "0 0 10px #38bdf8",
              "0 0 25px #38bdf8",
              "0 0 10px #38bdf8",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          RIKESHWARAN <span>M</span>
        </motion.h1>

        <motion.h2
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Junior Software Engineer • Software Developer
        </motion.h2>

        <p>
          I build modern web applications, full stack projects,  
          and AI-based solutions with clean UI & smooth experiences.
        </p>

        <div className="hero-btns">
          <a href="/about" className="btn-main">
            About Me →
          </a>

          <a href="/resume" className="btn-alt">
            View Resume 
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
