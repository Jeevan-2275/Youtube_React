import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideos } from '../utils/youtubeAPI';
import VideoGrid from '../components/VideoGrid';

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadSearchResults = async () => {
      const searchResults = await fetchVideos(query);
      setVideos(searchResults);
    };
    loadSearchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default SearchResults;
