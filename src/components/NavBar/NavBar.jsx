import React from "react";
import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = props => {
  let nav =
    props.user === null ? (
      <>
        <Navbar bg="dark" variant="dark" fixed="top" >
          <Navbar.Brand href="/">Pitch Sitch</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/login" className="mr-auto">Log In</Nav.Link>
            <Nav.Link href="/signup" className="mr-auto">Sign Up</Nav.Link>
          </Nav>
        </Navbar>
      </>
    ) : (
      <>
        <Navbar bg="dark" variant="dark" fixed="top" >
          <Navbar.Brand href="/home">Pitch Sitch</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/myteams">My Teams</Nav.Link>
            <Nav pullRight>
            <Nav.Link href="/" onClick={props.handleLogout}>Log out</Nav.Link>
            </Nav>
          </Nav>
        </Navbar>
      </>
    );

  return (
    <div>
      {nav}
      {props.children}
    </div>
  );
};

export default NavigationBar;
