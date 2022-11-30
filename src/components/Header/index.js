import React from 'react';
import './Header.css';

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
      </div>
    </header>
  );
}
