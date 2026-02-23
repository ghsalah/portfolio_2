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
        padding: '0 40px',
        paddingTop: '100px',
        maxWidth: '100%',
        margin: 0,
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,232,122,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '0%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,196,255,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        flexWrap: 'wrap',
      }}>
        {/* Left – Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ flex: 1, minWidth: '280px' }}
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
              padding: '6px 16px',
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-border)',
              borderRadius: '20px',
              marginBottom: '28px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'none' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '600' }}>
              Available for new opportunities
            </span>
          </motion.div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '6px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
          }}>
            Hi, I'm
          </h1>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #00e87a, #00c4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.03em',
          }}>
            Aboobacker Salah
          </h1>

          <p style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
          }}>
            Full-Stack Developer · MERN Stack · React & Node.js
          </p>

          <p style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '40px',
            maxWidth: '520px',
          }}>
            Building scalable web applications with modern technologies.
            Passionate about clean code, great user experiences, and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Aboobacker_salah_Resume.pdf"
              download="Aboobacker_Salah_Resume.pdf"
              className="btn-primary"
            >
              <Download size={18} />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:aboobackersalah33@gmail.com"
              className="btn-outline"
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
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
                aria-label={label}
                style={{
                  width: '42px',
                  height: '42px',
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
        </motion.div>

        {/* Right – Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: 'clamp(260px, 32vw, 400px)',
            height: 'clamp(260px, 32vw, 400px)',
          }}>
            {/* Outer ring */}
            <div style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00e87a, #00c4ff)',
              opacity: '0.3',
              filter: 'blur(8px)',
            }} />
            {/* Inner ring */}
            <div style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00e87a 0%, #00c4ff 100%)',
              padding: '3px',
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
      </div>
    </section>
  );
};

export default Hero;