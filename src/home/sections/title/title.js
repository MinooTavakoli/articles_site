import React from "react";
import Button from "../../../components/buttons/button";
import "./title.css";

function Title() {
  return (
    <div className="title-component">
      <div className="title-wrapper">
        <br />
        <span>GET INFORMED</span>
        <br />
        <span>GET INSPIRED</span>
      </div>
      <br />
      <div className="description-wrapper">Stories Curated For You</div>
      <br />
      <Button label="Sign up" type="danger" />
    </div>
  );
}

export default Title;
