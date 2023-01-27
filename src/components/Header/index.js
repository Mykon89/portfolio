import { React, Component } from 'react';
import './Header.css';
import GitHub from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import Logo from '../assets/logo.svg';
import { animateScroll as scroll, Link } from 'react-scroll';

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    const menu = [
      { text: 'Sobre', id: 'sobre' },
      { text: 'Habilidades', id: 'habilidades' },
      { text: 'Projetos', id: 'projetos' },
      { text: 'Contato', id: 'contato' },
    ];

    return (
      <header>
        <nav className="nav" id="navbar">
          <div className="nav-content">
            <img
              src={Logo}
              className="nav-logo"
              alt="logo"
              onClick={this.scrollToTop}
            />
            <ul className="nav-items">
              {menu.map(menu => (
                <li className="nav-item" key={menu.id}>
                  <Link
                    activeClass="active"
                    to={menu.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p>{menu.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="linkSocialFixed">
            <a
              href="https://www.linkedin.com/in/mykon89/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Logo Linkedin" />
            </a>
            <a
              href="https://github.com/Mykon89"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHub} alt="Logo GitHub" />
            </a>
            <a
              href="https://www.instagram.com/mykon89/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Logo Instagram" />
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
