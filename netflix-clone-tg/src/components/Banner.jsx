import React from "react";
import "../styles/Banner.css";
// testdd
const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://cdn.abcotvs.com/dip/images/1422532_071116-ss-netflix-generic-img.jpg?w=1600")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test description`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
