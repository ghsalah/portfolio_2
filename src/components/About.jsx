import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code2 } from 'lucide-react';
import profileImg from '../assets/banner/aboobacker_salah_2.jpg';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '60px',
        alignItems: 'center',
      }}>
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              right: '-16px',
              bottom: '-16px',
              borderRadius: '20px',
              border: '2px solid var(--accent-border)',
            }} />
            <img
              src={profileImg}
              alt="Aboobacker Salah"
              style={{
                width: '100%',
                aspectRatio: '4/5',
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: '20px',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            I'm a <strong style={{ color: 'var(--accent)' }}>Full-Stack Developer</strong> with expertise in the
            MERN stack, currently working at <strong style={{ color: 'var(--text-primary)' }}>BAIRUHATECH LLP</strong> in
            Dubai, UAE. I'm passionate about building scalable web applications and turning complex problems into elegant solutions.
          </p>

          {/* Quick info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
            {[
              { icon: <MapPin size={18} />, text: 'Dubai, UAE · Available for opportunities' },
              { icon: <Briefcase size={18} />, text: 'React & MERN Stack Developer at BAIRUHATECH LLP' },
              { icon: <Code2 size={18} />, text: 'MCA Graduate · AWH Engineering College' },
            ].map(({ icon, text }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {stats.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  textAlign: 'center',
                  padding: '20px 12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)', lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px', lineHeight: '1.3' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;