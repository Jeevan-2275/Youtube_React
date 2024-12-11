import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>Video Details</h2>
    </div>
  );
};

export default VideoDetail;
