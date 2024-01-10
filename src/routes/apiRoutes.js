// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

// routes/apiRoutes.js
const videoController = require('../controllers/videoController');

// Upload video route
router.post('/upload', videoController.uploadVideo);

// Add subtitle route
router.post('/add-subtitle', videoController.addSubtitle);

// Get subtitles route
router.get('/get-subtitles', videoController.getSubtitles);

module.exports = router;
