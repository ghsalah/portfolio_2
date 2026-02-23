import React, { memo } from 'react';
import { motion } from 'framer-motion';
import TechBadge from './ui/TechBadge';

const ProjectCard = memo(({
  project,
  isActive,
  onClick,
  index,
  currentIndex,
}) => {
  const getTransform = () => {
    const diff = index - currentIndex;
    if (diff === 0) return { x: 0, scale: 1, zIndex: 30 };
    if (diff > 0) return { x: 200, scale: 0.75, zIndex: 10 };
    return { x: -200, scale: 0.75, zIndex: 10 };
  };

  const transform = getTransform();

  return (
    <motion.div
      animate={{
        x: transform.x,
        scale: transform.scale,
        opacity: isActive ? 1 : 0.4,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      whileHover={isActive ? { scale: 1.05 } : {}}
      onClick={onClick}
      style={{
        position: 'absolute',
        cursor: 'pointer',
        zIndex: transform.zIndex,
      }}
    >
      <div style={{
        width: window.innerWidth < 640 ? '224px' : window.innerWidth < 768 ? '256px' : '288px',
        height: window.innerWidth < 640 ? '288px' : window.innerWidth < 768 ? '320px' : '384px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#18181b',
      }}>
        <div style={{
          height: window.innerWidth < 640 ? '112px' : '128px',
          background: `linear-gradient(135deg, ${project.color.split(' ')[0].replace('from-', '')} 0%, ${project.color.split(' ')[1].replace('to-', '')} 100%)`,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.2)',
          }} />
          <h3 style={{
            position: 'absolute',
            bottom: window.innerWidth < 640 ? '12px' : '16px',
            left: window.innerWidth < 640 ? '12px' : '16px',
            fontSize: window.innerWidth < 640 ? '1.125rem' : '1.25rem',
            fontWeight: '700',
            color: '#fff',
          }}>
            {project.title}
          </h3>
        </div>

        <div style={{ padding: window.innerWidth < 640 ? '12px' : '16px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            marginBottom: '8px',
          }}>
            {project.tech.slice(0, 3).map((t) => (
              <TechBadge key={t} tech={t} variant="small" />
            ))}
            {project.tech.length > 3 && (
              <TechBadge tech={`+${project.tech.length - 3}`} variant="small" />
            )}
          </div>
          <p style={{
            color: '#9ca3af',
            fontSize: window.innerWidth < 640 ? '0.75rem' : '0.875rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectCard;