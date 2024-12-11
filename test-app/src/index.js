import React, { useState, useEffect } from 'react';
import { fetchVideos } from './api/youtubeAPI';

const App = () => {
  const [videos, setVideos] = useState([]); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false);

  const loadVideos = async () => {
    setLoading(true); 
    setError(null); 
    try {
      const fetchedVideos = await fetchVideos();
      if (fetchedVideos.length === 0) {
        setError('No videos found for the given search query.');
      }
      setVideos(fetchedVideos);
    } catch (error) {
      setError('Failed to fetch videos. Please try again later.');
      console.error('Error:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Clone</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && videos.length === 0 && (
        <p>No videos available. Try a different search query.</p>
      )}

      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
