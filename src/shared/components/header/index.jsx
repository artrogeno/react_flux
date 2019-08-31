import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap'

const Header = () => (
  <Navbar color="dark-nav" dark expand="md" className="shadow-sm fixed-top">
    <NavbarBrand tag="div" className="text-green-flux font-weight-bold">
      React{' '}
      <span className="text-white">Flux</span>
    </NavbarBrand>
    <Nav navbar className="ml-auto">
      <NavItem>
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

export default Header
