import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from "../images/pic1.png";
import img2 from "../images/pic2.png";
import img3 from "../images/pic3.png";
import img4 from "../images/pic4.png";
import { icons } from "react-icons";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer-container-devi">
  <div className="footer-heading-devi">
    NOW ACCEPTING BOOKING !<br />
    <div className="footer-main-heading-devi">
      <div className="footer-heading-2-devi">SHRI</div>
      <div className="footer-heading-3-devi">photography</div>
    </div>
    <div className="footer-button-devi">
      <button className="lets-chat-devi" type="button">
        LETS CHAT
      </button>
    </div>
    <div className="insta-follow-devi">FOLLOW US ON INSTAGRAM</div>
    <div className="footer-images-devi">
      <div className="image-1-devi">
        <img src={img1} alt=""  />
      </div>
      <div className="image-2-devi">
        <img src={img2} alt=""  />
      </div>
      <div className="image-3-devi">
        <img src={img3} alt=""  />
      </div>
      <div className="image-4-devi">
        <img src={img4} alt=""  />
      </div>
      <div className="shri-button-devi">
        <button className="shri-shri-button-devi" type="button">
          @shri_photography
        </button>
      </div>
      </div>
  </div>
  <div className="footer-copyright-icons-devi">
    <div className="footer-copyright-devi">
      <p> COPYRIGHT &copy; SHRI PHOTOGRAPHY</p>
      <div className="icons-devi">
      <a className="footer-icons-facebook-devi xyz">
        <FaFacebookF color="#4267B2" size="30px" />
      </a>
      <a className="footer-icons-whatsapp-devi xyz">
        <FaWhatsapp color="#25D366" size="30px" />
      </a>
      <a className="footer-icons-youtube-devi xyz">
        <FaYoutube color="#FF0000" size="30px" />
      </a>
      <a className="footer-icons-instagram-devi xyz">
        <FaInstagram color="#DD2A7B - rgb(221, 42, 123)" size="30px" />
      </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer;
