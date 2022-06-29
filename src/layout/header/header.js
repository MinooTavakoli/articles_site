import React, { useState } from "react";
import flipboard_logo from "../../assets/images/Flipboard_logo.png";
import Button from "../../components/buttons/button";
import searchIcon from "../../assets/icons/search.png";
import "./header.css";

function Header({ data = [], onSubmit = () => {} }) {
  const [search, setSearch] = useState("");

  // const resultSearch = data.find((_dataItem) => _dataItem.title === search);

  //  let resultSearch = [];
  // if (search.length === 0) {
  //   resultSearch = data;
  // } else {
  //   resultSearch = data.filter((_dataItem) => {
  //     if (_dataItem.title === search) {
  //       return _dataItem;
  //     }
  //   });
  // }

  let resultSearch = data.filter((_dataItem) => {
    if (_dataItem.title === search) {
      return _dataItem;
    }
  });

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
            <img
              src={searchIcon}
              alt="search_icon"
              className="search-icon"
              onClick={() => {
                onSubmit(resultSearch);
              }}
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
