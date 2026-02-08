import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { AUTH_CONFIG, PERSONAL_MESSAGES } from '../utils/constants';
import { Heart } from 'lucide-react';

const Login = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.toLowerCase() === AUTH_CONFIG.KEYPASS_NAME.toLowerCase()) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
      });
      setTimeout(() => onLoginSuccess(), 1500);
    } else {
      setError('Kuncinya salah, coba ingat lagi panggilan kesayangan..');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-md w-full text-center z-10 border border-white"
      >
        <Heart className="mx-auto text-pink-500 mb-4 animate-pulse" fill="currentColor" size={48} />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{PERSONAL_MESSAGES.LOGIN_TITLE}</h1>
        <p className="text-gray-500 mb-6 text-sm">{PERSONAL_MESSAGES.LOGIN_SUBTITLE}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Siapa namamu?"
            className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 text-center transition-all"
          />
          {error && <p className="text-red-400 text-xs italic">{error}</p>}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95"
          >
            Buka Kado 🎁
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;