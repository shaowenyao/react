import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    burgerToggle() {
      let linksEl = document.querySelector('.narrowLinks');
      if (linksEl.style.display === 'block') {
        linksEl.style.display = 'none';
      } else {
        linksEl.style.display = 'block';
      }
    }
    render () {
      return (
  
        <header>
        <nav>
        <div className="navWide">
        <div className="wideDiv">
        <Link to="/">WORK</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        </div>
        </div>
        <div className="navNarrow">
        <span className="fa fa-bars fa-2x navNarrowBtn" onClick={this.burgerToggle}>MENU</span>
        <div className="narrowLinks">
        <Link to="/" onClick={this.burgerToggle} >WORK</Link>
        <Link to="/about"onClick={this.burgerToggle} >ABOUT</Link>
        <Link to="/contact" onClick={this.burgerToggle} >CONTACT</Link>
        </div>
        </div>
        </nav>
        </header>
        );
    }
  };

  export default Header;