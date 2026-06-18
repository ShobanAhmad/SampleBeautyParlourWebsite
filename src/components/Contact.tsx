/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  MessageSquare, 
  Sparkles, 
  CheckCircle,
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data';

interface ContactProps {
  preselectedService: string;
  setPreselectedService: (serviceName: string) => void;
}

export default function Contact({ preselectedService, setPreselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle preselected service binding
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      setErrorMessage("Please fill all mandatory fields (Name, Phone, Service, Date) before submitting.");
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
    // In a real application, this would post to an express API or Firestore database
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      notes: ''
    });
    setPreselectedService('');
    setIsSubmitted(false);
  };

  // Generate dynamic WhatsApp link using client's input
  const finalWhatsAppUrl = `https://wa.me/918887799911?text=Hi%20Glow%20and%20Grace!%20My%20name%20is%2520${encodeURIComponent(formData.name || 'Guest')}.%2520I%2520wanted%2520to%2520book%2520the%2520treatment:%2520${encodeURIComponent(formData.service || 'Consultation')}%2520on%2520${encodeURIComponent(formData.date || 'soon')}.`;

  return (
    <div className="pt-24 bg-brand-cream min-h-screen pb-24" id="contact-page-root">
      
      {/* Contact Header */}
      <section className="bg-brand-blush py-16 border-b border-brand-gold/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/[0.01]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Book Your Visit</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">Get In Touch With Us</h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-3" />
          <p className="text-brand-charcoal/70 text-sm sm:text-base max-w-xl mx-auto">
            Schedule an appointment instantly. Meera and her team will reach out to confirm your timing within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-gold/10 p-8 sm:p-12 shadow-xl relative overflow-hidden" id="booking-form-wrapper">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-gold" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="mb-4">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal flex items-center gap-2">
                      <Sparkles className="text-brand-gold-dark fill-brand-blush" size={20} />
                      <span>Secure Your Styling Slot</span>
                    </h2>
                    <p className="text-brand-charcoal/60 text-xs sm:text-sm mt-1">
                      No advanced payments required. Pay directly at the Civil Lines salon post treatment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs sm:text-sm font-medium border border-red-100">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  {/* Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/75 mb-2">
                        Your Full Name <span className="text-brand-gold">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Shreya Singhal"
                        className="w-full bg-brand-cream/45 border border-brand-gold/20 rounded-xl py-3 px-4 text-brand-charcoal text-sm font-medium focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/75 mb-2">
                        WhatsApp/Mobile Number <span className="text-brand-gold">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 98765 43210"
                        className="w-full bg-brand-cream/45 border border-brand-gold/20 rounded-xl py-3 px-4 text-brand-charcoal text-sm font-medium focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/75 mb-2">
                        Select Treatment <span className="text-brand-gold">*</span>
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-brand-cream/45 border border-brand-gold/20 rounded-xl py-3 px-4 text-brand-charcoal text-sm font-medium focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all cursor-pointer"
                        required
                      >
                        <option value="">-- Select custom therapy --</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.name}>
                            {srv.name} (₹{srv.price.toLocaleString('en-IN')})
                          </option>
                        ))}
                        <option value="Signature Pre-Bridal Consultation">Signature Pre-Bridal Consultation (FREE)</option>
                        <option value="Custom Bespoke Glow Package">Custom Bespoke Glow Package (Inquire)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/75 mb-2">
                        Preferred Date <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <input 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full bg-brand-cream/45 border border-brand-gold/20 rounded-xl py-3 px-4 text-brand-charcoal text-sm font-medium focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all cursor-pointer"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/75 mb-2">
                      Special Requests / Hair & Skin Concerns (Optional)
                    </label>
                    <textarea 
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. Sensitive skin under eyes, dry colored hair tips, or requested drape styles."
                      className="w-full bg-brand-cream/45 border border-brand-gold/20 rounded-xl py-3 px-4 text-brand-charcoal text-sm font-medium focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all resize-none"
                    />
                  </div>

                  {/* Form Submission actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-brand-blush">
                    <button
                      type="submit"
                      className="flex-grow bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-colors cursor-pointer text-center"
                      id="submit-booking-slot-btn"
                    >
                      Book Secured Appointment Slot
                    </button>
                    
                    {/* Secondary WhatsApp direct button */}
                    <a
                      href={finalWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl transition-colors text-center"
                    >
                      <MessageCircle size={16} className="fill-white" />
                      <span>Book Instantly on WA</span>
                    </a>
                  </div>
                </motion.form>
              ) : (
                // SUCCESS STATE PANEL
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                  id="booking-success-indicator"
                >
                  <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold mx-auto rounded-full flex items-center justify-center mb-6 border border-brand-gold/30">
                    <CheckCircle size={32} className="stroke-[2]" />
                  </div>
                  
                  <span className="text-[10px] text-brand-rose font-bold uppercase tracking-[0.2em]">Congratulations {formData.name}!</span>
                  <h2 className="font-serif text-3xl font-bold text-brand-charcoal mt-2 mb-4">
                    Booking Request Received!
                  </h2>
                  <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />

                  <div className="bg-brand-blush/60 border border-brand-gold/10 rounded-2xl p-6 mb-8 max-w-md mx-auto text-left space-y-3 text-sm">
                    <div>
                      <strong className="text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider block">Requested Guest</strong>
                      <span className="text-brand-charcoal font-semibold">{formData.name} ({formData.phone})</span>
                    </div>
                    <div>
                      <strong className="text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider block">Secured Service</strong>
                      <span className="text-brand-charcoal font-semibold">{formData.service}</span>
                    </div>
                    <div>
                      <strong className="text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider block">Assigned Date</strong>
                      <span className="text-brand-charcoal font-semibold">{formData.date}</span>
                    </div>
                  </div>

                  <p className="text-brand-charcoal/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-8">
                     Founder **Meera Sharma** or our receptionist will dial your mobile number shortly to verify your available time slots and finalize your vip reservation.
                  </p>

                  <button
                    onClick={handleResetForm}
                    className="bg-brand-charcoal hover:bg-brand-gold text-white font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-full shadow-md transition-colors cursor-pointer"
                  >
                    Go Back / Edit Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: RECEPTION, HOURS & MAP */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-cards">
            
            {/* Quick stats and contacts review */}
            <div className="bg-white border border-brand-gold/10 rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-4">Our Salon Lounge</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-brand-blush text-brand-rose p-2.5 rounded-xl shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-brand-charcoal/40">Address Location</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal font-medium mt-0.5 leading-relaxed">
                      {SALON_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-brand-blush text-brand-rose p-2.5 rounded-xl shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-brand-charcoal/40">Reception Desk</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal font-medium mt-0.5">
                      <a href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors">
                        {SALON_INFO.phone}
                      </a> (Call to modify bookings)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-brand-blush text-brand-rose p-2.5 rounded-xl shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-brand-charcoal/40">Corporate Support</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal font-medium mt-0.5">
                      <a href={`mailto:${SALON_INFO.email}`} className="hover:text-brand-gold transition-colors">
                        {SALON_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading house timings card */}
            <div className="bg-white border border-brand-gold/10 rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-4 flex items-center gap-1.5">
                <Clock size={16} className="text-brand-gold-dark" />
                <span>Trading Hours</span>
              </h3>
              
              <div className="divide-y divide-brand-blush">
                {SALON_INFO.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex justify-between items-center text-xs sm:text-sm">
                    <span className="font-semibold text-brand-charcoal">{h.days}</span>
                    <span className="text-brand-rose font-medium font-mono bg-brand-blush px-3 py-1 rounded-full text-xs">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Google Map pointing to Civil Lines, Meerut, UP */}
            <div className="bg-white border border-brand-gold/10 rounded-3xl overflow-hidden shadow-lg p-3">
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden relative">
                <iframe 
                  title="Glow & Grace GPS location Civil Lines Meerut"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13964.44498305018!2d77.71216347963364!3d28.98595995254131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64467d300001%3A0x6bba847c5d7967a5!2sCivil%20Lines%2C%20Meerut%2C%20Uttar%20Pradesh%20250001!5e0!3m2!1sen!2sin!4v1718712345678!5m2!1sen!2sin" 
                  className="w-full h-full border-0 absolute"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  id="gps-location-map-frame"
                />
              </div>
              <div className="p-3 text-center text-xs text-brand-charcoal/50 leading-relaxed">
                📍 Opposite Commissioner's Residence, Civil Lines, Meerut, UP. Valet parking is available free of cost on bridal bookings.
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
