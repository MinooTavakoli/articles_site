import React, { useState } from "react";
import flipboard_logo from "../../assets/images/Flipboard_logo.png";
import Button from "../../components/buttons/button";
import "./header.css";

function Header({ data = [], onSubmit = () => {} }) {
  const [search, setSearch] = useState("");

  const resultSearch = data.find((_dataItem) => _dataItem.title === search);

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
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="operation-input-search"
              type="text"
              placeholder="Search Flipboard"
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  onSubmit(resultSearch);
                }
              }}
            />
            <button
              onClick={() => {
                onSubmit(resultSearch);
              }}
            >
              search
            </button>
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
