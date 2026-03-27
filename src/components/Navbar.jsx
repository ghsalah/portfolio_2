// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import MoonToggle from './MoonToggle'; // Updated import

const RollLink = ({ item, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      style={{
        color: 'var(--text-secondary)',
        fontSize: '0.85rem',
        fontWeight: '500',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-block',
      }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: '-100%' }
        }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
      >
        {item}
      </motion.div>
      <motion.div
        variants={{
          rest: { y: '100%' },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          color: 'var(--text-primary)',
          textAlign: 'center'
        }}
      >
        {item}
      </motion.div>
    </motion.button>
  );
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Education', 'Skills', 'Contact'];

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    position: 'fixed',
    top: '20px',
    left: 'clamp(20px, 4%, 40px)',
    transformOrigin: 'left top',
    zIndex: 1000,
    width: 'fit-content',
    background: theme === 'dark'
      ? 'rgba(20,20,20,0.6)'
      : 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '18px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
    padding: scrolled ? '6px 12px' : '10px 18px',
    transition: 'all 0.3s ease',
  };

  return (
    <motion.nav 
      initial={{ y: -80, x: 0 }} 
      animate={{ y: 0, x: 0, scale: scrolled ? 0.95 : 1 }} 
      transition={{ duration: 0.3 }}
      style={navStyle}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <button 
          onClick={() => scrollTo('home')} 
          style={{ 
            fontWeight: '800', 
            fontSize: '1.1rem',
            background: 'none', 
            border: 'none', 
            color: 'var(--text-primary)', 
            cursor: 'pointer',
            marginRight: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          Salah
        </button>

        <div className="nav-desktop">
          {navItems.map(item => (
            <RollLink key={item} item={item} onClick={() => scrollTo(item)} />
          ))}
          {/* Moon/Sun Toggle */}
          <MoonToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="nav-mobile">
          <MoonToggle theme={theme} toggleTheme={toggleTheme} />
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: '60px',
              left: '0',
              transform: 'none',
              width: '200px',
              background: 'var(--nav-bg)',
              borderRadius: '12px',
              padding: '10px',
            }}
          >
            {navItems.map(item => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                style={{ display: 'block', width: '100%', padding: '10px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;