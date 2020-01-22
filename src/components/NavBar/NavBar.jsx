import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = props => {
  let nav =
    props.user === null ? (
      <ul className="navbar-nav ml-auto">
        <Link to="/signup">
          <li className="nav-item">
            <div className="nav-link">Signup</div>
          </li>
        </Link>
        <Link to="/login">
          <li className="nav-item">
            <div className="nav-link">Login</div>
          </li>
        </Link>
      </ul>
    ) : (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to="/myTeams" style={{ textDecoration: "none" }}>
            <li className="nav-item">
              <div className="nav-link">My Teams</div>
            </li>
          </Link>
        </ul>

        <ul className="navbar-nav ml-auto">
          <Link to="/">
            <li className="nav-item">
              <div className="nav-link" onClick={props.handleLogout}>
                Logout
              </div>
            </li>
          </Link>
          <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>        </ul>
      </div>
    );

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand" href="#"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="" style={{ textDecoration: "none" }}>
              <li className="nav-item active">
                <div className="nav-link">
                  Team Tracker<span className="sr-only">(current)</span>
                </div>
              </li>
            </Link>
            <Link to="/search" style={{ textDecoration: "none" }}>
            <li className="nav-item">
              <div className="nav-link">Search</div>
            </li>
          </Link>
          </ul>
          {nav}
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default Navbar;
