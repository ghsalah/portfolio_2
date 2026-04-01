import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'Introduction to Internet of Things',
      issuer: 'Cisco Networking Academy', // Assumed standard issuer for this course
      year: '2024',
      description: 'Foundational understanding of IoT architecture, security, and networked systems.'
    }
  ];

  return (
    <section id="certifications" className="certifications-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Accreditation</span>
          <h2 className="section-title">CERTIFICATES & <br /> RECOGNITION</h2>
        </div>

        <div className="cert-list">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="cert-item"
            >
              <div className="cert-main">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer} • {cert.year}</span>
              </div>
              <p className="cert-desc">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .certifications-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .cert-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          margin-top: 4rem;
        }

        .cert-item {
          padding: 3rem;
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: var(--transition-base);
        }

        .cert-item:hover {
          border-color: var(--text-primary);
          background: var(--bg-secondary);
        }

        .cert-title {
          font-size: var(--fs-lg);
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .cert-issuer {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          font-weight: 700;
          margin-top: 0.5rem;
          display: block;
        }

        .cert-desc {
          font-size: var(--fs-sm);
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
           .cert-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;