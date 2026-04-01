import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImg from '../assets/banner/aboobacker_salah_1.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Top Row: Professional Status */}
          <div className="hero-top">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-status"
            >
              <div className="pulse-container">
                <div className="status-pulse active"></div>
              </div>
              <span className="status-text">Available for New Opportunities / Kerala Based</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-specialization"
            >
              <span className="spec-label">Specialization:</span>
              <span className="spec-value">Full-Stack MERN Architect</span>
            </motion.div>
          </div>

          {/* Middle Row: The Signature & Profile */}
          <div className="hero-main">
            <div className="hero-main-flex">
              <div className="hero-name-container">
                <motion.h1 
                  initial={{ opacity: 0, y: 120 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="hero-name"
                >
                  ABOOBACKER <br />
                  <span className="name-highlight">SALAH C</span>
                </motion.h1>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hero-profile-container"
              >
                <img src={profileImg} alt="Aboobacker Salah C" className="hero-profile-img" />
                <div className="img-overlay-border"></div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Row: Career Narrative & CTA */}
          <div className="hero-bottom">
            <div className="hero-narrative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hero-bio"
              >
                <p className="bio-text">
                  MERN Stack Developer skilled in building full-stack applications with 
                  React, Node.js, and MongoDB. Scalable state management and enterprise 
                  HMS/ERP experience. Kozhikode, Kerala.
                </p>
                
                <div className="hero-quick-stats">
                  <div className="quick-stat">
                    <span className="quick-val">03+</span>
                    <span className="quick-label">Experience</span>
                  </div>
                  <div className="quick-stat">
                    <span className="quick-val">12+</span>
                    <span className="quick-label">Projects</span>
                  </div>
                </div>

                <div className="hero-links">
                  <a href="#projects" className="hero-cta-link">View Selected Work</a>
                  <div className="hero-socials-minimal">
                    <a href="https://github.com/ghsalah" target="_blank" rel="noreferrer">GitHub</a>
                    <span>/</span>
                    <a href="https://linkedin.com/in/salah" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
              className="hero-indicator"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="scroll-hint">
                <span className="hint-text">Scroll to explore</span>
                <div className="hint-line"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 160px 0 60px;
          position: relative;
          background: var(--bg-primary);
        }

        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 6vh;
          width: 100%;
        }

        .hero-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 2rem;
        }

        .hero-status {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .pulse-container {
          width: 8px;
          height: 8px;
          position: relative;
        }

        .status-pulse {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        
        .status-pulse.active {
          background: #4ade80; /* Green for available */
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.5);
          animation: pulseActive 2s infinite;
        }

        @keyframes pulseActive {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        .status-text, .spec-label, .spec-value {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .spec-value {
          color: var(--text-primary);
          margin-left: 0.5rem;
          font-weight: 700;
        }

        .hero-main {
          overflow: hidden;
        }

        .hero-main-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hero-name {
          line-height: 0.85;
          margin-left: -0.05em;
          letter-spacing: -0.06em;
          color: var(--text-primary);
        }

        .name-highlight {
           color: var(--text-muted);
           transition: color 0.6s ease;
        }

        .hero-name:hover .name-highlight {
          color: var(--text-primary);
        }

        .hero-profile-container {
          width: 280px;
          height: 380px;
          position: relative;
          z-index: 5;
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.1);
          border: 1px solid var(--border);
          transition: var(--transition-base);
        }

        .hero-profile-container:hover .hero-profile-img {
          filter: grayscale(0%) contrast(1);
          transform: translateY(-10px);
        }

        .img-overlay-border {
          position: absolute;
          top: 20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 1px solid var(--text-primary);
          z-index: -1;
          transition: var(--transition-base);
        }

        .hero-profile-container:hover .img-overlay-border {
          top: 10px;
          right: -10px;
        }

        .hero-bottom {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          margin-top: 4vh;
        }

        .hero-narrative {
          max-width: 650px;
        }

        .bio-text {
          font-size: var(--fs-lg);
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 3rem;
          max-width: 500px;
        }

        .hero-quick-stats {
          display: flex;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .quick-stat {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .quick-val {
          font-size: var(--fs-xl);
          font-weight: 700;
          color: var(--text-primary);
        }

        .quick-label {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .hero-links {
          display: flex;
          align-items: center;
          gap: 3.5rem;
        }

        .hero-cta-link {
          font-size: var(--fs-sm);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          text-decoration: none;
          padding-bottom: 0.5rem;
          border-bottom: 1.5px solid var(--text-primary);
          transition: var(--transition-base);
          font-weight: 700;
        }

        .hero-cta-link:hover {
          padding-right: 2rem;
          border-bottom-color: var(--text-muted);
        }

        .hero-socials-minimal {
          display: flex;
          gap: 1rem;
          color: var(--text-muted);
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero-socials-minimal a {
          text-decoration: none;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .hero-socials-minimal a:hover {
          color: var(--text-primary);
        }

        .hero-indicator {
          cursor: pointer;
        }

        .scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .hint-text {
          writing-mode: vertical-rl;
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--text-muted);
          font-weight: 700;
          animation: bounceHint 2s infinite;
        }

        .hint-line {
          width: 1.5px;
          height: 100px;
          background: linear-gradient(to bottom, var(--border), transparent);
        }

        @keyframes bounceHint {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }

        @media (max-width: 1024px) {
          .hero-bottom {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
           .hero-main-flex {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 4rem;
          }
          .hero-indicator {
            display: none;
          }
          .hero-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 140px;
          }
          .hero-quick-stats {
            gap: 2rem;
          }
          .hero-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          .hero-name {
            font-size: var(--fs-huge);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;