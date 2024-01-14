import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          {/* <a className="navbar-brand" href="#">
            {props.title}
          </a> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
              {/* <a className="nav-link" href="/About">
                About
              </a> */}
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div
            className="bg-primary rounded mx-2"
            onClick={() => {
              props.toggleMode("primary");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            onClick={() => {
              props.toggleMode("warning");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            onClick={() => {
              props.toggleMode("success");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            onClick={() => {
              props.toggleMode("danger");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="bg-light rounded mx-2"
            onClick={() => {
              props.toggleMode("light");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="bg-dark rounded mx-2"
            onClick={() => {
              props.toggleMode("dark");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "1px solid black",
            }}
          ></div>
        </div> 
        {/* <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => {
              props.toggleMode("null");
            }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle Mode
          </label>
        </div> */}
      </div>
    </nav>
  );
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here",
};
