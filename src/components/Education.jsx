import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'AWH Engineering College, Kuttikattoor',
      period: '2023 – 2025',
      detail: 'Focused on advanced software engineering, databases, and web technologies.',
    },
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'SAFI Institute of Advanced Study, Vazhayur',
      period: '2017 – 2020',
      detail: 'Core computer science fundamentals, data structures, and algorithms.',
    },
  ];

  return (
    <section id="education" style={{ background: 'var(--bg-primary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          My <span className="highlight">Education</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="card"
            style={{ padding: '32px' }}
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'var(--accent-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}>
              <GraduationCap size={26} />
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: '1.4' }}>
              {edu.degree}
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              {edu.institution}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
              <Calendar size={14} color="var(--accent)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '600' }}>{edu.period}</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              {edu.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;