 // src/App.js
import React, { useState } from 'react';
import './App.css';
import ChannelList from './ChannelList';
import VideoPlayer from './VideoPlayer';

function App() {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleChannelClick = (channelUrl) => {
    setSelectedChannel(channelUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Obtén acceso ilimitado a tus canales favoritos a través de nuestra app ahora!</h1>
        <ChannelList onChannelClick={handleChannelClick} />
        {selectedChannel && <VideoPlayer url={selectedChannel} />}
      </header>
    </div>
  );
}

export default App;
