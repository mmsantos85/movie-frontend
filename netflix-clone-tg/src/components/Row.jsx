import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import '../style.css';

const Row = ({ genre, type, id }) => {
  const button = document.getElementById('slide');
  // const button2 = document.getElementById('slide2');

  // button.onClick = function () {
  //   ;
  // };
  return (
    <div className="container">
      <h2>{type && type}</h2>
      <button
        onClick={() =>
          (document.getElementById(`slider${id}`).scrollLeft -= 200)
        }
      >
        <BsChevronLeft />
      </button>
      <button
        onClick={() =>
          (document.getElementById(`slider${id}`).scrollLeft += 200)
        }
        style={{ marginLeft: '3%' }}
      >
        <BsChevronRight />
      </button>

      <div className="row" id={`slider${id}`}>
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
