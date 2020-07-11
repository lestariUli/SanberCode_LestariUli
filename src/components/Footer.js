import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div class="social-container">
      <h5>Social Media TobaFood_Lestari</h5>
      <p>TobaFood_Lestarii dibangun dalam rangka memenuhi Final Project Bootcamp React.js di SanberCode. </p>
      <a href="#" className="youtube social">
        <FontAwesomeIcon icon= {faYoutube} size="2x" />
      </a>
      <a href="#"
      className="facebook social">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default Footer;