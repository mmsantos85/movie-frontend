import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="container__icons">
          <h1 className="container__h1">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiOutlineTwitter />
            <AiFillYoutube />
          </h1>
        </div>
        <div className="row">
          {/* column 1 */}
          <div className="col1">
            <div className="col__icons"></div>
            <ul className="list-unstyled">
              <li>Audio en ondertiteling</li>
              <li>Mediacenter</li>
              <li>Privacy</li>
              <li>Contact opnemen</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Audioscriptie</li>
              <li>Relaties en investeerders</li>
              <li>Wettelijke bepalingen</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Helpcentrum</li>
              <li>Vacatures</li>
              <li>Cookievoorkeuren</li>
            </ul>
          </div>
          {/* column 4 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Cadeaubonnen</li>
              <li>Gebruiksvoorwaarden</li>
              <li>Bedrijfsgegevens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
