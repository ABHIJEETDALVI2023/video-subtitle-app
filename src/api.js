// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3002';
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const uploadVideo = async (videoFile) => {
  try {
    const formData = new FormData();
    formData.append('video', videoFile);

    const response = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
console.log("response",response)
    //return response.data; 
    // Assuming your backend returns the video URL after upload
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error;
  }
};

export const addSubtitle = async (subtitleData) => {
  try {
    const response = await api.post('/add-subtitle', subtitleData);
    return response.data; // You may adjust this based on your backend response
  } catch (error) {
    console.error('Error adding subtitle:', error);
    throw error;
  }
};

export const getSubtitles = async () => {
  try {
    const response = await api.get('/get-subtitles');
    return response.data; // You may adjust this based on your backend response
  } catch (error) {
    console.error('Error fetching subtitles:', error);
    throw error;
  }
};
