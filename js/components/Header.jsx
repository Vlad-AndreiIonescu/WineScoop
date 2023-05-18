import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <section style={{ display: "flex", alignItems: "center", gap: "300px" }}>
      <div className="imgDiv">
        <img src="/wine-svgrepo-com.svg" alt="Logo" className="logo" />
      </div>

      <div className="button-container">
        <a className="btn-outline-primary" href="ceva" role="button">
          Home
        </a>
        <a className="btn-outline-primary" href="ceva" role="button">
          About
        </a>
        <a className="btn-outline-primary" href="ceva" role="button">
          Products
        </a>
        <a className="btn-outline-primary" href="ceva" role="button">
          Service
        </a>
        <a className="btn-outline-primary" href="ceva" role="button">
          Contact
        </a>
      </div>
      <div className="input-group">
        <input type="search" id="form1" className="form-control custom-input" />
        <button
          type="button"
          className="btn btn-secondary"
          style={{
            backgroundColor: "orange",
            border: "orange",
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </section>
  );
};
