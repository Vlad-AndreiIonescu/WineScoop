import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Header = () => {
  const headerStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    display: "flex",
    justifyContent:"center",
    // maxWidth: "800px",
    border:"2px solid blue",
    textAlign:"center"
  };

  const [isInputVisible, setInputVisible] = useState(false);

  const handleButtonClick = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div style={headerStyle} className="section">
      <div className="button-container">
        <a className="btn-outline-primary" href="ceva" role="button">
          Home
        </a>
        <a className="btn-outline-primary" href="ceva" role="button">
          About
        </a>
        <a className="btn-outline-primary" href="products" role="button">
          Products
        </a>
        <a className="btn-outline-primary" href="ceva" role="button">
          Service
        </a>
        <a className="btn-outline-primary" href="ceva" role="button">
          Contact
        </a>
      </div>

      {/* <div className="input-group">
        {isInputVisible && (
          <input
            type="search"
            id="form1"
            className="form-control custom-input"
          />
        )}
        <button
          type="button"
          className="btn btn-secondary"
          style={{
            backgroundColor: "orange",
            border: "orange",
            marginTop: "3.5rem",
            marginBottom: "3rem",
          }}
          onClick={handleButtonClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div> */}
    </div>
  );
};
