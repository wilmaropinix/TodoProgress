import React from "react";
import heartImg from "@assets/heart.svg";
import "@styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      Made with
      <span>
        <img src={heartImg} alt="love" />
      </span>
      by ObedDev
    </footer>
  );
};

export default Footer;
