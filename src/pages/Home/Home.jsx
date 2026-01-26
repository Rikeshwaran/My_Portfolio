// Home.jsx - UPDATED VERSION
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [codes, setCodes] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Create animated code elements
    const codeElements = [
      'const dev = new Developer()',
      '<Code quality="excellent" />',
      'await api.connect()',
      'db.optimize().query()',
      'function createMagic() {}',
      'React.useEffect(() => {}, [])'
    ];
    
    const elements = codeElements.map((code, index) => ({
      id: index,
      text: code,
      left: `${Math.random() * 85 + 5}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${8 + Math.random() * 8}s`
    }));
    
    setCodes(elements);
    
    // Start animation after 1 second delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    // You can add contact functionality here
    window.open('mailto:rikeshrikey@gmail.com', '_blank');
  };

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Next Page Button at Top Right */}
      <motion.div
        className="next-page-top"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <button
          className="next-page-btn"
          onClick={() => navigate("/about")}
        >
          About Me ➜
        </button>
      </motion.div>

      {/* Glow Orbs */}
      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <div className="glow-orb orb3"></div>

      {/* Animated Code Elements - UPDATED */}
      {codes.map((code) => (
        <motion.div
          key={code.id}
          className={`code-element ${isAnimating ? 'animate' : 'initial'}`}
          style={{
            left: code.left,
            animationDelay: code.animationDelay,
            animationDuration: code.animationDuration
          }}
          initial={false}
        >
          {code.text}
        </motion.div>
      ))}

      {/* Hero Section at Top */}
      <motion.div
        className="hero-top"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="hero-title">
          RIKESHWARAN M
        </h1>
        
        <motion.h2
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Junior Software Engineer | Developer
        </motion.h2>
        
        <motion.p
          className="hero-company"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Currently at <span>Younder Bots (OPC) Private Limited</span>
        </motion.p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="action-buttons"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="action-btn primary-btn">
          Hire Me (coming soon)
        </button>
        
        <button className="action-btn secondary-btn">
          Download Resume 
        </button>
      </motion.div>
{/* Feature Cards with Looping Animations */}
      <motion.div
        className="feature-grid"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>Frontend + Backend </div>
        </motion.div>
        
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>API Handling + Integration</div>
        </motion.div>
        
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>Database Management</div>
        </motion.div>
      </motion.div>

      {/* Bottom Contact Button */}
      <motion.div
        className="contact-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <button
          className="contact-btn-large"
          onClick={handleContactClick}
        >
          📞 Contact Me
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Home;