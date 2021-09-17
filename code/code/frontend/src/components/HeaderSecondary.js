import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./HeaderSecondary.css";

function HeaderSecondary() {
  return (
    <div className="header_sec">
      <ul className="nav__items">
        <li className="nav__link nav__link-icon">
          <MenuIcon style={{ height: "40px" }} />
          <a href="#">All</a>
        </li>
        <li className="nav__link">
          <a href="#">Today's deal</a>
        </li>
        <li className="nav__link">
          <a href="#">Customer Service</a>
        </li>
        <li className="nav__link">
          <a href="#">Registry</a>
        </li>
        <li className="nav__link">
          <a href="#">Gift cards</a>
        </li>
        <li className="nav__link">
          <a href="#">Sell</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderSecondary;
