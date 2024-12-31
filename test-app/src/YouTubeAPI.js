



import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
//  const API_KEY =  'AIzaSyC4Z5La2dxtSE-Uq5Bsmt8QjvcSVdhfbTA';

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

  
 }

export default App;
