import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { LinkSocial } from './LinkSocial';
import './Navbar.css';
import Logo from '../assets/logo.svg';
import { animateScroll as scroll, Link } from 'react-scroll';

export default class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="NavbarItems" id="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" onClick={this.scrollToTop} />
        </div>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p>{item.text}</p>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="linkSocialFixed">
          <ul>
            {LinkSocial.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} target={link.target} rel={link.rel}>
                    <img src={link.image} alt={link.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
