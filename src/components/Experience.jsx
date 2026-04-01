import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'React / MERN Stack Developer',
      company: 'BAIRUHATECH LLP',
      location: 'Kerala, India',
      period: '2025 – 2025',
      description: 'Developed and maintained full-stack applications using MongoDB, Express.js, React, and Node.js. Focused on healthcare and enterprise resource planning.',
      highlights: [
        'Contributed to Hospital Management Systems (HMS) and ERP applications.',
        'Built and integrated RESTful APIs with Express.js and MongoDB.',
        'Implemented Redux Toolkit with TypeScript for scalable state management.',
        'Applied modern JavaScript (ES6+) best practices for clean and efficient code.'
      ]
    },
    {
      title: 'PHP Developer',
      company: 'JP Cyber Labs Services',
      location: 'India',
      period: '2020 – 2022',
      description: 'Developed and maintained dynamic websites using PHP, MySQL, and related web technologies.',
      highlights: [
        'Built custom web applications and content management systems (CMS) tailored to client needs.',
        'Managed end-to-end development of client-centric dynamic websites.',
        'Optimized MySQL database queries for improved site performance.',
        'Collaborated with stakeholders to deliver scalable CMS solutions.'
      ]
    },
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">History</span>
          <h2 className="section-title">PROFESSIONAL <br /> JOURNEY</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="experience-item"
            >
              <div className="exp-time">
                <span>{exp.period}</span>
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <div className="exp-sub">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                
                <div className="exp-details">
                   <p className="exp-summary">{exp.description}</p>
                   <ul className="exp-highlights">
                     {exp.highlights.map((point, j) => (
                       <li key={j} className="highlight-item">{point}</li>
                     ))}
                   </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          margin-top: 4rem;
        }

        .experience-item {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 6rem;
          padding: 6rem 0;
          border-bottom: 1px solid var(--border);
          transition: var(--transition-base);
        }

        .experience-item:last-child {
          border-bottom: none;
        }

        .exp-time {
          font-size: var(--fs-base);
          color: var(--text-muted);
          font-family: monospace;
          padding-top: 0.5rem;
          font-weight: 700;
        }

        .exp-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .exp-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exp-title {
          font-size: var(--fs-2xl);
          margin: 0;
          color: var(--text-primary);
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .exp-sub {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .exp-company {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          font-weight: 900;
        }

        .exp-location {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .exp-summary {
          font-size: var(--fs-base);
          color: var(--text-primary);
          line-height: 1.6;
          margin: 0;
          opacity: 0.8;
          max-width: 600px;
        }

        .exp-highlights {
          list-style: none;
          padding: 0;
          margin: 2rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .highlight-item {
          font-size: var(--fs-sm);
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 2.5rem;
          transition: var(--transition-base);
        }

        .highlight-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 1.5rem;
          height: 1.5px;
          background: var(--text-muted);
          transition: var(--transition-base);
        }

        .highlight-item:hover {
          color: var(--text-primary);
          transform: translateX(10px);
        }

        .highlight-item:hover::before {
          background: var(--text-primary);
          width: 2.5rem;
        }

        @media (max-width: 1024px) {
          .experience-item {
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .experience-item {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 4rem 0;
          }
          .exp-time {
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;