// VideoPlayer.js
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const [subtitlesVisible, setSubtitlesVisible] = useState(true);

  // Function to toggle subtitles visibility
  const toggleSubtitles = () => {
    setSubtitlesVisible(!subtitlesVisible);
  };

  return (
    <div>
      <ReactPlayer url={videoUrl} controls width="100%" height="auto" />

      {subtitlesVisible && (
        <div style={{ position: 'relative', marginTop: '-24px' }}>
          {subtitles.map((subtitle, index) => (
            <p
              key={index}
              style={{
                position: 'relative',
                top: `${subtitle.position}%`, // Adjust position based on percentage
                left: '50%', // Center the subtitle text horizontally
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '4px',
                borderRadius: '4px',
                color: 'white',
              }}
            >
              {subtitle.text}
            </p>
          ))}
        </div>
      )}

      <button onClick={toggleSubtitles}>
        {subtitlesVisible ? 'Hide Subtitles' : 'Show Subtitles'}
      </button>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default VideoPlayer;
