import React from "react";
import "./SideBar.css";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

function SideBar() {
  return (
    <div className="nav-container">
      <h1 className="nav-head">
        <AccountCircleRoundedIcon
          style={{ height: "30px", width: "30px", marginRight: "5px" }}
        />
        Hello, Sign in
      </h1>
      <h2 className="head-text">Shop By Department</h2>
      <ul className="nav-items">
        <li className="nav-link">
          <a href="#">Today's deal</a>
        </li>
        <li className="nav-link">
          <a href="#">Customer Service</a>
        </li>
        <li className="nav-link">
          <a href="#">Registry</a>
        </li>
        <li className="nav-link">
          <a href="#">Gift cards</a>
        </li>
        <li className="nav-link">
          <a href="#">Sell</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
