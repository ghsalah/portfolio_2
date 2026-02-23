import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'React & MERN Stack Developer',
      company: 'BAIRUHATECH LLP',
      location: 'Dubai, UAE',
      period: '2025 – Present',
      type: 'Full-time',
      responsibilities: [
        'Developed and maintained full-stack applications using MongoDB, Express.js, React, and Node.js',
        'Contributed to Hospital Management System (HMS) and ERP applications',
        'Built and integrated RESTful APIs using Express.js and MongoDB',
        'Implemented Redux Toolkit with TypeScript for scalable state management',
        'Applied modern JavaScript (ES6+) best practices in a production environment',
      ],
    },
    {
      title: 'PHP Developer',
      company: 'JP CYBER LABS SERVICES',
      location: 'India',
      period: '2020 – 2022',
      type: 'Full-time',
      responsibilities: [
        'Developed and maintained dynamic websites using PHP and MySQL',
        'Built custom web applications and CMS solutions based on client requirements',
      ],
    },
  ];

  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Work <span className="highlight">Experience</span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent-border)';
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,232,122,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: 'linear-gradient(180deg, #00e87a, #00c4ff)',
              borderRadius: '4px 0 0 4px',
            }} />

            {/* Header */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Briefcase size={18} color="var(--accent)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {exp.title}
                  </h3>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: '600', paddingLeft: '28px' }}>
                  {exp.company} · {exp.location}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} />
                  {exp.period}
                </div>
                <span style={{
                  padding: '3px 10px',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--accent-border)',
                  borderRadius: '20px',
                  color: 'var(--accent)',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                }}>
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {exp.responsibilities.map((r, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <ChevronRight size={16} color="var(--accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;