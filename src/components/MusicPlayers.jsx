import React, { useState, useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop>
        <source src="/music/music1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isPlaying ? 'bg-pink-500 text-white animate-spin-slow' : 'bg-white text-pink-500'
        }`}
      >
        {isPlaying ? <Music size={24} /> : <Music2 size={24} />}
      </motion.button>
      
      {/* Tooltip kecil */}
      {!isPlaying && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-3 bg-white px-3 py-1 rounded-lg shadow-sm text-xs text-pink-500 whitespace-nowrap border border-pink-100"
        >
          Putar musik? 🎵
        </motion.div>
      )}
    </div>
  );
};

export default MusicPlayer;