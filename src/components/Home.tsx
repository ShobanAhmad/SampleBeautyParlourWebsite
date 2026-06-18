/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Crown, 
  Scissors, 
  Flower2, 
  Heart, 
  Compass, 
  Clock, 
  CheckCircle,
  Gem,
  Instagram
} from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO, TESTIMONIALS, INSTAGRAM_TEASER } from '../data';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
  setSelectedCategory: (category: 'all' | 'hair' | 'skin' | 'makeup' | 'bridal' | 'spa') => void;
}

export default function Home({ setCurrentPage, setSelectedCategory }: HomeProps) {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  const categories = [
    { id: 'hair', label: 'Hair Styling', icon: Scissors, count: "4 Signature Treatments", desc: "Couture Cuts, Balayage, Botox", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400" },
    { id: 'skin', label: 'Advanced Skin', icon: Flower2, count: "3 Custom Facials", desc: "Hydra-Glow facials & Organic detans", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400" },
    { id: 'makeup', label: 'HD Makeup', icon: Sparkles, count: "2 Premium Classes", desc: "Celebrity HD Glam & Airbrush", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400" },
    { id: 'bridal', label: 'Bridal Couture', icon: Crown, count: "2 Heritage Packages", desc: "Meera\'s Premium Signature Royal styling", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400" },
    { id: 'spa', label: 'Organic Spa', icon: Gem, count: "2 Ayurvedic Rituals", desc: "Hot stones & Moroccan oils relaxation", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400" },
  ];

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId as any);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextReview = () => {
    setCurrentReviewIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setCurrentReviewIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentReview = TESTIMONIALS[currentReviewIdx];

  return (
    <div className="pt-0 overflow-hidden" id="homepage-root">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-black" id="home-hero-section">
        {/* Immersive Background Salon Interior */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600" 
            alt="Glow and Grace Premium Salon Interior" 
            className="w-full h-full object-cover object-center opacity-45"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Google review star rating badge */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-brand-cream/15 backdrop-blur-md border border-brand-gold/30 rounded-full py-1.5 px-4 mb-6"
            >
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-brand-gold" />
                ))}
              </div>
              <span className="text-white text-xs font-semibold tracking-wide font-mono">
                {SALON_INFO.stats[3].label} on Google Review
              </span>
            </motion.div>

            {/* Slogans and Headlines */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Where Elegance Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-rose to-brand-gold-light mt-1 inline-block">
                True Master Artistry
              </span>
            </h1>
            
            <p className="text-white/85 text-base sm:text-xl font-light tracking-wide max-w-xl mb-10 leading-relaxed">
              Indulge in couture bridal transformations, world-class hair alchemies, and botanical therapies custom-tailored for Meerut’s elite, directly in Civil Lines.
            </p>

            <p className="text-brand-gold text-sm sm:text-md font-serif font-semibold tracking-widest italic mb-8 uppercase">
              "Apna Premium Glow-Up Shuru Karein"
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl hover:shadow-brand-gold/30 transition-all cursor-pointer text-center"
              >
                Book Appointment Now
              </button>
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-white/10 text-white border border-white/50 hover:border-brand-gold font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all cursor-pointer text-center"
              >
                Explore Services & Rates
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated indicators in corner */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-1 opacity-70"
          >
            <span className="text-white text-[10px] tracking-widest uppercase">Scroll Down</span>
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
          </motion.div>
        </div>
      </section>


      {/* 2. WHY CHOOSE US (TRUST STRIP) */}
      <section className="bg-brand-blush py-16 border-y border-brand-gold/10 relative" id="home-trust-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex gap-4 items-start p-2">
              <div className="bg-brand-gold/10 p-3 rounded-2xl text-brand-gold-dark shrink-0">
                <Crown size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold tracking-tight text-brand-charcoal mb-1">Meera Sharma Mastery</h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">Direct guidance and cosmetic artistry supervised personally by Meerut’s elite L'Oréal salon founder.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-2">
              <div className="bg-brand-gold/10 p-3 rounded-2xl text-brand-gold-dark shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold tracking-tight text-brand-charcoal mb-1">Premium Global Products</h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">Exclusively authentic skincare and styling with premium brands: MAC, Estée Lauder, Kérastase, and O3+.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-2">
              <div className="bg-brand-gold/10 p-3 rounded-2xl text-brand-gold-dark shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold tracking-tight text-brand-charcoal mb-1">Pristine Hygiene Standard</h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">Autoclaved metal tools, single-use premium disposables, and personal sanitized suites for private bridal makeovers.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-2">
              <div className="bg-brand-gold/10 p-3 rounded-2xl text-brand-gold-dark shrink-0">
                <Compass size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold tracking-tight text-brand-charcoal mb-1">Bespoke Consultations</h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">Complimentary hair texture analysis and dermatological evaluation before selecting any cosmetic service.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. CORE SERVICE CATEGORIES ROW */}
      <section className="py-24 bg-brand-cream relative" id="home-categories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Our Spa Specialties</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal mb-4">Choose Your Signature Look</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed">
              Explore our expertly cataloged luxury therapies. Click on any standard division to view our customized price lists and make an immediate reservation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.15)" }}
                  className="bg-white rounded-3xl border border-brand-gold/10 overflow-hidden cursor-pointer group flex flex-col justify-between"
                  onClick={() => handleCategoryClick(cat.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src={cat.img} 
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent opacity-60" />
                    <span className="absolute bottom-4 left-4 bg-brand-cream/90 backdrop-blur-sm text-brand-gold-dark text-[10px] font-bold py-1 px-3.5 rounded-full border border-brand-gold/20">
                      {cat.count}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="text-brand-gold group-hover:scale-110 transition-transform duration-300 w-fit mb-3">
                        <IconComp size={22} className="stroke-brand-gold-dark fill-brand-blush" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-gold-dark transition-colors duration-300">
                        {cat.label}
                      </h3>
                      <p className="text-brand-charcoal/60 text-xs leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1 border-t border-brand-blush pt-3">
                      <span>View pricing</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 4. KEY METRICS COUNT UP STRIP */}
      <section className="bg-brand-charcoal py-20 text-white relative overflow-hidden" id="home-metrics-strip">
        <div className="absolute inset-0 bg-brand-gold/[0.02]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            
            {SALON_INFO.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                id={`stat-box-${i}`}
              >
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-gold mb-2 block">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-white/50 mb-1">
                  {stat.suffix}
                </div>
                <div className="text-sm sm:text-md text-white/80 font-serif">
                  {stat.label}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* 5. GUEST TESTIMONIALS (ROTATING CAROUSEL) */}
      <section className="py-24 bg-brand-champagne border-y border-brand-gold/10 relative" id="home-testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Our Guest Experiences</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mb-4">Lovingly Reviewed by Locals</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
            <p className="text-brand-charcoal/70 text-sm">
              We understand that choosing a designer salon can be challenging. Read actual testimonials from verified Meerut residents about Meera Sharma's service quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-8 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-gold/10 shadow-xl relative"
                id="testimonial-carousel-container"
              >
                {/* Gold quotation marks */}
                <span className="absolute top-6 left-6 text-brand-gold/10 font-serif text-8xl leading-none select-none">“</span>

                <div className="flex flex-col items-center text-center">
                  {/* Rating Stars */}
                  <div className="flex text-brand-gold mb-6 mt-2">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-brand-gold" />
                    ))}
                  </div>

                  {/* Body quote */}
                  <blockquote className="text-brand-charcoal text-base sm:text-lg lg:text-xl font-light italic leading-relaxed mb-8 max-w-2xl">
                    "{currentReview.text}"
                  </blockquote>

                  {/* Divider line */}
                  <div className="w-10 h-[1px] bg-brand-gold/30 mb-6" />

                  {/* Author */}
                  <div className="font-serif text-md sm:text-lg font-bold text-brand-charcoal">
                    {currentReview.name}
                  </div>
                  <div className="text-xs text-brand-gold-dark uppercase tracking-wider font-semibold mt-1">
                    {currentReview.location}
                  </div>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 bg-brand-blush text-[11px] font-medium py-1 px-4 rounded-full text-brand-rose border border-brand-rose/10">
                    <CheckCircle size={10} />
                    Verified Treatment: <span className="font-semibold">{currentReview.treatment}</span> • {currentReview.date}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation buttons */}
            <div className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 z-10">
              <button
                onClick={prevReview}
                className="p-3 bg-white text-brand-gold-dark hover:bg-brand-gold hover:text-white rounded-full border border-brand-gold/20 shadow-lg transition-colors cursor-pointer"
                id="testimonial-carousel-prev"
                aria-label="Previous Review"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
            <div className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 z-10">
              <button
                onClick={nextReview}
                className="p-3 bg-white text-brand-gold-dark hover:bg-brand-gold hover:text-white rounded-full border border-brand-gold/20 shadow-lg transition-colors cursor-pointer"
                id="testimonial-carousel-next"
                aria-label="Next Review"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((rev, i) => (
                <button
                  key={rev.id}
                  onClick={() => setCurrentReviewIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentReviewIdx === i ? 'bg-brand-gold w-6' : 'bg-brand-gold/30 hover:bg-brand-gold/60'
                  }`}
                  aria-label={`Go to check testimonial index ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* 6. INSTAGRAM PORTFOLIO TEASER GRID */}
      <section className="py-24 bg-brand-cream relative" id="home-instagram-teaser">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <div className="text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-brand-gold text-xs uppercase tracking-widest font-bold mb-2">
                <Instagram size={14} />
                <span>@GlowAndGraceMeerut</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">
                Style Book Sneak Peak
              </h2>
              <p className="text-brand-charcoal/70 text-sm mt-3">
                 Follow our journey on social media! We upload real transformations done inside our salon on clean clients, capturing raw, unedited styling confidence.
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white hover:bg-brand-gold hover:text-white text-brand-gold-dark border border-brand-gold/30 rounded-full font-bold text-xs uppercase tracking-widest py-4 px-8 shadow-md transition-colors shrink-0 cursor-pointer"
            >
              View Full Gallery
            </button>
          </div>

          {/* Grid Layout of photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_TEASER.map((item, idx) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="aspect-square relative rounded-2xl overflow-hidden shadow-sm group border border-brand-gold/10"
              >
                <img 
                  src={item.url} 
                  alt="Styling transformation photo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-charcoal/75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                  <Heart className="text-brand-gold fill-brand-gold" size={24} />
                  <span className="text-white text-xs font-mono font-bold mt-2">
                    {1200 + (idx * 148)} Likes
                  </span>
                  <span className="text-white/60 text-[9px] uppercase tracking-wider mt-1">
                    @glowandgrace
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. QUICK CTAS OVERLAY STRIP */}
      <section className="bg-brand-champagne border-t border-brand-gold/10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-charcoal mb-4">
            "Ready to shine on your beautiful occasion?"
          </h2>
          <p className="text-brand-charcoal/70 text-sm max-w-xl mx-auto mb-8">
            Select a free custom consultation session with Meera Sharma in Civil Lines, Meerut. We will analyze your skin tone or hair strength and define a custom plan.
          </p>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-brand-rose hover:bg-brand-charcoal text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg transition-colors cursor-pointer"
          >
            Schedule Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
