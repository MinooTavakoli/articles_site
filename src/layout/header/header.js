import React from "react";
import "./header.css";
import flipboard_logo from "../../assets/images/Flipboard_logo.png";
import Button from "../../components/buttons/button";

function Header() {
  return (
    <div className="header-component">
      <div className="header-wrapper">
        <div className="flipboard-logo-wrapper">
          <img
            src={flipboard_logo}
            alt="flipboard_logo"
            className="flipboard-logo-image"
          />
        </div>
        <div className="operation-wrapper">
          <div className="newsletters-title-section">Newsletters</div>
          <div>
            <input
              className="operation-input-search"
              type="text"
              placeholder="Search Flipboard"
            />
          </div>
          <div className="operation-button-wrapper">
            <Button label="Open in app" type="outline" />
            <Button label="Sign up" type="danger" />
            <Button label="Log in" type="none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
