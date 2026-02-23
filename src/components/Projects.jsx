import React, { useState, useEffect } from 'react';
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
    accent: '#00e87a',
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
    accent: '#00c4ff',
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
    accent: '#a78bfa',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const prev = () => setCurrent(i => (i - 1 + projects.length) % projects.length);
  const next = () => setCurrent(i => (i + 1) % projects.length);
  const sel = projects[current];

  const isMobile = windowWidth < 768;

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

      <div style={{
        display: 'grid',
        gridTemplateColumns: windowWidth >= 1024 ? '1fr 1fr' : '1fr',
        gap: '48px',
        alignItems: 'start',
      }}>
        {/* LEFT – Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            {/* Main card */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              aspectRatio: '16/10',
              position: 'relative',
            }}>
              <img
                src={sel.image}
                alt={sel.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)',
              }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '3px 12px',
                  background: sel.accent + '22',
                  border: '1px solid ' + sel.accent + '55',
                  borderRadius: '20px',
                  color: sel.accent,
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}>
                  Project {current + 1} of {projects.length}
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700' }}>{sel.title}</h3>
              </div>

              {/* Nav buttons */}
              <button
                onClick={prev}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '12px',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = sel.accent + 'cc'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '12px',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = sel.accent + 'cc'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicators */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: '6px',
                    width: i === current ? '28px' : '6px',
                    background: i === current ? sel.accent : 'var(--border)',
                    borderRadius: '3px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail row */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setCurrent(i)}
                style={{
                  flex: 1,
                  aspectRatio: '16/10',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: i === current ? `2px solid ${sel.accent}` : '2px solid var(--border)',
                  cursor: 'pointer',
                  padding: 0,
                  background: 'none',
                  transition: 'all 0.2s',
                  opacity: i === current ? 1 : 0.5,
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
          style={{ paddingTop: windowWidth >= 1024 ? '0' : '0' }}
        >
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 14px',
              background: sel.accent + '18',
              border: '1px solid ' + sel.accent + '44',
              borderRadius: '20px',
              color: sel.accent,
              fontSize: '0.8rem',
              fontWeight: '600',
              marginBottom: '14px',
            }}>
              Featured Project
            </span>
            <h3 style={{ fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.2 }}>
              {sel.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
              {sel.description}
            </p>
          </div>

          {/* Tech stack */}
          <div style={{ marginBottom: '28px' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {sel.tech.map(t => (
                <span
                  key={t}
                  style={{
                    padding: '6px 14px',
                    background: sel.accent + '18',
                    border: '1px solid ' + sel.accent + '33',
                    color: sel.accent,
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={sel.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: sel.accent,
                color: '#000',
                fontWeight: '700',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={sel.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                fontWeight: '600',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = sel.accent;
                e.currentTarget.style.color = sel.accent;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;