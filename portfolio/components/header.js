import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Navs, Navbar } from 'reactstrap';


class Header extends React.Component{
    render () {
      return (
        <header>
          <nav>
              <Link to="/">WORK</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
          </nav>
        </header>
        );
    }
  };

  export default Header;