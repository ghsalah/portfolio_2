import React from 'react';

const SectionTitle = ({ title, highlight, subtitle, className = '' }) => {
  return (
    <div className={className}>
      <h2 style={{
        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
        fontWeight: '700',
        marginBottom: '15px',
      }}>
        {title.split(highlight).map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < title.split(highlight).length - 1 && (
              <span style={{ color: '#00ff88' }}>{highlight}</span>
            )}
          </React.Fragment>
        ))}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '1.2rem',
          color: '#b0b0b0',
          marginTop: '10px',
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;