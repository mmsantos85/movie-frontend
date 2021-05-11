import React from 'react';
import '../style.css';

const Row = ({ genre, type }) => {
  return (
    <div className="container">
      <h2>{type && type}</h2>
      <div className="row">
        {genre.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
