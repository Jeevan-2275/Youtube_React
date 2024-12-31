// import React, { useState, useEffect } from 'react';
// import fetchYouTubeData from './YouTubeAPI.js';

// const YouTubeClone = () => {


//   const [videos, setVideos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('React tutorials');
  
//   useEffect(() => {
//     const getVideos = async () => {
//       const data = await fetchYouTubeData(searchTerm);
//       setVideos(data);
//     };
//     getVideos();
//   }, [searchTerm]);

//   return (
//     <div className="youtube-clone">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search for videos"
//       />
//       <div className="video-list">
//         {videos.map((video) => (
//           <div key={video.id.videoId} className="video-item">
//             <h3>{video.snippet.title}</h3>
//             <img 
//               src={video.snippet.thumbnails.medium.url} 
//               alt={video.snippet.title} 
//             />
//             <p>{video.snippet.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YouTubeClone;



import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';
// import navbar from './assets./'


//  export const API_KEY = 'AIzaSyC4Z5La2dxtSE-Uq5Bsmt8QjvcSVdhfbTA';
  export const BASE_URL  = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCWAKiFSwXsoBpvzV8L_0pVg&key=$[AIzaSyC4Z5La2dxtSE-Uq5Bsmt8QjvcSVdhfbTA]' ;
const YouTubeData = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching data from YouTube:', error);
    return [];
  }
};

function Navbar() {
  const suggestions = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Cook Studio' },
    { id: 3, title: 'UX' },
    { id: 4, title: 'Case' },
    { id: 5, title: 'Music' },
    { id: 6, title: 'Bangla' },
    { id: 7, title: 'Tour' },
    { id: 8, title: 'Santmartin' },
    { id: 9, title: 'Tech' },
    { id: 10, title: 'iPhone13' },
  ];

  return (
    <div>
      <div className="search">
        <input type="search" placeholder="Search for videos" />
        <img
          className="mark"
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/search.png?raw=true"
          alt="Search Icon"
        />
        <img
          className="mic"
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/mic.png?raw=true"
          alt="Mic Icon"
        />
      </div>
      <div className="att">
        {suggestions.map((item) => (
          <div key={item.id} className="sub">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const fetchData = async () => {
    const query = 'React tutorials'; 
    const videos = await YouTubeData(query);
    console.log('Fetched Videos:', videos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="content">
      
 
    


<div className="A">
       
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/hambarger.png?raw=true" alt="" /> <img id="logo" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt=""/></div><br />
<div className="homearound">
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/home.png?raw=true" alt="" /><p className="home">Home</p></div><br />

</div>
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/explore.png?raw=true" alt="" /><p className="home">Explore</p></div><br />
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/shorts.png?raw=true" alt="" /><p className="home">Shorts</p></div><br />
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/subscription.png?raw=true" alt="" /><p className="home">Subscription</p></div><br />
<hr color="white" />
<div className="dash">___________________________</div>
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/library.png?raw=true" alt="" /><p className="home">Library</p></div><br />
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/history.png?raw=true" alt="" /><p className="home">History</p></div><br />
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/your_video.png?raw=true" alt="" /><p className="home">Your videos</p></div><br />
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/watch_later.png?raw=true" alt="" /><p className="home">watch later</p></div><br />
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/liked.png?raw=true" alt=" " /><p className="home">liked videos</p></div><br />
<div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" /><p className="home">Show more</p></div><br />
<hr />
<div className="dash">___________________________</div>


  <div>SUBSCRI0PTION</div> 
   <br />
  <div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" /><p className="home"> Nadir on the GO</p></div><br />
  <div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true" alt="" /><p className="home">Coke Studio Bangla</p></div><br />
  <div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" /><p className="home"> MKBHD</p></div><br />
  <div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" /><p className="home">Figma </p></div><br />
  <div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true" alt="" /><p className="home"> ATC Android ToTo C...</p></div><br />
  <div className="a"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" /><p className="home">Alux.com </p></div><br />
</div>

    
      </div>
    </div>
  );
}

export default App;
