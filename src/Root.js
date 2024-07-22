import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import VideoPlayer from './VideoPlayer';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/video" element={<VideoPlayer />} />
    </Routes>
  </Router>
);

export default Root;
