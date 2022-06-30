import React from "react";
import notFound from "../../assets/images/notFound.jpg";
import "./notFound.css";

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <img src={notFound} alt="not found" className="not-found-image" />
      <div className="not-found-text">No results found</div>
    </div>
  );
}

export default NotFound;
