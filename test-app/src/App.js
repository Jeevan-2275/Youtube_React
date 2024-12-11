import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyBZ9-v4uf_BpxVvty0uolN7ohRpedhw9Vg';

export const fetchVideos = async (searchQuery = 'trending videos') => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        key: API_KEY,        
               q: searchQuery,
        part: 'snippet',       
        type: 'video',         
        maxResults: 10,        
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error.message); 
    return [];
  }
};
