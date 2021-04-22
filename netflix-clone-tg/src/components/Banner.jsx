import React, { useState, useEffect } from 'react';
import '../style.css';

import axios from '../axios';
import ReactPlayer from 'react-player/youtube';
import requests from '../Requests';
import { AiFillCloseCircle } from 'react-icons/ai';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState(false);

  // tijdelijke API call
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      setMovie(request.data.results[2]);
      return requests;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster__path
        }")`,
      }}
    >
      {active ? (
        <div className="player-wrapper">
          <ReactPlayer
            playing={true}
            className="react-player"
            url="https://www.youtube.com/watch?v=a-o8xbEcuSY"
            width="100%"
            height="100%"
          />
          <button onClick={() => setActive(!active)} className="player__button">
            x
          </button>
        </div>
      ) : (
        <>
          <div className="banner__contents">
            <h1 className="banner__contents__title">{movie.original_title}</h1>

            <div className="banner__contents__buttons">
              <button
                onClick={() => setActive(true)}
                className="banner__button"
              >
                Afspelen
              </button>
              <button
                onClick={() => setDetails(true)}
                className="banner__button"
              >
                Meer informatie
              </button>
            </div>
            <h1 className="banner__contents__description">
              {truncate(`${movie.overview}`, 150)}
            </h1>
          </div>
          <div className="banner--fadeBottom" />
        </>
      )}
      {details ? (
        <div className="pop-up">
          <ReactPlayer
            playing={true}
            muted={true}
            className="pop-up__react-player"
            url="https://www.youtube.com/watch?v=a-o8xbEcuSY"
            width="100%"
            height="100%"
          />
          <div className="pop-up__trailer"></div>
          <span className="pop-up__close">
            <AiFillCloseCircle onClick={() => setDetails(false)} />
          </span>
          <div className="pop-up__content">
            <h1 className="pop-up__content__title">{movie.original_title}</h1>
            <div className="pop-up__content__description">
              <p className="release">
                <span className="average">Cijfer {movie.vote_average}</span>
                {` ${movie.release_date}`}
              </p>

              <img
                src="https://cdn.worldvectorlogo.com/logos/kijkwijzer.svg"
                alt=""
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/kijkwijzer-geweld.svg"
                alt=""
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/kijkwijzer-angst.svg"
                alt=""
              />
            </div>
            <div className="pop-up__content__container">
              <div className="description">
                <p>{movie.overview}</p>
              </div>
              <div className="genres">genre: Action</div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </header>
  );
};

export default Banner;

// Math.floor(Math.random() * request.data.results.length - 1)
