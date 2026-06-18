/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Scissors, 
  Sparkles, 
  Crown, 
  Flower2, 
  Gem, 
  Clock, 
  Tag, 
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { Service, PageId } from '../types';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  selectedCategory: 'all' | 'hair' | 'skin' | 'makeup' | 'bridal' | 'spa';
  setSelectedCategory: (category: 'all' | 'hair' | 'skin' | 'makeup' | 'bridal' | 'spa') => void;
  setCurrentPage: (page: PageId) => void;
  setPreselectedService: (serviceName: string) => void;
}

export default function Services({ 
  selectedCategory, 
  setSelectedCategory, 
  setCurrentPage, 
  setPreselectedService 
}: ServicesProps) {

  const tabs: { id: 'all' | 'hair' | 'skin' | 'makeup' | 'bridal' | 'spa'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Services', icon: Sparkle },
    { id: 'hair', label: 'Hair Care', icon: Scissors },
    { id: 'skin', label: 'Skin Glow', icon: Flower2 },
    { id: 'makeup', label: 'Premium Makeup', icon: Sparkles },
    { id: 'bridal', label: 'Bridal Heritage', icon: Crown },
    { id: 'spa', label: 'Body Spa', icon: Gem },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const handleBookService = (service: Service) => {
    setPreselectedService(service.name);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 bg-brand-cream min-h-screen pb-24" id="services-page-root">
      
      {/* Services Hero Header */}
      <section className="bg-brand-blush py-16 border-b border-brand-gold/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/[0.01]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Our Menu</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">Signature Therapies & Rates</h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-3" />
          <p className="text-brand-charcoal/70 text-sm sm:text-base max-w-xl mx-auto">
            Explore our curated menu representing elite grooming and aesthetic makeovers, styled with absolute pricing transparency.
          </p>
        </div>
      </section>

      {/* FILTERING TABS CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3" id="service-filtering-tabs">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-lg shadow-brand-charcoal/10 scale-102'
                    : 'bg-white text-brand-charcoal hover:bg-brand-blush border-brand-gold/20 hover:border-brand-gold'
                }`}
                id={`tab-btn-${tab.id}`}
              >
                <IconComp size={14} className={isActive ? 'text-brand-gold' : 'text-brand-rose'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Description Line */}
        <div className="text-center font-serif text-brand-gold-dark text-sm sm:text-md italic tracking-wide">
          {selectedCategory === 'all' && "Displaying our complete portfolio of elite bridal beauty, advanced skin products, & hairstyles."}
          {selectedCategory === 'hair' && "Utilizing L'Oréal and Kérastase signature alchemies to rejuvenate, style, and restore hair fibers."}
          {selectedCategory === 'skin' && "Dermatologist-approved micro-cell facials and traditional saffron-infused complexion booster therapies."}
          {selectedCategory === 'makeup' && "HD Cinematic & Airbrush applications tailored with MAC and Estée Lauder to look stunning under photography."}
          {selectedCategory === 'bridal' && "Our famous premium Meera Sharma custom bridal preps, high-grade makeup, drapes, and jewel fittings."}
          {selectedCategory === 'spa' && "Acupressure aromatherapy to discharge modern city stress utilizing pure biological oils."}
        </div>
      </section>

      {/* SERVICES DISPLAY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-display-grid-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.06)" }}
              key={service.id}
              className="bg-white rounded-3xl border border-brand-gold/15 p-6 flex flex-col justify-between relative overflow-hidden shadow-sm"
              id={`service-card-${service.id}`}
            >
              {/* Popular Tag Ribbon */}
              {service.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal text-[9px] font-bold tracking-widest px-4 py-1.5 uppercase rounded-bl-xl flex items-center gap-1">
                    <Sparkles size={10} className="fill-brand-charcoal" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Service header containing name and category badge */}
              <div>
                <span className="text-[10px] text-brand-rose font-bold tracking-widest uppercase block mb-1">
                  {service.category}
                </span>
                
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal pr-12 leading-snug hover:text-brand-gold transition-colors">
                  {service.name}
                </h3>

                <div className="flex items-center gap-4 mt-3 mb-4">
                  <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-brand-charcoal/50">
                    <Clock size={11} className="text-brand-gold-dark" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-brand-charcoal/50">
                    <Tag size={11} className="text-brand-gold-dark" />
                    <span>Fixed Rate</span>
                  </div>
                </div>

                <p className="text-brand-charcoal/75 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Footer pricing and select CTAs */}
              <div className="border-t border-brand-blush/80 pt-4 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-brand-charcoal/40 uppercase tracking-wider block">Investment</span>
                  <span className="text-2xl font-bold font-serif text-brand-charcoal">
                    ₹{service.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={() => handleBookService(service)}
                  className="inline-flex items-center gap-1.5 bg-brand-blush hover:bg-brand-gold text-brand-gold-dark hover:text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 border border-brand-gold/20 cursor-pointer"
                  id={`book-service-btn-${service.id}`}
                >
                  <span>Book Now</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State Handler */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20 bg-white border border-dashed border-brand-gold/30 rounded-3xl" id="services-empty-state">
            <span className="text-brand-gold text-4xl block mb-4">✨</span>
            <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">Treatments coming soon</h3>
            <p className="text-brand-charcoal/60 text-sm max-w-sm mx-auto">
              Our advanced skin and hair laboratories in Civil Lines, Meerut are continuously testing safe biological therapies. Checking page again soon!
            </p>
          </div>
        )}
      </section>

      {/* CALL TO VALUE PRE-BRIDAL CONSULT */}
      <section className="bg-brand-champagne border-t border-brand-gold/15 mt-24 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-charcoal mb-4">
            "Planning for your magical wedding day?"
          </h2>
          <p className="text-brand-charcoal/70 text-sm max-w-xl mx-auto mb-8">
            Meet Meera in person to discuss customized, multi-day traditional pre-bridal schedules including custom haldi, sagan, and wedding HD makeovers. Standard consultations are 100% free!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                setPreselectedService("Signature Pre-Bridal Consultation");
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg cursor-pointer"
            >
              Book Free Bridal Consultation
            </button>
            <a
              href="https://wa.me/918887799911?text=Hi%20Glow%20and%20Grace!%20I%27d%20love%20to%20discuss%20pre-bridal%20custom%20packages%20for%20my%20wedding."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-brand-blush text-brand-charcoal border border-brand-gold/30 rounded-full font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors text-center inline-block"
            >
              Discuss Bridal Custom Rates
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
