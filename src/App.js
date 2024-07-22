 // src/App.js
import React from 'react';
import ChannelList from './ChannelList';

const App = () => {
  const handleChannelClick = (url) => {
    // Redirigir a la URL del canal
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña
  };

  return (
    <div>
      <h1>Mi Proyecto IPTV</h1>
      <ChannelList onChannelClick={handleChannelClick} />
    </div>
  );
};

export default App;
