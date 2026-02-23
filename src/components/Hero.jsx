import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/banner/aboobacker_salah_1.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 16px 40px', // Reduced padding for mobile
        maxWidth: '100%',
        margin: 0,
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background blobs - scaled down for mobile */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0,232,122,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0,196,255,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column', // Stack vertically by default
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px', // Reduced gap for mobile
      }}>
        {/* Profile Image - Now appears first on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ 
            flex: '0 0 auto', 
            display: 'flex', 
            justifyContent: 'center',
            order: -1, // Move image to top on mobile
          }}
        >
          <div style={{
            position: 'relative',
            width: 'clamp(200px, 60vw, 320px)', // Smaller on mobile
            height: 'clamp(200px, 60vw, 320px)',
          }}>
            {/* Outer ring */}
            <div style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00e87a, #00c4ff)',
              opacity: '0.3',
              filter: 'blur(8px)',
            }} />
            {/* Inner ring */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00e87a 0%, #00c4ff 100%)',
              padding: '2px',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
              }} />
            </div>
            {/* Actual photo */}
            <img
              src={profileImg}
              alt="Aboobacker Salah"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ 
            flex: 1, 
            width: '100%',
            textAlign: 'center', // Center align on mobile
            maxWidth: '600px',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-border)',
              borderRadius: '20px',
              marginBottom: '20px',
              fontSize: 'clamp(0.75rem, 3vw, 0.85rem)', // Responsive font
            }}
          >
            <span style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              background: 'var(--accent)', 
              display: 'inline-block',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--accent)', fontWeight: '600', whiteSpace: 'nowrap' }}>
              Available for new opportunities
            </span>
          </motion.div>

          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 3.5rem)', // Better mobile scaling
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '4px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            Hi, I'm
          </h1>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 9vw, 4rem)', // Slightly larger for name
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #00e87a, #00c4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}>
            Aboobacker Salah
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 4vw, 1.2rem)', // Responsive subtitle
            fontWeight: '500',
            color: 'var(--text-secondary)',
            marginBottom: '12px',
          }}>
            Full-Stack Developer · MERN Stack · React & Node.js
          </p>

          <p style={{
            fontSize: 'clamp(0.9rem, 3.5vw, 1rem)', // Responsive body text
            lineHeight: '1.7',
            color: 'var(--text-muted)',
            marginBottom: '32px',
            maxWidth: '100%',
            padding: '0 8px',
          }}>
            Building scalable web applications with modern technologies.
            Passionate about clean code, great user experiences, and continuous learning.
          </p>

          {/* CTA Buttons - Stack on very small screens */}
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap', 
            marginBottom: '32px',
            justifyContent: 'center', // Center buttons
          }}>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Aboobacker_salah_Resume.pdf"
              download="Aboobacker_Salah_Resume.pdf"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)',
                whiteSpace: 'nowrap',
              }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:aboobackersalah33@gmail.com"
              className="btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)',
                whiteSpace: 'nowrap',
              }}
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            {[
              { icon: <Github size={20} />, href: 'https://github.com/ghsalah', label: 'GitHub' },
              { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/aboobacker-salah-b51b08383/', label: 'LinkedIn' },
              { icon: <Mail size={20} />, href: 'mailto:aboobackersalah33@gmail.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                style={{
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
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
        </motion.div>
      </div>

      {/* Desktop Layout Override - Using CSS-in-JS media query approach */}
      <style>{`
        @media (min-width: 768px) {
          #home {
            padding: 0 40px !important;
            padding-top: 100px !important;
          }
          #home > div {
            flex-direction: row !important;
            gap: 60px !important;
            justify-content: space-between !important;
          }
          #home > div > div:first-child {
            order: 1 !important;
          }
          #home > div > div:last-child {
            text-align: left !important;
            max-width: none !important;
          }
          #home > div > div:last-child > div:nth-child(5),
          #home > div > div:last-child > div:nth-child(6) {
            justify-content: flex-start !important;
          }
        }
        @media (min-width: 1024px) {
          #home > div > div:first-child > div {
            width: clamp(260px, 32vw, 400px) !important;
            height: clamp(260px, 32vw, 400px) !important;
          }
          #home > div > div:first-child > div > div:first-child {
            inset: -12px !important;
          }
          #home > div > div:first-child > div > div:nth-child(2) {
            inset: -4px !important;
            padding: 3px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;