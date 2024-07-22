// src/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ url }) => {
  return (
    <div>
      <h2>Reproductor de Video</h2>
      <video width="600" controls>
        <source src={url} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
