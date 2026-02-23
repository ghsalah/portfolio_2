import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const Languages = () => {
  const languages = [
    { name: 'English', proficiency: 'Fluent', level: 90 },
    { name: 'Malayalam', proficiency: 'Native', level: 100 },
    { name: 'Hindi', proficiency: 'Fluent', level: 80 },
  ];

  return (
    <section id="languages" style={{ background: 'var(--bg-primary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="highlight">Languages</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
      }}>
        {languages.map((lang, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card"
            style={{ padding: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--accent-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1.2 }}>{lang.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>{lang.proficiency}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: lang.level + '%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #00e87a, #00c4ff)', borderRadius: '2px' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Languages;