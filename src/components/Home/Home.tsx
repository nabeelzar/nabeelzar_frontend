import React from "react";
import "./home.scss";

import github_image from "../../assets/github.svg";
import linkedin_image from "../../assets/linkedin.svg";

export const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div className="homeTextHolder">
        <div className="homeTextSmall">Hello,</div>
        <div className="homeTextLarge">I'm Nabeel Zar Khan</div>
        <div className="homeTextSmall">Software Engineer</div>
        <div className="socialButtonHolder">
          <SocialButton text="Github" imgLoc={github_image} />
          <SocialButton text="LinkedIn" imgLoc={linkedin_image} />
        </div>
      </div>
    </div>
  );
};

interface Props {
  text: string;
  imgLoc: string;
}

export const SocialButton: React.FC<Props> = ({ text, imgLoc }) => {
  return (
    <div className="socialButton">
      <a href="https://google.com" title={text}></a>
      <img src={imgLoc} alt={text} />
    </div>
  );
};
