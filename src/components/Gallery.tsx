/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Scissors, Flower2, Crown, Sparkle, RefreshCw } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'skin' | 'makeup' | 'bridal'>('all');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Before/After Image Sources
  const beforeImage = "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1000"; // raw texture
  const afterImage = "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000"; // polished bridal waves

  // Handle Before After Slider Calculations
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isSliding || e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  const filters: { id: 'all' | 'hair' | 'skin' | 'makeup' | 'bridal'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Portfolio', icon: Sparkle },
    { id: 'hair', label: 'Hair Textures', icon: Scissors },
    { id: 'skin', label: 'Healthy Skin', icon: Flower2 },
    { id: 'makeup', label: 'HD Makeovers', icon: Sparkles },
    { id: 'bridal', label: 'Traditional Bridal', icon: Crown },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="pt-24 bg-brand-cream min-h-screen pb-24" id="gallery-page-root">
      
      {/* Gallery Header */}
      <section className="bg-brand-blush py-16 border-b border-brand-gold/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/[0.01]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Our Masterpieces</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">Visual Proof of Elegance</h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-3" />
          <p className="text-brand-charcoal/70 text-sm sm:text-base max-w-xl mx-auto">
            Review raw, untouched, and unedited customer portfolios showing Meera Sharma's authentic styling results.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER MAKEOVER SLIDER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24" id="before-after-slider-section">
        <div className="text-center mb-10">
          <span className="text-brand-rose font-bold text-xs uppercase tracking-widest block mb-2">Interactive Transformation</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">Couture Hair & Bridal Volume</h2>
          <p className="text-brand-charcoal/60 text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            Drag the middle interactive slider bar left or right to compare our signature L'Oréal customized nourishing and highlighting treatments.
          </p>
        </div>

        {/* The Slider Container */}
        <div 
          ref={sliderContainerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsSliding(true)}
          onMouseUp={() => setIsSliding(false)}
          onMouseLeave={() => setIsSliding(false)}
          onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-brand-charcoal/10"
          id="before-after-interactive-frame"
        >
          {/* Back layer: "BEFORE STYLE" (Full Width) */}
          <div className="absolute inset-0">
            <img 
              src={beforeImage} 
              alt="Before Makeover hair styled raw" 
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* Label */}
            <span className="absolute bottom-4 right-4 bg-black/75 text-white/95 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 z-20 font-mono">
              Before Care
            </span>
          </div>

          {/* Front layer: "AFTER STYLE" (Clipped Width based on percentage) */}
          <div 
            className="absolute inset-0 z-10"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src={afterImage} 
              alt="After Makeover gorgeous hair styled" 
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* Label */}
            <span className="absolute bottom-4 left-4 bg-brand-gold text-brand-charcoal text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 z-20 font-mono">
              After Glow
            </span>
          </div>

          {/* Separator Line and Handle circle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-charcoal text-white rounded-full p-2.5 shadow-2xl border-2 border-brand-gold transition-transform hover:scale-110 flex items-center justify-center">
              <RefreshCw size={14} className="animate-spin-slow text-brand-gold" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-4 text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal/50">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-black/60" /> Drag Image directly</span>
          <span className="hidden sm:flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-gold" /> Paris styling formulas</span>
        </div>
      </section>

      {/* FILTERABLE PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="gallery-portfolio-grid">
        
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Our Complete Book</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">The Style Portfolio</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-4" />
          
          {/* Subtabs for filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((f) => {
              const IconComponent = f.icon;
              const isSelected = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer ${
                    isSelected
                      ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-md'
                      : 'bg-white text-brand-charcoal hover:bg-brand-blush border border-brand-gold/15'
                  }`}
                  id={`gallery-filter-${f.id}`}
                >
                  <IconComponent size={12} className={isSelected ? 'text-brand-gold' : 'text-brand-rose'} />
                  <span>{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-visuals-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-brand-gold/10 shadow-lg group relative h-96 cursor-pointer"
                id={`gallery-card-${item.id}`}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Small category tag overlay */}
                <span className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-sm border border-brand-gold/20 py-1 px-3.5 rounded-full text-brand-gold-dark text-[10px] font-mono font-bold tracking-wider uppercase z-10">
                  {item.category}
                </span>

                {/* Bottom details overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="font-serif text-lg sm:text-xl font-bold mb-1 group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-semibold flex items-center gap-1">
                    <Eye size={10} className="text-brand-gold" />
                    <span>Click to view makeover</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>

    </div>
  );
}
