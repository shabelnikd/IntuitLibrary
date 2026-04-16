import React from "react";
import '../styles/social.css'
import Instagramm from "../assets/images/icon__instagram.png"
import Whatsapp from "../assets/images/icon__whatsapp.png"

const Social = () => {
  return (
    <div>
      <a href="https://www.example.com">
        <div class="social-icons">
          <a
            href='https://www.instagram.com/moresushi_kg/'
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagramm}
              alt="Instagram"
            />
          </a>
          <a
            href="https://wa.me/996500505909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="Whastapp" />
          </a>
        </div>
      </a>
    </div>
  );
};

export default Social;