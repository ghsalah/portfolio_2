import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'TailwindCSS']
    },
    {
      title: 'Backend Ecosystem',
      skills: ['Node.js', 'Express.js', 'NestJS', 'PHP', 'Django', 'RESTful APIs']
    },
    {
      title: 'Databases & Infrastructure',
      skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman', 'VS Code']
    },
    {
      title: 'Soft Skills & Systems',
      skills: ['Problem Solving', 'Strategic Planning', 'Creative Thinking', 'Adaptability to Change']
    }
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Engineering Stack</span>
          <h2 className="section-title">CORE <br /> COMPETENCIES</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="skill-category"
            >
              <h3 className="skill-cat-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, j) => (
                  <div key={j} className="skill-item">
                    <span className="skill-bullet">•</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6rem;
          margin-top: 6rem;
        }

        .skill-category {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skill-cat-title {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .skills-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem 4rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
          transition: var(--transition-base);
        }

        .skill-item:hover {
          padding-left: 1rem;
          border-bottom-color: var(--text-primary);
        }

        .skill-bullet {
          color: var(--text-muted);
          font-size: 1.2rem;
        }

        .skill-name {
          font-size: var(--fs-base);
          font-weight: 700;
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .skills-grid {
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .skills-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;