import React from 'react';
import './Header.css';
import GitHub from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';

export default function Header() {
  const menu = ['Sobre', 'Habilidades', 'Projetos', 'Contato'];

  return (
    <header>
      <div className="container-menu">
        <ul>
          <li className="home">
            <h1>Hélvis Mykon</h1>
          </li>
          {menu.map((text, index) => (
            <li className="option" key={index}>
              <p>{text}</p>
            </li>
          ))}
        </ul>
        <div className="linkSocialFixed">
          <a href="https://www.linkedin.com/in/mykon89/">
            <img src={Linkedin} alt="Logo Linkedin" />
          </a>
          <a href="https://github.com/Mykon89">
            <img src={GitHub} alt="Logo GitHub" />
          </a>
          <a href="https://www.instagram.com/mykon89/">
            <img src={Instagram} alt="Logo Instagram" />
          </a>
        </div>
      </div>
    </header>
  );
}
