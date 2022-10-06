import React, { useState } from "react";
import "./header.scss";

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

  const [open, setOpen] = useState<boolean>(false);

  const clickMenu = () => {
    setOpen(!open);
    console.log(`current state is: ${open}`);
  };
  return (
    <div className="header">
      <div className="hamburgerIcon" onClick={clickMenu}>
        <div className={open ? "change-bar1" : "bar1"}></div>
        <div className={open ? "change-bar2" : "bar2"}></div>
        <div className={open ? "change-bar3" : "bar3"}></div>
      </div>
      <div className={open ? "openMenu" : "openMenu_hidden"}>
        <div className="menuButtonHolder">
          {headerButtons.map(({ text, link }, index) => {
            return (
              <HeaderButton
                key={index}
                text={text}
                link={link}
                closeMenu={clickMenu}
              />
            );
          })}
        </div>
      </div>
      <div className="header__container">
        {headerButtons.map(({ text, link }, index) => {
          return <HeaderButton key={index} text={text} link={link} />;
        })}
      </div>
    </div>
  );
}

export default Header;

interface HeaderButtonProps {
  text: string;
  link: string;
  closeMenu?: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  link,
  closeMenu,
}) => {
  return (
    <div className="header__button">
      <Link to={link} onClick={closeMenu}>
        {text}
      </Link>
    </div>
  );
};
