import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCWAKiFSwXsoBpvzV8L_0pVg&key=[AIzaSyDwkxqOL9_InKNDMyxKDpZeIpF1VnZ_Suw] ';
const API_KEY = 'AIzaSyDwkxqOL9_InKNDMyxKDpZeIpF1VnZ_Suw';

export const fetchVideos = async (searchQuery = 'trending videos') => {
  try {
    const response = await axios.get(`${"https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCWAKiFSwXsoBpvzV8L_0pVg&key=[AIzaSyDwkxqOL9_InKNDMyxKDpZeIpF1VnZ_Suw] "}/search`, {
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
