/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={SALON_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-colors duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.1, 1], opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Chat with Meera on WhatsApp"
      id="whatsapp-floating-button"
    >
      {/* Ripple pulse effects */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden" />
      
      <MessageCircle size={22} className="fill-white" />
      <span className="text-sm font-semibold tracking-wide hidden sm:inline select-none">
        Book on WhatsApp
      </span>
      <span className="text-xs font-semibold bg-white/20 px-1.5 py-0.5 rounded-full text-white text-[10px] hidden md:inline ml-0.5">
        Fast Replies
      </span>
    </motion.a>
  );
}
