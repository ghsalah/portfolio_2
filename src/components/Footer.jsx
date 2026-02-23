import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: <Github size={18} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:aboobackersalah33@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '48px 40px 32px',
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {/* Brand */}
        <div>
          <p style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Aboobacker Salah C
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '500', marginTop: '4px' }}>
            Full-Stack Developer · Dubai, UAE
          </p>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {socials.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              aria-label={label}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center' }}>
            Made with <Heart size={13} color="#00e87a" fill="#00e87a" /> using React & Framer Motion
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © 2025 Aboobacker Salah C. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;