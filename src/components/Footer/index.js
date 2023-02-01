import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Footer.css';
import Voltar from '../assets/voltar.svg';
import { LinkSocial } from '../Navbar/LinkSocial';

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
        <div className="voltarTopo">
          <img src={Voltar} alt="voltar" onClick={this.scrollToTop} />
        </div>
      </footer>
    );
  }
}
