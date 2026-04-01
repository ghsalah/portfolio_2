import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="nav-logo"
        >
          <a href="#home" className="logo-text">SALAH<span>.</span></a>
        </motion.div>

        <div className="nav-controls">
          {/* Desktop Nav */}
          <div className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
            </button>

            <button 
              className={`menu-toggle ${isOpen ? 'active' : ''}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mobile-menu"
          >
            <div className="mobile-menu-inner">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-num">0{navLinks.indexOf(link) + 1}</span>
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div variants={linkVariants} className="mobile-menu-footer">
                <p>© {new Date().getFullYear()} SALAH</p>
                <div className="mobile-socials">
                  <a href="https://github.com/ghsalah">Github</a>
                  <a href="https://linkedin.com/in/salah">LinkedIn</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 2.5rem 0;
          transition: var(--transition-base);
        }

        .navbar.scrolled {
          padding: 1.5rem 0;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-size: var(--fs-xl);
          font-weight: 800;
          text-decoration: none;
          color: var(--text-primary);
          letter-spacing: -0.05em;
        }

        .logo-text span {
          color: var(--text-muted);
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 3.5rem;
        }

        .nav-desktop {
          display: flex;
          gap: 3rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-weight: 700;
          transition: var(--transition-base);
          opacity: 0.5;
        }

        .nav-link:hover {
          opacity: 1;
          color: var(--text-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .theme-toggle, .menu-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-base);
        }

        .theme-toggle:hover {
          color: var(--text-muted);
          transform: rotate(15deg);
        }

        .menu-toggle {
          display: none;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-primary);
          z-index: 999;
          padding-top: 10rem;
        }

        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          padding: 0 5vw;
          gap: 2rem;
        }

        .mobile-nav-link {
          font-size: var(--fs-xl); /* Smaller font size as requested */
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 800;
          letter-spacing: -0.04em;
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          transition: var(--transition-base);
        }

        .mobile-nav-num {
          font-size: var(--fs-xs);
          font-family: monospace;
          color: var(--text-muted);
        }

        .mobile-nav-link:hover {
          padding-left: 1.5rem;
          color: var(--text-muted);
        }

        .mobile-menu-footer {
          margin-top: 4rem;
          padding-top: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .mobile-socials {
          display: flex;
          gap: 2.5rem;
        }

        .mobile-socials a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .nav-desktop {
            display: none;
          }
          .menu-toggle {
            display: block;
          }
          .nav-controls {
            gap: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;