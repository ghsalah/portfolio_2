import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const greetings = [
  { text: "Hello",       lang: "English"    },
  { text: "നമസ്കാരം",   lang: "Malayalam"  },
  { text: "مرحبا",       lang: "Arabic"     },
  { text: "Hola",        lang: "Spanish"    },
  { text: "Bonjour",     lang: "French"     },
  { text: "Ciao",        lang: "Italian"    },
  { text: "नमस्ते",      lang: "Hindi"      },
  { text: "こんにちは",  lang: "Japanese"   },
  { text: "안녕하세요",  lang: "Korean"     },
  { text: "Merhaba",     lang: "Turkish"    },
  { text: "SALAH",       lang: "Ready"      },
];

const TOTAL = greetings.length;
const DELAYS = greetings.map((_, i) => i === 0 ? 500 : i < TOTAL - 1 ? 160 : 1400);

const CounterDigit = ({ value }) => (
  <div style={{ overflow: 'hidden', display: 'inline-block', lineHeight: 1 }}>
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'inline-block' }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  </div>
);

export default function Preloader({ onComplete }) {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const progress = Math.round((index / (TOTAL - 1)) * 100);

  const isDark = theme === 'dark';
  const bgColor = isDark ? '#0a0a0a' : '#fcfcfc';
  const textColor = isDark ? '#ffffff' : '#000000';
  const mutedColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
  const deepMuted = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const glowColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)';

  useEffect(() => {
    const t = setTimeout(() => {
      if (index < TOTAL - 1) {
        setIndex(i => i + 1);
      } else {
        setDone(true);
        setTimeout(() => onComplete?.(), 900);
      }
    }, DELAYS[index]);
    
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const hundreds = Math.floor(progress / 100);
  const tens = Math.floor((progress % 100) / 10);
  const ones = progress % 10;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed', inset: 0,
            background: bgColor,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(24px, 4vw, 48px)',
            overflow: 'hidden',
            fontFamily: '"Clash Display", "Cabinet Grotesk", "Neue Haas Grotesk", sans-serif',
          }}
        >
          {/* Subtle noise overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0, opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }} />

          {/* Radial glow */}
          <motion.div
            animate={{ opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80vw', height: '80vw',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 65%)`,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* TOP ROW */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <span style={{ color: mutedColor, fontSize: 'clamp(9px,1.2vw,11px)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Portfolio
              </span>
              <span style={{ color: textColor, fontSize: 'clamp(13px,1.6vw,16px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Salah
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: mutedColor, fontSize: 'clamp(9px,1.1vw,11px)', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'right' }}
            >
              <div>Est. 2024</div>
              <div style={{ marginTop: 2, color: deepMuted }}>MERN Architect</div>
            </motion.div>
          </div>

          {/* CENTER — GREETING */}
          <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(10px,2vh,20px)' }}>
            
            {/* Language label */}
            <AnimatePresence mode="wait">
              <motion.span
                key={`lang-${index}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                style={{ color: mutedColor, fontSize: 'clamp(9px,1.1vw,11px)', letterSpacing: '0.25em', textTransform: 'uppercase' }}
              >
                {greetings[index].lang}
              </motion.span>
            </AnimatePresence>

            {/* Main greeting word */}
            <div style={{ overflow: 'hidden', padding: '0.1em 0' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: '110%', rotateX: -40, opacity: 0 }}
                  animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                  exit={{ y: '-110%', rotateX: 40, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.215, 0.61, 0.355, 1] }}
                  style={{
                    color: textColor,
                    fontSize: 'clamp(3.5rem, 13vw, 8rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    transformOrigin: 'bottom center',
                    perspective: '800px',
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  {greetings[index].text}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated dot row */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              {greetings.slice(0, TOTAL - 1).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === index ? 24 : 4,
                    background: i < index ? mutedColor : i === index ? textColor : deepMuted,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: 4, borderRadius: 2 }}
                />
              ))}
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 1 }}>
            
            {/* Progress bar */}
            <div style={{ flex: 1, maxWidth: 'clamp(120px, 30vw, 240px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: mutedColor, fontSize: 'clamp(8px,1vw,10px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Loading</span>
              </div>
              <div style={{ width: '100%', height: 1, background: deepMuted, position: 'relative', overflow: 'hidden' }}>
                <motion.div
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{ position: 'absolute', inset: 0, background: textColor, transformOrigin: 'left', opacity: isDark ? 0.6 : 0.8 }}
                />
              </div>
            </div>

            {/* Counter */}
            <div style={{
              color: textColor,
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'baseline',
              gap: 1,
            }}>
              {hundreds > 0 && <CounterDigit value={hundreds} />}
              <CounterDigit value={tens} />
              <CounterDigit value={ones} />
              <span style={{ fontSize: '0.45em', color: mutedColor, marginLeft: 2 }}>%</span>
            </div>
          </div>

          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;800&display=swap');
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
