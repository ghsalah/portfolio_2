import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/banner/aboobacker_salah_1.jpg';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: reduceMotion ? 0 : 0.8, ease: 'easeOut'
      } 
    },
  };

  return (
    <section
      id="home"
  
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 24px 80px',
    position: 'relative',
    overflow: 'hidden',
  }}
    >
      <div className="hero-container">
        {/* Text Content */}
        <motion.div
          className="hero-text-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="status-badge">
              <span className="pulse-dot" />
              Available for new projects
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} style={{ lineHeight: '1.1' }}>
            <h1 className="hero-title">Aboobacker Salah</h1>
            <p className="hero-subtitle">
              Full-Stack Developer & Digital Craftsman
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="hero-description">
              I build beautiful, performant web applications using modern technologies. 
              Specializing in <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>React</span>, <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Node.js</span>, and <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>full-stack development</span>. 
              Passionate about clean code and outstanding user experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-cta">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Aboobacker_salah_Resume.pdf"
              download="Aboobacker_Salah_Resume.pdf"
              className="btn-primary"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="hero-socials">
            {[
              { icon: <Github size={24} />, href: 'https://github.com/ghsalah', label: 'GitHub' },
              { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/aboobacker-salah-b51b08383/', label: 'LinkedIn' },
              { icon: <Mail size={24} />, href: 'mailto:aboobackersalah33@gmail.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -4, backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="social-link"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="hero-image-wrapper"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-container">
            <img
              src={profileImg}
              alt="Aboobacker Salah"
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>

      {/* Styled JSX for robust layout and massive typography */}
      <style>{`
        .hero-container {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
          margin: 0 auto;
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-items: center;
          text-align: center;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: var(--bg-card-hover);
          border: 1px solid var(--border);
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-primary);
          animation: ripple 2s linear infinite;
        }

        .hero-title {
          font-size: clamp(3rem, 10vw, 5.5rem);
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.05;
          margin-bottom: 12px;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3.5vw, 1.8rem);
          font-weight: 400;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
        }

        .hero-description {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 600px;
          font-weight: 400;
        }

        .hero-cta {
          margin-top: 24px;
        }

        .hero-socials {
          display: flex;
          gap: 20px;
          margin-top: 16px;
          justify-content: center;
        }

        .social-link {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .social-link:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 20px var(--accent-dim);
          border-color: var(--text-primary);
        }

        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .hero-image-container {
          position: relative;
          width: clamp(240px, 50vw, 380px);
          aspect-ratio: 0.9;
          border-radius: 40px;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border);
          box-shadow: 0 24px 80px -20px var(--accent-dim);
          transition: box-shadow 0.6s ease;
        }
        
        .hero-image-container:hover {
          box-shadow: 0 30px 90px -10px var(--accent-dim);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(10%) contrast(1.05);
          transition: filter 0.6s ease;
        }
        
        .hero-image-container:hover .hero-image {
          filter: grayscale(0%) contrast(1);
        }

        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(100, 100, 100, 0.5); }
          70% { box-shadow: 0 0 0 6px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }

        @media (min-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
            gap: 100px;
          }

          .hero-text-content {
            align-items: flex-start;
            text-align: left;
          }

          .hero-description {
            max-width: 500px;
          }

          .hero-socials {
            justify-content: flex-start;
          }
          
          .hero-image-container {
            width: 100%;
            max-width: 380px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;