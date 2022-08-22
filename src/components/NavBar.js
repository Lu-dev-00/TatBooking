
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContect';


export default function NavBar () {
    const {isLoggedIn, getUser} = useAuth();
    const user = getUser();
    const loggedIn = isLoggedIn();
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">TATOO</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Pricing</Nav.Link>
              <Nav.Link>Support</Nav.Link>
            </Nav>
            <Nav>
              {loggedIn
                ? <Link to="/profile" className='text-white'>Profile</Link>
                : <>
                  <Link to="/signup" className='btn btn-outline-light ms-1 text-white'>Sign Up</Link> |{" "}
                  <Link to="/login" className='btn btn-light ms-1 text-dark'>Sign In</Link> |{" "}
                </>
              }
              <Nav.Link href="#deets"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

