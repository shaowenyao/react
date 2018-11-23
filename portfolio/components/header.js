import React from 'react';
import './header.css';
import { NavbarToggler, Collapse, NavbarBrand, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import logoMobile from '../assets/img/logo_mobile.png';
import logoDesktop from '../assets/img/logo_desktop.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div id="header">
        <div id="desktopMenu">
          <Nav className="nav">
            <NavLink className="nav-link text-left" id="logo" href="/"><img src={logoDesktop} alt="logo"  /></NavLink>
            <NavLink className="nav-link text-right align-bottom textlink" href="/">work</NavLink>
            <NavLink className="nav-link text-right align-baseline textlink" href="/about">about</NavLink>
          </Nav>
        </div>
        <div id="mobileMenu">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto" id="logo"><img src={logoMobile} alt="logo" id="logo" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar id="mobileContainer">
              <Nav navbar>
                <NavItem>
                  <NavLink className="text-right" href="/">Work</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-right" href="/about">About</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}


export default Header;