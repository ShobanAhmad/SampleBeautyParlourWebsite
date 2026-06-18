/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { TEAM_MEMBERS, CERTIFICATIONS, SALON_INFO } from '../data';

export default function About() {
  return (
    <div className="pt-24 bg-brand-cream" id="about-page-root">
      
      {/* Page Header */}
      <section className="bg-brand-blush py-16 border-b border-brand-gold/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/[0.015]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Our Sanctuary</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">The Legacy of Grace</h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-3" />
          <p className="text-brand-charcoal/70 text-sm sm:text-base max-w-xl mx-auto">
            Step behind the curtain representing Civil Lines' premier beauty retreat, built upon 10+ years of authentic hair and cosmetics expertise.
          </p>
        </div>
      </section>

      {/* Founder & Creative Director Profile */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Founder Image with Premium Frame styling */}
          <div className="lg:col-span-5 relative" id="founder-image-wrapper">
            <div className="absolute -inset-4 border border-brand-gold/20 rounded-[2.5rem] -rotate-3 z-0" />
            <div className="absolute inset-0 bg-brand-gold/5 rounded-[2rem] translate-x-3 translate-y-3 z-0" />
            
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Meera Sharma Founder of Glow and Grace Salon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Stat Label */}
              <div className="absolute bottom-6 left-6 bg-brand-charcoal/90 backdrop-blur-md text-white rounded-2xl p-4 border border-brand-gold/20 flex gap-3 items-center">
                <div className="bg-brand-gold text-brand-charcoal p-2 rounded-xl">
                  <Award size={20} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-brand-gold">12+ Years</div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-white/70">Artistry Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Personal Story Copy */}
          <div className="lg:col-span-7 space-y-6" id="founder-story-details">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-rose">Meet the Visionary</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">Meera Sharma</h2>
            <p className="text-brand-gold-dark font-serif text-sm tracking-wide -mt-2">
              Founder & Chief Bridal Architect • Certified Académie L'Oréal Paris
            </p>
            <div className="w-12 h-1 bg-brand-gold" />
            
            <div className="space-y-4 text-brand-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
              <p>
                "I started my journey back in 2014 inside a single-chair studio right here in Meerut. Back then, most local parlour setups treated beauty as a standard service row. My dream was entirely different—I wanted to construct an authentic luxurious sanctuary that respects dermatology, uses top-grade chemical-safe colorimetry, and treats every woman like royalty."
              </p>
              <p>
                "Over the past decade, Glow & Grace Beauty Studio has grown into Civil Lines' most trusted landmark. We have trained our staff directly under academy grandmasters, partnered exclusively with premium European laboratories, and successfully managed over **5,000+ bridal and party makeovers** across Uttar Pradesh."
              </p>
              <p className="italic font-serif text-brand-charcoal text-md py-2 border-l-4 border-brand-gold pl-4 bg-brand-blush/40 rounded-r-xl">
                "For me, cosmetic service is not just about makeup—it is about restoring your inner confidence, celebrating raw textures, and making you feel absolutely stunning."
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">Cleanly Sanitized Standards</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">Dermatologist Approved Facials</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">Zero Ammonia Rich Hair Colors</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">Authentic Mac / Estée Lauder</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Third Party Certifications Section */}
      <section className="bg-brand-champagne py-24 border-y border-brand-gold/15" id="certifications-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Verified Integrity</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-charcoal">Academy Certifications</h2>
            <p className="text-brand-charcoal/70 text-xs sm:text-sm mt-3 leading-relaxed">
              We never stop learning. Our senior beauty artists attend annual global bootcamps in Paris, Mumbai, and Delhi to learn the latest chemical-safe trends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: '#D4AF37' }}
                className="bg-white border border-brand-gold/10 p-6 rounded-2xl text-center shadow-sm relative group"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-blush text-brand-gold-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={22} className="stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-md font-bold text-brand-charcoal mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wide text-brand-gold-dark font-semibold">
                  {cert.subtitle}
                </p>
                <div className="absolute top-2 right-2 opacity-5 text-brand-gold font-serif text-5xl leading-none">★</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* MEET THE TEAM (STAFF CARDS) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="team-division-section">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">The Artists</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">The Glow & Grace Specialists</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-6" />
          <p className="text-brand-charcoal/70 text-sm">
            Educated, highly patient, and genuinely focused on customer hospitality, we are here to support your styling goals with absolute focus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-gold/10 shadow-lg group"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={member.photoUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-brand-cream/90 backdrop-blur-sm border border-brand-gold/20 py-1 px-3.5 rounded-full text-brand-gold-dark text-[10px] font-bold tracking-wider uppercase">
                  {member.experience} EXP
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg font-bold">{member.name}</h3>
                  <p className="text-[10px] tracking-wider text-brand-gold-light font-bold uppercase">{member.role}</p>
                </div>
              </div>

              <div className="p-6 border-t border-brand-blush">
                <div className="flex gap-2 items-start">
                  <div className="bg-brand-rose/10 text-brand-rose p-1.5 rounded-lg shrink-0 mt-0.5">
                    <Heart size={14} className="fill-brand-rose" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-brand-charcoal/50 tracking-wider">Primary Specialty</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal font-medium mt-0.5 leading-relaxed">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
