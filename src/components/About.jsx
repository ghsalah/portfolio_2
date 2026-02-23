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
    <section 
      id="about" 
      style={{ 
        background: 'var(--bg-secondary)',
        padding: '60px 16px', // Reduced padding for mobile
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '40px' }}
      >
        <h2 
          className="section-title"
          style={{
            fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '0',
          }}
        >
          About <span className="highlight">Me</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'flex',
        flexDirection: 'column', // Stack on mobile
        gap: '40px', // Reduced gap for mobile
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Photo - Appears first on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            display: 'flex', 
            justifyContent: 'center',
            width: '100%',
            order: -1, // Move to top on mobile
          }}
        >
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '300px', // Smaller max-width for mobile
          }}>
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '-12px',
              bottom: '-12px',
              borderRadius: '16px',
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
                borderRadius: '16px',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ width: '100%' }}
        >
          <p style={{ 
            fontSize: 'clamp(0.95rem, 4vw, 1.05rem)', 
            lineHeight: '1.8', 
            color: 'var(--text-secondary)', 
            marginBottom: '28px',
            textAlign: 'center', // Center on mobile
          }}>
            I'm a <strong style={{ color: 'var(--accent)' }}>Full-Stack Developer</strong> with expertise in the
            MERN stack, currently working at <strong style={{ color: 'var(--text-primary)' }}>BAIRUHATECH LLP</strong> in
            Dubai, UAE. I'm passionate about building scalable web applications and turning complex problems into elegant solutions.
          </p>

          {/* Quick info */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '14px', 
            marginBottom: '32px',
            alignItems: 'center', // Center on mobile
          }}>
            {[
              { icon: <MapPin size={18} />, text: 'Dubai, UAE · Available for opportunities' },
              { icon: <Briefcase size={18} />, text: 'React & MERN Stack Developer at BAIRUHATECH LLP' },
              { icon: <Code2 size={18} />, text: 'MCA Graduate · AWH Engineering College' },
            ].map(({ icon, text }, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', // Center vertically
                  gap: '12px',
                  textAlign: 'center',
                  flexDirection: 'column', // Stack icon and text on very small screens
                }}
              >
                <span style={{ 
                  color: 'var(--accent)', 
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  {icon}
                </span>
                <span style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)',
                  lineHeight: '1.5',
                }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats - 3 columns on mobile too, but smaller */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px', // Smaller gap
          }}>
            {stats.map(({ label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                style={{
                  textAlign: 'center',
                  padding: '16px 8px', // Reduced padding
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ 
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)', 
                  fontWeight: '800', 
                  color: 'var(--accent)', 
                  lineHeight: 1 
                }}>
                  {value}
                </div>
                <div style={{ 
                  fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)', 
                  color: 'var(--text-muted)', 
                  marginTop: '4px', 
                  lineHeight: '1.2' 
                }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Desktop Styles */}
      <style>{`
        @media (min-width: 768px) {
          #about {
            padding: 100px 40px !important;
          }
          #about > div:nth-child(2) {
            flex-direction: row !important;
            gap: 60px !important;
            align-items: center !important;
          }
          #about > div:nth-child(2) > div:first-child {
            order: 0 !important;
            flex: 0 0 40% !important;
            max-width: 380px !important;
          }
          #about > div:nth-child(2) > div:last-child {
            flex: 1 !important;
            text-align: left !important;
          }
          #about > div:nth-child(2) > div:last-child > p {
            text-align: left !important;
          }
          #about > div:nth-child(2) > div:last-child > div:nth-child(2) {
            align-items: flex-start !important;
          }
          #about > div:nth-child(2) > div:last-child > div:nth-child(2) > div {
            flex-direction: row !important;
            text-align: left !important;
          }
          #about > div:nth-child(2) > div:last-child > div:nth-child(3) {
            gap: 20px !important;
          }
          #about > div:nth-child(2) > div:last-child > div:nth-child(3) > div {
            padding: 20px 12px !important;
          }
        }
        @media (max-width: 380px) {
          #about > div:nth-child(2) > div:last-child > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;