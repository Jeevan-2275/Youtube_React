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
        {videos.length > 0 && videos.map((video) => (
          video.id.videoId && (  // Check if videoId exists
            <div key={video.id.videoId} style={{ marginBottom: '20px' }}>
              <h3>{video.snippet.title}</h3>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                style={{ width: '100%', maxWidth: '300px', marginBottom: '10px' }}
              />
              <iframe
                width="300"
                height="169"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default App;
