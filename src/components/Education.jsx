import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'AWH Engineering College Kuttikattoor',
      period: '2023 - 2025',
      description: 'Advanced studies in computer science, focusing on modern software engineering principles and full-stack development methodologies.'
    },
    {
      degree: 'B.Sc. in Computer Science',
      school: 'SAFI Institute of Advanced Study Vazhayur',
      period: '2017 - 2020',
      description: 'Foundation in computer science, algorithms, data structures, and database management systems.'
    }
  ];

  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">ACADEMIC <br /> FOUNDATION</h2>
        </div>

        <div className="education-list">
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="education-item"
            >
              <div className="edu-top">
                <span className="edu-period">{edu.period}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
              </div>
              <div className="edu-main">
                <span className="edu-school">{edu.school}</span>
                <p className="edu-desc">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .education-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          margin-top: 4rem;
        }

        .education-item {
          padding: 4rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: var(--transition-base);
        }

        .education-item:hover {
          background: var(--bg-primary);
          border-color: var(--text-primary);
          transform: translateY(-10px);
        }

        .edu-period {
          font-family: monospace;
          font-size: var(--fs-xs);
          color: var(--text-muted);
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .edu-degree {
          font-size: var(--fs-xl);
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .edu-school {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          font-weight: 700;
          display: block;
          margin-bottom: 1.5rem;
        }

        .edu-desc {
          font-size: var(--fs-sm);
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .education-list {
            grid-template-columns: 1fr;
          }
          .education-item {
            padding: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
