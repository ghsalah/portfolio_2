import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C'],
    },
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      skills: ['React', 'Next.js', 'Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Database',
      icon: <Database size={24} />,
      skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Tools & Practices',
      icon: <Wrench size={24} />,
      skills: ['Git', 'REST APIs', 'Agile', 'Problem Solving', 'React Query', 'Sequelize'],
    },
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-primary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Technical <span className="highlight">Skills</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
      }}>
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card"
            style={{ padding: '28px' }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'var(--accent-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              marginBottom: '18px',
            }}>
              {cat.icon}
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.01em' }}>
              {cat.title}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-pill">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;