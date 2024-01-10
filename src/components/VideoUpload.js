// VideoUpload.js
import React, { useState } from 'react';

const VideoUpload = ({ onUpload }) => {
  console.log("onupload",onUpload)
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleUpload = () => {
    if (videoFile) {
      // Call the onUpload prop to pass the video file to the parent component
      onUpload(videoFile);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default VideoUpload;
