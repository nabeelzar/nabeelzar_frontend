import React from "react";
import "./header.scss";

import hamburger_icon from "../../assets/hamburger.svg";

function Header() {
  const headerButtons: string[] = ["#Home", "#Projects", "#Contact"];

  return (
    <div className="header">
      <div className="hamburgerIcon">
        <img src={hamburger_icon} alt="menu" />
      </div>

      {headerButtons.map((headerOption, index) => {
        return (
          <div key={index} className="button">
            {headerOption}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
