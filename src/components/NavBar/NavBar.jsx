import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


const Navbar = props => {
  let nav =
    props.user === null ? (
    //   <ul className="navbar-nav ml-auto">
    //     <Link to="/signup">
    //       <li className="nav-item">
    //         <div className="nav-link">Signup | </div>
    //       </li>
    //     </Link>
    //     <Link to="/login">
    //       <li className="nav-item">
    //         <div className="nav-link">Login | </div>
    //       </li>
    //     </Link>
    //   </ul>
    // ) : (
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <Link to="/myteams" style={{ textDecoration: "none" }}>
    //         <li className="nav-item">
    //           <div className="nav-link" >My Teams | </div>
    //         </li>
    //       </Link>
    //     </ul>

    //     <ul className="navbar-nav ml-auto">
    //       <Link to="/">
    //         <li className="nav-item">
    //           <div className="nav-link" onClick={props.handleLogout}>
    //             Logout |
    //           </div>
    //         </li>
    //       </Link>
    //       <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>        </ul>
    //   </div>
    // );
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="">
<span className="nav-link">Pitch Sitch | </span>
</Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link to="/search">
    <span className="nav-link">Search | </span>
    </Link>
    </li>
    <li class="nav-item">
      <Link to="/signup">
        <span className="nav-link" >Sign Up | </span>
      </Link>
    </li>
    <li class="nav-item">
      <Link to="/login">
      <span className="nav-link" >Log In</span>
      </Link>
    </li>

  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>
    ) : (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="">
    <span className="nav-link">Pitch Sitch | </span>
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to="/search">
        <span className="nav-link">Search | </span>
        </Link>
        </li>
        <li class="nav-item">
          <Link to="/myteams">
            <span className="nav-link" >My Teams | </span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/">
          <span className="nav-link" onClick={props.handleLogout}>Log Out</span>
          </Link>
          <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        </li>

      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
 
    );

  return (
    <div>
  
        {nav}
  
      {props.children}
    </div>
  );
};

export default Navbar;
