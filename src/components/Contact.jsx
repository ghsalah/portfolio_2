import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'aboobackersalah34@gmail.com',
      href: 'mailto:aboobackersalah34@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8590660040',
      href: 'tel:+918590660040'
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      value: '+91 8590660040',
      href: 'https://wa.me/918590660040'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Kozhikode, Kerala, India',
      href: 'https://maps.google.com/?q=Kozhikode,Kerala,India'
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Connect</span>
          <h2 className="section-title">START A <br /> CONVERSATION</h2>
        </div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="contact-info"
          >
            {contactInfo.map((info, i) => (
              <a 
                key={i} 
                href={info.href} 
                className="contact-card"
                target={info.label === 'Location' ? '_blank' : '_self'}
                rel={info.label === 'Location' ? 'noreferrer' : ''}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  <p className="contact-value">{info.value}</p>
                </div>
                <ArrowUpRight className="contact-arrow" size={20} />
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="contact-availability"
          >
            <p className="availability-text">
              I am currently open to new opportunities and the prospect of relocating.
              Whether it's for a MERN stack project or a collaborative engineering effort,
              I look forward to hearing from you.
            </p>
            <div className="contact-socials">
              <span className="social-label">Follow Me</span>
              <div className="social-group">
                <a href="https://github.com/ghsalah" target="_blank" rel="noreferrer" className="social-link">Github</a>
                <a href="https://linkedin.com/in/salah" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10rem;
          margin-top: 6rem;
          align-items: center;
        }

        .contact-info {
           display: flex;
           flex-direction: column;
           gap: 2rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding: 3rem;
          border: 1px solid var(--border);
          text-decoration: none;
          color: var(--text-primary);
          position: relative;
          transition: var(--transition-base);
          background: var(--bg-secondary);
        }

        .contact-card:hover {
          background: var(--bg-primary);
          border-color: var(--text-primary);
          padding-left: 4rem;
        }

        .contact-icon {
          color: var(--text-muted);
          transition: var(--transition-base);
        }

        .contact-card:hover .contact-icon {
          color: var(--text-primary);
        }

        .contact-label {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .contact-value {
          font-size: var(--fs-lg);
          margin: 0;
          letter-spacing: -0.02em;
          font-weight: 700;
        }

        .contact-arrow {
          position: absolute;
          right: 3rem;
          top: 3rem;
          opacity: 0;
          transition: var(--transition-base);
        }

        .contact-card:hover .contact-arrow {
          opacity: 1;
          transform: translate(5px, -5px);
        }

        .availability-text {
          font-size: var(--fs-xl);
          line-height: 1.4;
          color: var(--text-secondary);
          margin-bottom: 4rem;
          font-weight: 500;
        }

        .contact-socials {
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
        }

        .social-label {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--text-muted);
          font-weight: 800;
        }

        .social-group {
          display: flex;
          gap: 3rem;
        }

        .social-link {
          font-size: var(--fs-base);
          color: var(--text-primary);
          text-decoration: none;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border);
          transition: var(--transition-base);
          font-weight: 700;
        }

        .social-link:hover {
          border-bottom-color: var(--text-primary);
          padding-right: 1.5rem;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 2rem;
          }
          .contact-value {
            font-size: var(--fs-base);
          }
          .availability-text {
            font-size: var(--fs-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;