// controllers/videoController.js
const multer = require('multer');

const storage = multer.memoryStorage(); // Store files in memory (you can adjust based on your requirements)
const upload = multer({ storage: storage });

const videoController = {
  uploadVideo: upload.single('video'), // Assuming the file input name is 'video'
  addSubtitle: (req, res) => {
    // Implement logic to add subtitle
    res.status(200).json({ message: 'Subtitle added successfully' });
  },
  getSubtitles: (req, res) => {
    // Implement logic to fetch subtitles
    const subtitles = []; // Replace with actual data
    res.status(200).json(subtitles);
  },
};

module.exports = videoController;
