import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap'

const Header = () => (
  <Navbar color="dark-nav" dark expand="md" className="shadow-sm fixed-top">
    <NavbarBrand tag="div" className="font-weight-bold">
      React{' '}
      <span className="text-green-flux">Flux</span>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink activeClassName="nav-active-link" className="nav-link" exact to="/">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeClassName="nav-active-link" className="nav-link" to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeClassName="nav-active-link" className="nav-link" to="/courses">
          Courses
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

export default Header
