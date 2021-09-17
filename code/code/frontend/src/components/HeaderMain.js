import React from "react";
import "./HeaderMain.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function HeaderMain(props) {
  let user = false;
  let basket = [1, 2];

  return (
    <div className="header">
      <Link className="brand" to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__option">
        <span className="header__optionLineOneShip">Ship to</span>
        <div>
          <LocationOnIcon />
          <span className="header__optionLineTwo">Bangladesh</span>
        </div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__nav">
          <Link to="/cart">
            Cart
            {props.cartItems.length > 0 && (
              <span className="badge">{props.cartItems.length}</span>
            )}
          </Link>
          {props.userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {props.userInfo.name} <i className="fa fa-caret-down"></i>{" "}
              </Link>
              <ul className="dropdown-content">
                <Link to="/" onClick={props.onSignout}>
                  Sign Out
                </Link>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
