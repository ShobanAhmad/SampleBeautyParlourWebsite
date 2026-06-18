/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { SALON_INFO } from '../data';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const navigateTo = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-md border-b border-brand-gold/20 py-3'
          : 'bg-gradient-to-b from-black/50 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          id="navbar-logo-button"
        >
          <div className="bg-brand-gold text-brand-charcoal p-1.5 rounded-full shadow-inner group-hover:rotate-12 transition-transform duration-300">
            <Sparkles size={18} className="text-white fill-brand-cream" />
          </div>
          <div>
            <span
              className={`block font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-brand-charcoal' : 'text-white'
              }`}
            >
              Glow & Grace
            </span>
            <span className="block text-[9px] uppercase tracking-[0.25em] -mt-1 font-semibold text-brand-gold">
              Beauty Studio • Meerut
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-gold cursor-pointer focus:outline-none ${
                currentPage === link.id
                  ? 'text-brand-gold font-semibold'
                  : isScrolled
                  ? 'text-brand-charcoal'
                  : 'text-white/90'
              }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Quick CTA and Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
            className={`hidden md:flex items-center gap-1.5 text-xs font-semibold py-2 px-3 border rounded-full transition-all duration-300 ${
              isScrolled
                ? 'border-brand-gold/30 text-brand-charcoal hover:bg-brand-gold hover:text-white'
                : 'border-white/30 text-white hover:bg-white hover:text-brand-charcoal'
            }`}
          >
            <PhoneCall size={12} />
            <span>Call {SALON_INFO.phone}</span>
          </a>

          <button
            onClick={() => navigateTo('contact')}
            className="hidden sm:inline-block bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-full shadow-lg transition-transform hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
            id="navbar-book-now-cta"
          >
            Book Appointment
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-1.5 rounded-lg border transition-colors focus:outline-none cursor-pointer ${
              isScrolled
                ? 'border-brand-gold/30 text-brand-charcoal hover:bg-brand-blush'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
            id="navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide-in */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-cream border-b border-brand-gold/20 overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`text-left py-3 px-4 rounded-xl text-base font-medium tracking-wide transition-all ${
                    currentPage === link.id
                      ? 'bg-brand-blush text-brand-gold-dark font-bold border-l-4 border-brand-gold'
                      : 'text-brand-charcoal hover:bg-brand-blush/55'
                  }`}
                  id={`nav-link-mobile-${link.id}`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 px-4 flex flex-col gap-3">
                <a
                  href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold py-3 px-4 bg-brand-blush rounded-xl text-brand-charcoal border border-brand-gold/10"
                >
                  <PhoneCall size={16} className="text-brand-gold-dark" />
                  <span>Call {SALON_INFO.phone}</span>
                </a>
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full text-center bg-brand-gold hover:bg-brand-gold-dark text-white text-sm font-bold uppercase tracking-wider py-3 px-4 rounded-xl shadow-md transition-colors"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
