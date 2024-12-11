import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCWAKiFSwXsoBpvzV8L_0pVg&key=[AIzaSyBZ9-v4uf_BpxVvty0uolN7ohRpedhw9Vg] ';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchVideos = async (searchQuery = 'trending videos') => {
  try {
    const response = await axios.get(`${'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCWAKiFSwXsoBpvzV8L_0pVg&key=[AIzaSyBZ9-v4uf_BpxVvty0uolN7ohRpedhw9Vg]'}/search`, {
      params: {
        key: API_KEY,
        q: searchQuery, // Search term
        part: 'snippet',
        type: 'video', // Ensures only videos are fetched
        maxResults: 10,
      },
    });
    return response.data.items; // Array of videos
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
