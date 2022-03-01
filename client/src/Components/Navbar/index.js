import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarComponents'
import { Link } from "react-router-dom"

const NavBar = () => {



    return (

          <Nav>
                <NavLink to="/">
                    <img src="/Resources/logo.png" alt='' width="250" ></img>
                </NavLink>
                
                <NavMenu>
                    <NavLink to ="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to ="/learn" activeStyle>
                        Learn More
                    </NavLink>
                    <NavDropdown title="Pre-Builds" id="dropdown">
                        <NavDropdown.Item as={Link} to="/office" id="dropdown">for Office</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/gaming" id="dropdown">for Gaming</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/education" id="dropdown">for Education</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to ="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to ='/build'>Start Building!</NavBtnLink>
                </NavBtn>
          </Nav>
    )
}

export default NavBar
