import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../utils/youtubeAPI';
import VideoGrid from '../components/VideoGrid';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadTrendingVideos = async () => {
      const trendingVideos = await fetchVideos('trending');
      setVideos(trendingVideos);
    };
    loadTrendingVideos();
  }, []);

  return (
    <div>
      <h1>Trending Videos</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default Home;
