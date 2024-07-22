 // src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes correctamente
import ChannelList from './ChannelList';
import VideoPlayer from './VideoPlayer';
import './App.css';

function App() {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleChannelClick = (channelUrl) => {
    setSelectedChannel(channelUrl);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>¡Obtén acceso ilimitado a tus canales favoritos a través de nuestra app ahora!</h1>
          <Routes>
            <Route path="/" element={<ChannelList onChannelClick={handleChannelClick} />} />
            <Route path="/video" element={selectedChannel && <VideoPlayer url={selectedChannel} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
