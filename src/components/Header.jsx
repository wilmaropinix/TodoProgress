import React from "react";
import profileImg from "@assets/profile.jpg";
import waveImg from "@assets/wave.png";
import websiteImg from "@assets/web.svg";
import githubImg from "@assets/github.svg";
import linkedinImg from "@assets/linkedin.svg";
import twitterImg from "@assets/twitter.svg";
import "@styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="userInfo">
        <img className="profileImg" src={profileImg} alt="userImg" />
        <div className="welcome">
          <p>
            Bienvenido!
            <img src={waveImg} alt="waveImg" />
          </p>
          <h2>Obed BM</h2>
        </div>
      </div>

      <nav>
        <a target="_blank" href="#">
          <img src={websiteImg} alt="website" />
        </a>
        <a target="_blank" href="#">
          <img src={githubImg} alt="github" />
        </a>
        <a target="_blank" href="#">
          <img src={linkedinImg} alt="linkedin" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
