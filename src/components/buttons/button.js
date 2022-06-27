import React from "react";
import "./button.css";

function Button({ label = "", onClick = () => {}, type = undefined }) {
  return (
    <>
      {type === "outline" && (
        <button onClick={onClick} className="operation-outline-button">
          {label}
        </button>
      )}
      {type === "danger" && (
        <button onClick={onClick} className="operation-danger-button">
          {label}
        </button>
      )}
      {type === "none" && (
        <button onClick={onClick} className="operation-none-button">
          {label}
        </button>
      )}
    </>
  );
}

export default Button;
