/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Star, 
  Send,
  Instagram,
  Facebook
} from 'lucide-react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

import { PageId } from './types';
import { SALON_INFO } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hair' | 'skin' | 'makeup' | 'bridal' | 'spa'>('all');
  const [preselectedService, setPreselectedService] = useState<string>('');
  
  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);

  // Quick navigation router action
  const handlePageChange = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream selection:bg-brand-gold-light" id="luxury-app-root">
      
      {/* 1. TOP DISSOLVE-SCROLL NAVIGATION */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 2. MAIN ACTIVE STAGE ANIMATED PANEL */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="flex-grow"
          id="main-scrolling-viewport"
        >
          {currentPage === 'home' && (
            <Home 
              setCurrentPage={setCurrentPage} 
              setSelectedCategory={setSelectedCategory} 
            />
          )}
          
          {currentPage === 'about' && (
            <About />
          )}
          
          {currentPage === 'services' && (
            <Services 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
              setCurrentPage={setCurrentPage} 
              setPreselectedService={setPreselectedService} 
            />
          )}
          
          {currentPage === 'gallery' && (
            <Gallery />
          )}
          
          {currentPage === 'contact' && (
            <Contact 
              preselectedService={preselectedService} 
              setPreselectedService={setPreselectedService} 
            />
          )}
        </motion.main>
      </AnimatePresence>

      {/* 3. PREMIUM DESIGNER FOOTER */}
      <footer className="bg-brand-charcoal text-white pt-20 pb-8 border-t border-brand-gold/15 relative z-10" id="global-application-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer layout rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* Column 1: Brand & Description (4 units) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-brand-gold text-brand-charcoal p-1.5 rounded-full">
                  <Sparkles size={16} className="text-white fill-brand-cream" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">Glow & Grace</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-brand-gold -mt-1 font-semibold">Beauty Studio • Civil Lines</p>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
                Meerut’s premium signature parlor specializing in customizable HD bridal cosmetics, French hair highlighting therapies, and clinical skin restoration treatments. Experience world-class hospitality right opposite the Commissioner's Residence.
              </p>
              
              {/* Google Reviews rating badge in footer */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-brand-gold/20 rounded-2xl p-3">
                <div className="text-brand-gold text-sm font-bold">4.9 ★</div>
                <div className="h-6 w-[1px] bg-white/15" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white">Google Certified</div>
                  <div className="text-[9px] text-white/50">340+ Verified Reviews</div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links (2 units) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-md font-bold text-brand-gold tracking-wide uppercase">Quick Nav</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <button 
                    onClick={() => handlePageChange('home')}
                    className="text-white/60 hover:text-brand-gold flex items-center gap-1 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    <ChevronRight size={12} className="text-brand-gold" />
                    <span>Home & Ratings</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('about')}
                    className="text-white/60 hover:text-brand-gold flex items-center gap-1 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    <ChevronRight size={12} className="text-brand-gold" />
                    <span>About Founder</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('services')}
                    className="text-white/60 hover:text-brand-gold flex items-center gap-1 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    <ChevronRight size={12} className="text-brand-gold" />
                    <span>Treatments & Pricing</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('gallery')}
                    className="text-white/60 hover:text-brand-gold flex items-center gap-1 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    <ChevronRight size={12} className="text-brand-gold" />
                    <span>Styled Portfolio</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('contact')}
                    className="text-white/60 hover:text-brand-gold flex items-center gap-1 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    <ChevronRight size={12} className="text-brand-gold" />
                    <span>Book Appointment</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Directions (3 units) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-md font-bold text-brand-gold tracking-wide uppercase">Find Us</h4>
              <div className="space-y-4 text-xs sm:text-sm text-white/70 font-light">
                <div className="flex gap-2.5 items-start">
                  <MapPin size={16} className="text-brand-rose shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-white/60">
                    {SALON_INFO.address}
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Phone size={16} className="text-brand-rose shrink-0" />
                  <a href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors text-white/60">
                    {SALON_INFO.phone}
                  </a>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Mail size={16} className="text-brand-rose shrink-0" />
                  <a href={`mailto:${SALON_INFO.email}`} className="hover:text-brand-gold transition-colors text-white/60">
                    {SALON_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Newsletter Subscription (3 units) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-md font-bold text-brand-gold tracking-wide uppercase">VIP Updates</h4>
              <p className="text-white/60 text-xs leading-relaxed font-light">
                Subscribe to receive seasonal styling advice, festival discounts, and special bridal packages.
              </p>
              
              <AnimatePresence mode="wait">
                {!isNewsletterSubscribed ? (
                  <motion.form 
                    key="newsletter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleNewsletterSubmit}
                    className="flex gap-1 bg-white/5 border border-white/10 rounded-xl p-1.5 focus-within:border-brand-gold/50 transition-colors"
                  >
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="bg-transparent text-white border-0 w-full text-xs font-medium py-2 px-3 focus:ring-0 placeholder:text-white/30 focus:outline-none"
                      required
                    />
                    <button 
                      type="submit"
                      className="bg-brand-gold hover:bg-brand-gold-dark text-black p-2 rounded-lg transition-colors cursor-pointer"
                      aria-label="Subscribe"
                    >
                      <Send size={14} className="text-white fill-white" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="subscribed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 border border-brand-gold/30 rounded-xl p-3 text-xs text-brand-gold font-medium text-center"
                  >
                    ✨ Subscribed! Check your inbox soon.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social Channels Row */}
              <div className="pt-4 flex gap-4">
                <a 
                  href={SALON_INFO.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 hover:bg-brand-gold hover:text-black p-2.5 rounded-full transition-colors text-white"
                  aria-label="Visit Instagram Profile"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href={SALON_INFO.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 hover:bg-brand-gold hover:text-black p-2.5 rounded-full transition-colors text-white"
                  aria-label="Visit Facebook Page"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright and Dev signatures */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 font-mono gap-4">
            <div>
              © 2026 Glow & Grace Beauty Studio. Civil Lines, Meerut, UP. All Rights Reserved.
            </div>
            
            {/* Signature of the web developer to show credibility to standard owners */}
            <div className="text-center sm:text-right border border-white/5 hover:border-brand-gold/15 py-1 px-3.5 rounded-full bg-white/[0.01]">
              Crafted with Excellence by <span className="text-brand-gold-light font-bold">Faiz Shoban Web Artistry</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 4. DYNAMIC FLOATING WHATSAPP CHAT BULLET */}
      <WhatsAppButton />

    </div>
  );
}
