import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="footer-left"
          >
            <h2 className="footer-logo">SALAH<span>.</span></h2>
            <p className="footer-tagline">Engineering digital systems with intent and precision from Kerala to the globe.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="footer-right"
          >
            <div className="footer-links">
              <div className="footer-col">
                <span className="footer-label">Connect</span>
                <a href="https://github.com/ghsalah" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
                <a href="https://linkedin.com/in/salah" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              </div>
              <div className="footer-col">
                <span className="footer-label">Direct</span>
                <a href="mailto:contact@salah.com" className="footer-link">Email</a>
                <a href="tel:+9710000000" className="footer-link">Call</a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} SALAH. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH PRECISION & INTENT.</p>
        </div>
      </div>

      <style>{`
        .main-footer {
          padding: 12rem 0 6rem;
          border-top: 1px solid var(--border);
          background: var(--bg-primary);
          transition: var(--transition-base);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 6rem;
          margin-bottom: 10rem;
        }

        .footer-logo {
          font-size: var(--fs-Huge);
          line-height: 0.8;
          margin-bottom: 3rem;
          letter-spacing: -0.06em;
          color: var(--text-primary);
          font-weight: 800;
        }

        .footer-logo span {
           color: var(--text-muted);
        }

        .footer-tagline {
          font-size: var(--fs-lg);
          color: var(--text-secondary);
          max-width: 450px;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        .footer-links {
          display: flex;
          gap: 6rem;
          justify-content: flex-end;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-label {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-weight: 800;
        }

        .footer-link {
          font-size: var(--fs-base);
          color: var(--text-primary);
          text-decoration: none;
          transition: var(--transition-base);
          font-weight: 700;
          opacity: 0.6;
        }

        .footer-link:hover {
          opacity: 1;
          color: var(--text-primary);
          padding-left: 1rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 5rem;
          border-top: 1.5px solid var(--border);
          font-size: var(--fs-xs);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
        }

        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
          .footer-links {
            justify-content: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .footer-logo {
            font-size: var(--fs-3xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
