import React from 'react';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
  const location = useLocation();
  const { url } = location.state || {};

  return (
    <div className="VideoPlayer">
      <h2>Reproductor de Video</h2>
      {url ? (
        <video width="600" controls>
          <source src={url} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      ) : (
        <p>No hay URL de video disponible.</p>
      )}
    </div>
  );
};

export default VideoPlayer;
