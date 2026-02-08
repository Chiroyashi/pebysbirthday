import React from 'react';
import { motion } from 'framer-motion';

const HeartEffect = () => {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: '100vh', 
            x: `${Math.random() * 100}vw` 
          }}
          animate={{ 
            opacity: [0, 1, 0], 
            y: '-10vh',
            transition: { 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 10 
            }
          }}
          className="absolute text-pink-300/40"
          style={{ fontSize: `${Math.random() * 20 + 10}px` }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default HeartEffect;