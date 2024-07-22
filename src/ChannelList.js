// src/ChannelList.js
import React from 'react';

const ChannelList = () => {
  const channels = [
    { id: 1, name: 'Canal 1' },
    { id: 2, name: 'Canal 2' },
    { id: 3, name: 'Canal 3' },
  ];

  return (
    <div>
      <h2>Lista de Canales</h2>
      <ul>
        {channels.map(channel => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
