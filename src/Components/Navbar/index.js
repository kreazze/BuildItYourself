import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarComponents'

const NavBar = () => {
    return (

          <Nav>
              <NavLink to="/">
                  <img src="/Resources/logo.png" width="250" ></img>
              </NavLink>
              <Bars />
              <NavMenu>
                  <NavLink to ="/about" activeStyle>
                     About
                  </NavLink>
                  <NavLink to ="/learn" activeStyle>
                     Learn More
                  </NavLink>
                  <NavLink to ="/pre-build" activeStyle>
                     Pre-Builds
                  </NavLink>
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
