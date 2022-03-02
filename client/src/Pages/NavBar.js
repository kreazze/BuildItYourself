import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Background } from 'react-parallax';
import Logo from '../Images/logo.png';
import './NavBar.css';

const NavBar = () => {



    return (
        
        <Navbar collapseOnSelect expand="lg" variant="dark" className='NavBar'>
          <Container>
        <Navbar.Brand href="/">
          <img src={Logo}
            width="225"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about" >About us</Nav.Link>
            <Nav.Link href="/contact-us">Contact us</Nav.Link>
            <Nav.Link href="/learn">Learn more</Nav.Link>
            <NavDropdown title="Pre-Builds" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/office">For Office</NavDropdown.Item>
              <NavDropdown.Item href="/gaming">
                For Gaming
              </NavDropdown.Item>
              <NavDropdown.Item href="/education">For Education</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        <Button href="/build" className='ButtonNow'>Build Now!</Button>
        </Container>
      </Navbar>
      
    )
}

export default NavBar
