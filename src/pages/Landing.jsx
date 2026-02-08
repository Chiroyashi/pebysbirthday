import React from 'react';
import { motion } from 'framer-motion';
import { Stars, Calendar, MapPin } from 'lucide-react';
import { PERSONAL_MESSAGES, GALLERY_DATA, TIMELINE_DATA } from '../utils/constants';
import MusicPlayer from '../components/MusicPlayer';
import HeartEffect from '../components/HeartEffect';

const Landing = () => {
  return (
    <div className="min-h-screen bg-pink-50 relative">
      <HeartEffect />
      <MusicPlayer />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-6 relative z-10">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold text-pink-600 mb-4 font-serif"
        >
          {PERSONAL_MESSAGES.HERO_TITLE}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-lg max-w-2xl italic"
        >
          "{PERSONAL_MESSAGES.HERO_SUBTITLE}"
        </motion.p>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-3">
          <Stars className="text-yellow-400 animate-spin-slow" /> Our Gallery <Stars className="text-yellow-400 animate-spin-slow" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_DATA.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="bg-white p-3 rounded-2xl shadow-xl border border-pink-100"
            >
              <img src={item.imageUrl} alt="moment" className="w-full h-64 object-cover rounded-xl mb-4" />
              <p className="text-gray-700 font-medium mb-1 text-center font-serif">{item.caption}</p>
              <div className="flex justify-center items-center text-gray-400 text-xs gap-1">
                <Calendar size={12} /> {item.date}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 italic text-pink-500">Our Journey</h2>
        <div className="space-y-8">
          {TIMELINE_DATA.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl backdrop-blur-sm"
            >
              <div className="bg-pink-500 text-white p-3 rounded-full font-bold">{event.year}</div>
              <div>
                <h3 className="text-xl font-bold text-pink-600">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-sm">
        {PERSONAL_MESSAGES.FOOTER_TEXT}
      </footer>
    </div>
  );
};

export default Landing;