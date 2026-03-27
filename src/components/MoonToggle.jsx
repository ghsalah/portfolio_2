// MoonToggle.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MoonToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  
  const containerStyle = {
    width: '60px',
    height: '32px',
    background: isDark ? '#000000' : '#e5e5e5',
    border: `2px solid ${isDark ? '#ffffff' : '#000000'}`,
    borderRadius: '50px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
  };

  const iconContainerStyle = {
    width: '24px',
    height: '24px',
    position: 'relative',
    transform: isDark ? 'translateX(28px)' : 'translateX(0)',
    transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  };

  const starStyle = {
    position: 'absolute',
    background: '#ffffff',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  };

  return (
    <div onClick={toggleTheme} style={containerStyle} aria-label="Toggle theme">
      <div style={iconContainerStyle}>
        <AnimatePresence mode="wait">
          {isDark ? (
            // Moon Icon
            <motion.svg
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ position: 'absolute' }}
            >
              {/* Moon body */}
              <motion.path
                d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                fill="#ffffff"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Stars around moon */}
              <motion.circle
                cx="18" cy="6" r="1" fill="#ffffff"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.circle
                cx="20" cy="10" r="0.5" fill="#ffffff"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.svg>
          ) : (
            // Sun Icon
            <motion.svg
              key="sun"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ position: 'absolute' }}
            >
              {/* Sun center */}
              <motion.circle
                cx="12"
                cy="12"
                r="5"
                fill="#000000"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Sun rays */}
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="12"
                  y1="1"
                  x2="12"
                  y2="3"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ 
                    opacity: 1, 
                    pathLength: 1,
                    rotate: i * 45 
                  }}
                  transition={{ delay: i * 0.05 }}
                  style={{ 
                    transformOrigin: '12px 12px',
                    transform: `rotate(${i * 45}deg)`
                  }}
                />
              ))}
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
      
      {/* Background stars for dark mode */}
      {isDark && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            style={{ ...starStyle, width: '2px', height: '2px', top: '6px', left: '8px' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.1 }}
            style={{ ...starStyle, width: '1px', height: '1px', top: '20px', left: '12px' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{ ...starStyle, width: '1.5px', height: '1.5px', top: '10px', left: '20px' }}
          />
        </>
      )}
    </div>
  );
};

export default MoonToggle;