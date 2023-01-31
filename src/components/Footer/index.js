import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Footer.css';
import GitHub from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import Voltar from '../assets/voltar.svg';

export default class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <footer>
        <div className="copyRigth">
          <p>Portfólio criado por Hélvis Mykon.</p>
          <p>Todos os direitos reservados 2022 ₢.</p>
        </div>
        <div className="redeSocial">
          <a
            href="https://www.linkedin.com/in/mykon89/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Logo Linkedin" />
          </a>
          <a
            href="https://www.github.com/Mykon89"
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
        <div className="voltarTopo">
          <img src={Voltar} alt="voltar" onClick={this.scrollToTop} />
        </div>
      </footer>
    );
  }
}
