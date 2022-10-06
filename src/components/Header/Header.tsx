import React from "react";
import "./header.scss";

import hamburger_icon from "../../assets/hamburger.svg";
import { Link } from "react-router-dom";

function Header() {
  const headerButtons = [
    {
      text: "#Home",
      link: "/",
    },
    {
      text: "#Projects",
      link: "/projects",
    },
    {
      text: "#Contact",
      link: "/contact",
    },
    {
      text: "#Cat",
      link: "/cat",
    },
  ];

  return (
    <div className="header">
      <div className="hamburgerIcon">
        <img src={hamburger_icon} alt="menu" />
      </div>

      {headerButtons.map(({ text, link }, index) => {
        return <HeaderButton key={index} text={text} link={link} />;
      })}
    </div>
  );
}

export default Header;

interface HeaderButtonProps {
  text: string;
  link: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, link }) => {
  return (
    <div className="button">
      <Link to={link}>{text}</Link>
    </div>
  );
};
