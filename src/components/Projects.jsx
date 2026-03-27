import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// ── Project data with real images from assets ──────────────────────────────
import imgProj_1 from '../assets/projects/imgProj_1.jpg';
import imgProj_2 from '../assets/projects/imgProj_2.jpg';
import imgProj_3 from '../assets/projects/imgProj_3.jpg';

const projects = [
  {
    id: 1,
    title: 'Hospital Management System',
    description:
      'Advanced hospital management platform with patient records, duty scheduling, department management, HR module, and real-time appointment tracking. Built using MERN stack with secure role-based authentication and scalable architecture.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: imgProj_1,
  },
  {
    id: 2,
    title: 'Talent Trove – Freelance Marketplace',
    description:
      'Full-featured freelance job marketplace where users can post jobs, bid on projects, manage profiles, and track contracts. Includes secure authentication, admin dashboard, and real-time job updates.',
    tech: ['React', 'Node.js', 'Firebase', 'MongoDB', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: imgProj_2,
  },
  {
    id: 3,
    title: 'Talkify – Real-Time Chat Platform',
    description:
      'Modern real-time chat application with custom rooms, private messaging, media sharing, and responsive UI. Designed with smooth animations and scalable backend architecture.',
    tech: ['React', 'Node.js', 'Socket.io', 'Firebase', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: imgProj_3,
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + projects.length) % projects.length);
  const next = () => setCurrent(i => (i + 1) % projects.length);
  const sel = projects[current];

  return (
    <section id="projects" style={{ background: 'var(--bg-primary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
      </motion.div>

      <div className="projects-grid">
        {/* LEFT – Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: '85%', minWidth: 0 }}
        >
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            {/* Main card */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              aspectRatio: '16/9',
              maxHeight: '450px',
              position: 'relative',
              width: '100%',
            }}>
              <img
                src={sel.image}
                alt={sel.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)',
              }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '30px',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  backdropFilter: 'blur(10px)',
                }}>
                  Project {current + 1} of {projects.length}
                </span>
                <h3 style={{ color: '#fff', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{sel.title}</h3>
              </div>

              {/* Nav buttons */}
              <button
                onClick={prev}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '16px',
                  transform: 'translateY(-50%)',
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '16px',
                  transform: 'translateY(-50%)',
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: '8px',
                    width: i === current ? '36px' : '8px',
                    background: i === current ? 'var(--text-primary)' : 'var(--border)',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail row */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setCurrent(i)}
                style={{
                  flex: 1,
                  aspectRatio: '16/9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: i === current ? '3px solid var(--text-primary)' : '1px solid var(--border)',
                  cursor: 'pointer',
                  padding: 0,
                  background: 'var(--bg-card)',
                  transition: 'all 0.2s',
                  opacity: i === current ? 1 : 0.6,
                }}
              >
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – Project Details */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <div>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'var(--bg-card-hover)',
              border: '1px solid var(--border)',
              borderRadius: '30px',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '16px',
            }}>
              Featured Project
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {sel.title}
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', fontWeight: '400' }}>
              {sel.description}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Technologies
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {sel.tech.map(t => (
                <span
                  key={t}
                  style={{
                    padding: '8px 18px',
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
            <a
              href={sel.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={18} />
              Visit Live Site
            </a>
            <a
              href={sel.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={18} />
              View Source
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;