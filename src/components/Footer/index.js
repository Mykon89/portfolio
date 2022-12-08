import React from 'react';
import './Footer.css';
import GitHub from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';

export default function Footer() {
  return (
    <footer>
      <div className="linkSocial">
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
    </footer>
  );
}
