 // src/ChannelList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';//importar el useNavigate

const channels = [
  { id: 1, name: 'Netflix', description: 'Disfruta de una vasta biblioteca de series y películas con Netflix.', url: 'https://www.netflix.com' },
  { id: 2, name: 'Apple TV+', description: 'Encuentra originales de alta calidad y contenido exclusivo en Apple TV+.', url: 'https://tv.apple.com' },
  { id: 3, name: 'Marvel Studios', description: 'Sumérgete en el universo Marvel con películas y series épicas.', url: 'https://www.marvel.com' },
  { id: 4, name: 'Amazon Prime Video', description: 'Explora una amplia selección de películas y series con Amazon Prime Video.', url: 'https://www.primevideo.com' },
  { id: 5, name: 'Hulu', description: 'Canal para ver una mezcla de series, películas y contenido original en Hulu.', url: 'https://www.hulu.com' },
  { id: 6, name: 'Warner Bros. Pictures', description: 'Accede a grandes éxitos cinematográficos y clásicos de Warner Bros. Pictures.', url: 'https://www.warnerbros.com' },
  { id: 7, name: 'Disney+', description: 'Disfruta de toda la magia de Disney, Pixar, Marvel, Star Wars y más con Disney+.', url: 'https://www.disneyplus.com' },
  { id: 8, name: 'HBO', description: 'Revive los mejores dramas, comedias y documentales con HBO.', url: 'https://www.hbo.com' },
  { id: 9, name: 'Lucasfilm Ltd.', description: 'Sumérgete en el mundo de Star Wars y otros éxitos de Lucasfilm Ltd.', url: 'https://www.lucasfilm.com' },
  { id: 10, name: 'AMC', description: 'Ve tus series favoritas y películas en AMC.', url: 'https://www.amc.com' },
  { id: 11, name: 'Paramount+', description: 'Disfruta de una mezcla de películas, series y deportes con Paramount+.', url: 'https://www.paramountplus.com' },
  { id: 12, name: 'Columbia Pictures', description: 'Explora clásicos y nuevos éxitos cinematográficos de Columbia Pictures.', url: 'https://www.columbiapictures.com' },
  { id: 13, name: 'DreamWorks Pictures', description: 'Encuentra emocionantes películas y animaciones de DreamWorks Pictures.', url: 'https://www.dreamworks.com' }
];

const ChannelList = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate(); // Usa useNavigate
  
    const filteredChannels = channels.filter(channel =>
      channel.name.toLowerCase().includes(search.toLowerCase())
    );
  
    const handleChannelClick = (channelUrl) => {
      navigate('/video', { state: { url: channelUrl } });
    };
  
    return (
      <div>
        <h2>Lista de Canales IPTV</h2>
        <input
          type="text"
          placeholder="Buscar canal..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
        />
        <ul className="ChannelList" style={{ listStyleType: 'none', padding: 0 }}>
          {filteredChannels.map(channel => (
            <li key={channel.id} onClick={() => handleChannelClick(channel.url)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
              <h3>{channel.name}</h3>
              <p>{channel.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ChannelList;