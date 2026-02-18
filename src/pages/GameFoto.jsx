import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Heart } from 'lucide-react';
import cover1 from '../assets/images/game1.jpeg';
import cover2 from '../assets/images/game2.jpeg';
import cover3 from '../assets/images/game3.jpeg';
import cover4 from '../assets/images/game5.jpeg';
import cover5 from '../assets/images/game4.jpeg';
import cover6 from '../assets/images/game6.jpeg';
import cover7 from '../assets/images/game7.jpeg';

const ALL_PHOTOS = [cover1, cover2, cover3, cover4, cover5, cover6, cover7];

const GameFoto = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState(1);
  const [candidates, setCandidates] = useState(ALL_PHOTOS.slice(0, 4));
  const [winner, setWinner] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);

  // Fungsi untuk memutar suara
  const playSfx = (fileName) => {
    const sfx = new Audio(`${import.meta.env.BASE_URL}music/${fileName}`);
    sfx.volume = 0.4;
    sfx.play().catch(e => console.log("Audio play blocked", e));
  };

  const handleSelect = (selectedUrl) => {
    if (round < 3) {
      playSfx('back.mp3'); // Pakai sfx yang sudah ada atau ganti baru
      const nextPhotoIndex = 4 + (round - 1) * 2;
      const nextBatch = [selectedUrl, ...ALL_PHOTOS.slice(nextPhotoIndex, nextPhotoIndex + 2)];
      
      setCandidates(nextBatch);
      setRound(round + 1);
    } else {
      playSfx('win.mp3'); // Suara kemenangan di putaran akhir
      setWinner(selectedUrl);
      setGameFinished(true);
    }
  };

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0, rotate: -10 }} 
          animate={{ scale: 1, rotate: 0 }} 
          className="bg-white p-8 rounded-[40px] shadow-2xl border-4 border-pink-200 max-w-lg relative"
        >
          {/* Dekorasi tambahan */}
          <div className="absolute -top-10 -left-10 animate-bounce">✨</div>
          <div className="absolute -top-10 -right-10 animate-bounce delay-100">✨</div>
          
          <Trophy className="text-yellow-400 w-16 h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-pink-600 mb-6 font-serif">Foto Tertampan Pilihan Cintaku!</h1>
          <img src={winner} alt="Winner" className="w-full h-80 object-cover rounded-2xl mb-6 shadow-lg border-4 border-pink-100" />
          <p className="text-gray-600 italic mb-8">"Fix, di sini fotoku paling ganteng tiada tanding! ❤️"</p>
          <button 
            onClick={() => navigate('/home')} 
            className="bg-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-all active:scale-95"
          >
            Kembali ke Beranda
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 p-6 overflow-x-hidden">
      <button 
        onClick={() => { playSfx('back.mp3'); navigate('/home'); }} 
        className="flex items-center gap-2 text-pink-600 font-medium mb-10 bg-white px-5 py-2.5 rounded-full shadow-sm hover:bg-pink-50"
      >
        <ArrowLeft size={20} /> Menyerah
      </button>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          key={round}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <span className="bg-pink-500 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
            Putaran {round} / 3
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mt-6 font-serif">
            {round === 1 ? "Pilih 1 dari 4 foto awal!" : "Mana yang lebih tampan?"}
          </h2>
          <p className="text-gray-500 mt-2 italic text-sm">Klik pada fotonya ya!</p>
        </motion.div>

        <div className={`grid gap-8 ${round === 1 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'} justify-center`}>
          <AnimatePresence mode="wait">
            {candidates.map((url, index) => (
              <motion.div
                key={url + index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(url)}
                className="cursor-pointer group relative"
              >
                <div className="bg-white p-3 rounded-[32px] shadow-xl border-2 border-transparent group-hover:border-pink-300 transition-all">
                  <img src={url} alt="Kandidat" className="w-full h-72 md:h-96 object-cover rounded-[24px]" />
                  <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px] flex items-center justify-center">
                    <Heart className="text-white w-16 h-16 fill-current drop-shadow-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GameFoto;