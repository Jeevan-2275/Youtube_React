import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams(); // Extract video ID from the URL

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Video Details</h2>
      <p>Additional information about the video can be displayed here.</p>
    </div>
  );
};

export default VideoDetail;
