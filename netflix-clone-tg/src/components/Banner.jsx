import React, { useState, useEffect } from "react";
import "../style.css";

import axios from "../axios";
import ReactPlayer from 'react-player/youtube'
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [active, setActive] = useState(false);

  // tijdelijke API call
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return requests;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster__path}")`,
      }}
    > 
      {/* <div className="banner__contents">
        <h1 className="banner__contents__title">{movie.original_title}</h1>
       
        <div className="banner__contents__buttons">
          <button onClick={()=> setActive(true)} className="banner__button">Afspelen</button>
          <button className="banner__button">Meer informatie</button>
        </div>
        <h1 className="banner__contents__description">{truncate(`${movie.overview}`, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" /> */}
      
      
        {active ? (<div className='player-wrapper'><ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        /></div>): <> <div className="banner__contents">
        <h1 className="banner__contents__title">{movie.original_title}</h1>
       
        <div className="banner__contents__buttons">
          <button onClick={()=> setActive(true)} className="banner__button">Afspelen</button>
          <button className="banner__button">Meer informatie</button>
        </div>
        <h1 className="banner__contents__description">{truncate(`${movie.overview}`, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" /> </>}
        
      

    </header>
    
  );
};

export default Banner;
