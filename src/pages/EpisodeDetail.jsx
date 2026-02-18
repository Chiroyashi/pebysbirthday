import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { EPISODES_DATA } from '../utils/constants';

const EpisodeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const episode = EPISODES_DATA.find((e) => e.id === id);

  const handleBack = () => {
    const sfx = new Audio(`${import.meta.env.BASE_URL}music/back.mp3`);
    sfx.volume = 0.5;
    sfx.play();
    setTimeout(() => { navigate('/home'); }, 200);
  };

  if (!episode) return <div className="text-center py-20">Episode tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-pink-50 p-6 pb-20">
      {/* Tombol Kembali yang sudah diberi shape */}
      <button 
        onClick={handleBack}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-pink-600 rounded-full shadow-sm border border-pink-100 font-medium transition-all hover:bg-pink-500 hover:text-white mb-8"
      >
        <ArrowLeft size={18} /> 
        <span>Kembali ke Beranda</span>
      </button>

      <div className="max-w-2xl mx-auto">
        {/* Header Episode */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2 font-serif">{episode.title}</h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm">{episode.date}</p>
          <div className="h-1 w-20 bg-pink-200 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Daftar Foto & Cerita */}
        <div className="space-y-16">
          {episode.photos.map((photo, index) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-pink-50">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-auto rounded-2xl mb-6 shadow-sm group-hover:scale-[1.01] transition-transform duration-300" 
                />
                <div className="px-2 pb-4 text-center">
                  <h3 className="text-xl font-bold text-pink-500 mb-3 font-serif">
                    {photo.caption}
                  </h3>
                  <p className="text-gray-500 leading-relaxed italic whitespace-pre-line">
                    "{photo.description}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;