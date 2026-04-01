import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  "Hello",      // English
  "Namaskaram", // Malayalam
  "Marhaba",    // Arabic
  "Hola",       // Spanish
  "Bonjour",    // French
  "Ciao",       // Italian
  "Namaste",    // Hindi
  "Konnichiwa", // Japanese
  "Annyeong",   // Korean
  "Hello",      // Return to English for final reveal
];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === greetings.length - 1) {
      const finalTimeout = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(finalTimeout);
    }

    const interval = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, index === 0 ? 300 : 150); // Initial delay then fast cycle

    return () => clearTimeout(interval);
  }, [index, onComplete]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      }}
      className="preloader"
    >
      <div className="preloader-overlay"></div>
      
      <div className="preloader-content">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30, skewY: 10 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            exit={{ opacity: 0, y: -30, skewY: -10 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="greeting-text"
          >
            <span className="dot">•</span>
            {greetings[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: (greetings.length * 0.15) + 0.3, ease: "linear" }}
        className="preloader-progress"
      />

      <style>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #000;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .preloader-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .preloader-content {
          position: relative;
          z-index: 2;
        }

        .greeting-text {
          color: #fff;
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 2rem;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          display: inline-block;
        }

        .preloader-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #fff;
          transform-origin: left;
          opacity: 0.2;
        }

        @media (max-width: 768px) {
          .greeting-text {
            font-size: var(--fs-2xl);
            gap: 1rem;
          }
          .dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Preloader;
