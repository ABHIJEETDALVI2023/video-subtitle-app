// App.js
import React, { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import SubtitleEditor from './components/SubtitleEditor';
import VideoPlayer from './components/VideoPlayer';
import './App.css'; // Import the CSS file

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [subtitles, setSubtitles] = useState([]);

  const handleVideoUpload = (videoFile) => {
    const videoUrl = URL.createObjectURL(videoFile);
    setVideoUrl(videoUrl);
  };

  const handleAddSubtitle = (subtitle) => {
    setSubtitles([...subtitles, subtitle]);
  };

  return (
    <div>
      <h1>Video Subtitle App</h1>
      <VideoUpload onUpload={handleVideoUpload} />
      <SubtitleEditor onAddSubtitle={handleAddSubtitle} />
      {videoUrl && (
        <div className="video-container">
          <VideoPlayer videoUrl={videoUrl} subtitles={subtitles} />
        </div>
      )}
    </div>
  );
};

export default App;
