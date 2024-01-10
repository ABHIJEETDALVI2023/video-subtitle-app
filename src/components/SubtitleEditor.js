// SubtitleEditor.js
import React, { useState } from 'react';

const SubtitleEditor = ({ onAddSubtitle }) => {
  const [subtitleText, setSubtitleText] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleAddSubtitle = () => {
    if (subtitleText && timestamp) {
      // Call the onAddSubtitle prop to pass subtitle data to the parent component
      onAddSubtitle({ text: subtitleText, timestamp });
      // Clear input fields after adding subtitle
      setSubtitleText('');
      setTimestamp('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Subtitle Text"
        value={subtitleText}
        onChange={(e) => setSubtitleText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Timestamp (e.g., 00:00:05)"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <button onClick={handleAddSubtitle}>Add Subtitle</button>
    </div>
  );
};

export default SubtitleEditor;
