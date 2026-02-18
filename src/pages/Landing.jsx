import React from 'react';
import { motion } from 'framer-motion';
import { Stars, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_MESSAGES, EPISODES_DATA } from '../utils/constants';
// Import MusicPlayer dihapus karena sudah ada di App.jsx
import HeartEffect from '../components/HeartEffect';

const Landing = () => {
  return (
    <div className="min-h-screen bg-pink-50 relative">
      <HeartEffect />
      {/* Komponen MusicPlayer dihapus dari sini agar tidak double dan tidak reset saat pindah page */}

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

      {/* Episodes Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-3">
          <Stars className="text-yellow-400 animate-spin-slow" /> Our Episodes <Stars className="text-yellow-400 animate-spin-slow" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EPISODES_DATA.map((episode) => (
            <Link to={`/episode/${episode.id}`} key={episode.id}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-3 rounded-2xl shadow-xl border border-pink-100 cursor-pointer"
              >
                <img 
                  src={episode.coverImage} 
                  alt={episode.title} 
                  className="w-full h-64 object-cover rounded-xl mb-4" 
                />
                <p className="text-pink-600 font-bold mb-1 text-center font-serif text-xl">
                  {episode.title}
                </p>
                <div className="flex justify-center items-center text-gray-400 text-xs gap-1">
                  <Calendar size={12} /> {episode.date}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md p-10 md:p-16 rounded-[50px] shadow-2xl border border-pink-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-pink-500 font-serif mb-8">
            {PERSONAL_MESSAGES.SUB}
          </h3>
          <p className="text-gray-700 text-lg md:text-xl italic whitespace-pre-line leading-loose tracking-wide mb-10">
            {PERSONAL_MESSAGES.CONCLUSION}
          </p>

          {/* Tombol Game Foto */}
          <Link to="/game-foto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-pink-500 text-white rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
            >
              <span>Main Game Yuk! 📸</span>
            </motion.button>
          </Link>
        </motion.div>
      </section>
        
      <footer className="py-10 text-center text-gray-400 text-sm">
        {PERSONAL_MESSAGES.FOOTER_TEXT}
      </footer>
    </div>
  );
};

export default Landing;