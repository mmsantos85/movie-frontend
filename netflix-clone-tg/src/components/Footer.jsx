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
        <div className="row">
          {/* column 1 */}
          <div className="col">
            <div className="col__icons">
              <h4>
                <AiFillFacebook />
                <AiFillInstagram />
                <AiOutlineTwitter />
                <AiFillYoutube />
              </h4>
            </div>
            <ul className="list-unstyled-no-margin">
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
              <li>gebruiksvoorwaarden</li>
              <li>bedrijfsgegevens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
