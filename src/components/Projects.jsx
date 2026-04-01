import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import img1 from '../assets/projects/imgProj_1.jpg';
import img2 from '../assets/projects/imgProj_2.jpg';
import img3 from '../assets/projects/imgProj_3.jpg';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'ECO-CONNECT',
      category: 'Sustainability / MERN Stack',
      year: '2024',
      description: 'A comprehensive platform for environmental tracking and community engagement. Built with high-performance Node.js architecture and a refined React interface.',
      image: img1,
      link: '#'
    },
    {
      title: 'MIND-EASE',
      category: 'Healthcare / React Native',
      year: '2024',
      description: 'Mental wellness ecosystem featuring real-time tracking and professional consultation. Focused on extreme privacy and a calming minimalist UX.',
      image: img2,
      link: '#'
    },
    {
      title: 'SWIFT-CART',
      category: 'E-commerce / Next.js',
      year: '2023',
      description: 'Enterprise-grade shopping platform with advanced state management and high-conversion payment flows. Optimized for speed and scalability.',
      image: img3,
      link: '#'
    }
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Selected Works</span>
          <h2 className="section-title">COMMERCIAL <br /> IMPACT</h2>
        </div>

        <motion.div 
          className="projects-list"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-item"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={project.link} className="project-link-wrapper">
                <div className="project-main-content">
                  <div className="project-title-area">
                    <span className="project-num">0{index + 1}</span>
                    <h3 className="project-name-text">{project.title}</h3>
                  </div>
                  <div className="project-metadata-row">
                    <span className="project-cat-text">{project.category}</span>
                    <span className="project-year-val">{project.year}</span>
                  </div>
                </div>
                
                <div className="project-arrow-icon">
                  <ArrowUpRight size={48} strokeWidth={1} />
                </div>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      className="project-hover-reveal"
                      initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 5 }}
                      animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 50, rotate: -5 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="reveal-inner">
                        <img src={project.image} alt={project.title} className="reveal-img" />
                        <div className="reveal-overlay">
                          <p className="reveal-desc">{project.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-bottom-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="archive-note">
            A curated archive of past experiments arriving soon.
          </p>
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
          position: relative;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          margin-top: 6rem;
        }

        .project-item {
          position: relative;
          border-bottom: 1px solid var(--border);
        }

        .project-link-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5rem 0;
          text-decoration: none;
          color: var(--text-primary);
          transition: var(--transition-base);
          position: relative;
        }

        .project-main-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          flex: 1;
        }

        .project-title-area {
          display: flex;
          align-items: baseline;
          gap: 2.5rem;
        }

        .project-num {
          font-family: monospace;
          font-size: var(--fs-xs);
          color: var(--text-muted);
          font-weight: 700;
        }

        .project-name-text {
          font-size: var(--fs-huge);
          margin: 0;
          letter-spacing: -0.06em;
          line-height: 0.8;
          transition: var(--transition-smooth);
          color: var(--text-primary);
        }

        .project-metadata-row {
          display: flex;
          gap: 5rem;
          padding-left: 5.5rem;
        }

        .project-cat-text {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .project-year-val {
          font-size: var(--fs-xs);
          font-family: monospace;
          color: var(--text-muted);
          letter-spacing: 0.15rem;
          font-weight: 700;
        }

        .project-arrow-icon {
          color: var(--text-muted);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover Reveal Styles */
        .project-item:hover .project-name-text {
          padding-left: 3rem;
          opacity: 0.3;
        }

        .project-item:hover .project-arrow-icon {
          color: var(--text-primary);
          transform: rotate(45deg) scale(1.5);
        }

        .project-hover-reveal {
          position: absolute;
          right: 15%;
          top: 50%;
          transform: translateY(-50%);
          width: 550px;
          height: 380px;
          z-index: 20;
          pointer-events: none;
          display: block;
        }

        .reveal-inner {
          width: 100%;
          height: 100%;
          border: 1px solid var(--border);
          overflow: hidden;
          background: #000;
          position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .reveal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }

        [data-theme='light'] .reveal-img {
          filter: grayscale(100%) brightness(0.9);
        }
        
        [data-theme='dark'] .reveal-img {
          filter: grayscale(100%) brightness(0.7);
        }

        .project-item:hover .reveal-img {
          transform: scale(1.1);
          filter: grayscale(0) brightness(1);
        }

        .reveal-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 3rem;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
        }

        .reveal-desc {
          font-size: var(--fs-sm);
          color: #fff;
          line-height: 1.6;
          max-width: 90%;
          margin: 0;
          letter-spacing: 0.02rem;
          font-weight: 500;
        }

        .projects-bottom-cta {
          margin-top: 12rem;
          text-align: center;
          padding-bottom: 6rem;
        }

        .archive-note {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.4rem;
          color: var(--text-muted);
          font-weight: 800;
        }

        @media (max-width: 1400px) {
          .project-hover-reveal {
            width: 450px;
            height: 300px;
            right: 5%;
          }
        }

        @media (max-width: 1024px) {
          .project-hover-reveal {
            display: none;
          }
          .project-metadata-row {
            padding-left: 0;
            gap: 2rem;
          }
          .project-name-text {
            font-size: var(--fs-3xl);
          }
          .project-item:hover .project-name-text {
            padding-left: 0;
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .project-link-wrapper {
            padding: 4rem 0;
          }
          .project-num {
            display: none;
          }
          .project-metadata-row {
            flex-direction: column;
            gap: 0.75rem;
          }
          .project-name-text {
            font-size: var(--fs-2xl);
            line-height: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;