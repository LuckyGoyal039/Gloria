import React, { Component } from "react";
import "../style/NavBarDemo.css";
import mainLogo from '../Gloria-logo.png';
import {
  Navbar,
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Image from "react-bootstrap/Image";
import "../Gloria-logo.png";
import {Link} from 'react-router-dom';

class NavbarComp extends Component {
  render() {
    return (
      <Navbar expand="md" className="py-3">
        <Navbar.Brand id="navbar-brand">
          <img src={mainLogo} id="logo" alt="loadingImage"/>
        </Navbar.Brand>
        <Navbar.Toggle class="toggle-burger" />
        <Navbar.Collapse>
          <Nav className="me-auto ms-auto my-navbar-buttons justify-content-evenly">
            <Nav.Link style={{ color: "#3A69CD" }}>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link style={{ color: "#3A69CD" }} id="active">
              <Link to='/login'>Sign In</Link>
            </Nav.Link>
            <Nav.Link style={{ color: "#3A69CD" }}>
              Search
            </Nav.Link>
            <Nav.Link style={{ color: "#3A69CD" }}>
              Upload
            </Nav.Link>
            <Nav.Link style={{ color: "#3A69CD" }}>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComp;