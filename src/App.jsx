import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import EpisodeDetail from './pages/EpisodeDetail';
import GameFoto from './pages/GameFoto';
import MusicPlayer from './components/MusicPlayers';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router basename="/pebysbirthday">
      {/* MusicPlayer tetap aktif di semua halaman setelah login */}
      {isAuthenticated && <MusicPlayer />}

      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login onLoginSuccess={() => setIsAuthenticated(true)} />
          } 
        />
        
        <Route 
          path="/home" 
          element={
            isAuthenticated ? <Landing /> : <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/episode/:id" 
          element={
            isAuthenticated ? <EpisodeDetail /> : <Navigate to="/login" />
          } 
        />

        {/* Route untuk Game Foto */}
        <Route 
          path="/game-foto" 
          element={
            isAuthenticated ? <GameFoto /> : <Navigate to="/login" />
          } 
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;