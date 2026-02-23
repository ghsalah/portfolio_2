import React from 'react';

const TechBadge = ({ tech, variant = 'small' }) => {
  const sizes = {
    small: { padding: '4px 10px', fontSize: '0.75rem' },
    large: { padding: '7px 15px', fontSize: '0.875rem' },
  };

  return (
    <span style={{
      ...sizes[variant],
      background: 'var(--accent-dim)',
      border: '1px solid var(--accent-border)',
      color: 'var(--accent)',
      fontWeight: '500',
      borderRadius: '20px',
      display: 'inline-block',
    }}>
      {tech}
    </span>
  );
};

export default TechBadge;