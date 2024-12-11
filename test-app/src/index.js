import React, { useState, useEffect } from 'react';
import { fetchVideos } from './api/youtubeAPI';

const App = () => {
  const [videos, setVideos] = useState([]); // State for videos
  const [error, setError] = useState(null); // State for errors
  const [loading, setLoading] = useState(false); // State for loading

  const loadVideos = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors
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
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    loadVideos(); // Fetch videos on component mount
  }, []);

  return (
    <div>
      <h1>YouTube Clone</h1>

      {/* Show Loading Spinner */}
      {loading && <p>Loading...</p>}

      {/* Show Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show Videos or No Videos Message */}
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
