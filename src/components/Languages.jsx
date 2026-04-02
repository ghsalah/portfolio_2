import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  const languages = [
    { name: 'English', level: 'Professional Proficiency', percentage: 90 },
    { name: 'Malayalam', level: 'Native Speaker', percentage: 100 },
    { name: 'Hindi', level: 'Working Proficiency', percentage: 80 },
  ];

  return (
    <section id="languages" className="languages-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Communication</span>
          <h2 className="section-title">GLOBAL <br /> DIALOGUE</h2>
        </div>

        <div className="languages-grid">
          {languages.map((lang, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lang-card"
            >
              <div className="lang-info">
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
              </div>
              <div className="lang-bar-container">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="lang-bar"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .languages-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6rem;
          margin-top: 6rem;
        }

        .lang-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .lang-info {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
        }

        .lang-name {
          font-size: var(--fs-xl);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.04em;
        }

        .lang-level {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .lang-bar-container {
          width: 100%;
          height: 1px;
          background: var(--border);
          position: relative;
          overflow: hidden;
        }

        .lang-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: var(--text-primary);
        }

        @media (max-width: 960px) {
          .languages-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Languages;
