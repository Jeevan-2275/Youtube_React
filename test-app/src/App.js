import axios from 'axios';

// Define base URL and API key
const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyBZ9-v4uf_BpxVvty0uolN7ohRpedhw9Vg';

export const fetchVideos = async (searchQuery = 'trending videos') => {
  try {
    // Use the /search endpoint for fetching videos
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        key: API_KEY,          // Pass API key
        q: searchQuery,        // Search term
        part: 'snippet',       // Fetch video details
        type: 'video',         // Ensure only videos are fetched
        maxResults: 10,        // Limit the results
      },
    });
    return response.data.items; // Return the list of videos
  } catch (error) {
    console.error('Error fetching videos:', error.message); // Log error message
    return [];
  }
};
