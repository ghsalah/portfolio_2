import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Identity</span>
          <h2 className="section-title">THE MERN <br /> SPECIALIST</h2>
        </div>

        <div className="about-content">
          <div className="about-narrative">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="about-main-text"
            >
              MERN Stack Developer with strong experience in building full-stack applications using 
              React, Node.js, Express.js, and MongoDB. Specialized in developing and integrating 
              RESTful APIs and implementing scalable state management systems with Redux Toolkit and TypeScript.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="about-sub-text-grid"
            >
              <div className="sub-text-col">
                <p>
                  Experienced in enterprise-level Hospital Management Systems (HMS) and ERP systems.
                  Proficient in modern JavaScript (ES6+), Next.js, and multi-paradigm backend ecosystems including PHP and NestJS.
                </p>
                <p>
                  Driven by a problem-solving mindset and a passion for strategic planning, 
                  I focus on delivering clean, efficient, and maintainable code that drives real-world commercial impact.
                </p>
              </div>
              
              <div className="about-details-list">
                <div className="detail-item">
                   <span className="detail-label">Current Location</span>
                   <span className="detail-val">Kozhikode, India</span>
                </div>
                <div className="detail-item">
                   <span className="detail-label">Open For</span>
                   <span className="detail-val">Strategic Roles • Remote • Relocation</span>
                </div>
                <div className="detail-item">
                   <span className="detail-label">Core Focus</span>
                   <span className="detail-val">Enterprise Applications</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .about-content {
          margin-top: 6rem;
        }

        .about-main-text {
          font-size: var(--fs-3xl);
          line-height: 1.1;
          color: var(--text-primary);
          letter-spacing: -0.04em;
          margin-bottom: 6rem;
          font-weight: 800;
        }

        .about-sub-text-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 10rem;
        }

        .sub-text-col {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .sub-text-col p {
          font-size: var(--fs-lg);
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        .about-details-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-bottom: 1.5px solid var(--border);
          padding-bottom: 1.5rem;
          transition: var(--transition-base);
        }

        .detail-item:hover {
          border-color: var(--text-primary);
          padding-left: 1rem;
        }

        .detail-label {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .detail-val {
          font-size: var(--fs-base);
          color: var(--text-primary);
          font-weight: 800;
        }

        @media (max-width: 960px) {
          .about-main-text {
            font-size: var(--fs-2xl);
          }
          .about-sub-text-grid {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
          .detail-item {
             border-bottom-width: 1px;
          }
        }

        @media (max-width: 768px) {
          .about-main-text {
            font-size: var(--fs-xl);
          }
          .sub-text-col p {
            font-size: var(--fs-base);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
