import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load components
const ChannelList = lazy(() => import('./ChannelList'));
const VideoPlayer = lazy(() => import('./VideoPlayer'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ChannelList onChannelClick={handleChannelClick} />} />
              <Route path="/video" element={selectedChannel ? <VideoPlayer url={selectedChannel} /> : <div>No video selected</div>} />
            </Routes>
          </Suspense>
        </header>
      </div>
    </Router>
  );
}

export default App;

