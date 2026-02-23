import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import profileImg from '../assets/banner/aboobacker_salah_1.jpg';

const Contact = () => {
  const contactInfo = [
    { icon: <Phone size={20} />, label: 'Phone', value: '+971 55 482 0967', link: 'tel:+971554820967' },
    { icon: <Mail size={20} />, label: 'Email', value: 'aboobackersalah33@gmail.com', link: 'mailto:aboobackersalah33@gmail.com' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Dubai, UAE', link: null },
    { icon: <ExternalLink size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/salah', link: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '60px',
        alignItems: 'center',
      }}>
        {/* Left – contact info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '480px' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities.
            Feel free to reach out through any channel below — I'd love to hear from you!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--accent-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.label}
                  </p>
                  {item.link ? (
                    <a href={item.link} style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '500' }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right – profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '380px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
           <img
  src={profileImg}
  alt="Aboobacker Salah - Contact"
  style={{
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    aspectRatio: '4/5',
    objectPosition: 'top center',
    filter: 'grayscale(100%)'
  }}
/>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '24px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
            }}>
              <p style={{ color: '#fff', fontWeight: '700', fontSize: '1.1rem' }}>Aboobacker Salah C</p>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginTop: '4px' }}>Full-Stack Developer · Dubai, UAE</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;