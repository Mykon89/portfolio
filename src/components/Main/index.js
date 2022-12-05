import React from 'react';
import './Main.css';
import GitHub from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import ReactJS from '../assets/reactjs.svg';
import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';
import JavaScript from '../assets/javascript.svg';
import Bootstrap from '../assets/bootstrap.svg';

export default function Main() {
  const skills = [
    {
      image: `${ReactJS}`,
      title: 'ReactJS',
      description: 'Biblioteca JS',
    },
    {
      image: `${HTML}`,
      title: 'HTML',
      description: 'Linguagem de Marcação',
    },
    {
      image: `${CSS}`,
      title: 'CSS',
      description: 'Linguagem de Estilização',
    },
    {
      image: `${JavaScript}`,
      title: 'JavaScript',
      description: 'Linguagem de Programação',
    },
    {
      image: `${Bootstrap}`,
      title: 'Bootstrap',
      description: 'Framework CSS',
    },
  ];

  const projects = [
    {
      image: `${ReactJS}`,
      title: 'ReactJS',
      description: 'Eis o React.JS',
      link: 'aqui tem um link para acessar',
    },
    {
      image: `${ReactJS}`,
      title: 'ReactJS',
      description: 'Eis o React.JS',
      link: 'aqui tem um link para acessar',
    },
  ];

  return (
    <main>
      <div>
        <section className="container">
          <h2 className="titleHome">Portfólio Profissional de Hélvis Mykon</h2>
          <p className="descriptionHome">
            Desenvolvedor Front-End, Criação de Sites com Inteligência e Código
            Estruturado
          </p>
          <div className="links">
            <button>
              <span>Conhecer Sobre</span>
            </button>
            <a href="https://github.com/Mykon89">
              <span>GitHub</span>
            </a>
          </div>
          <div className="email">
            <p>helvis89@gmail.com</p>
          </div>
        </section>
        <div className="lineSeperator"></div>
        <section className="container">
          <div className="about">
            <div>
              <h3>Sobre</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
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
            </div>
            <div className="imgPerfil">
              <img
                src="https://avatars.githubusercontent.com/u/104459249?v=4"
                alt="imagem perfil portfolio"
              />
            </div>
          </div>
        </section>
        <div className="lineSeperator"></div>
        <section className="container">
          <div className="skillTitle">
            <h3> Habilidades</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div className="containerSkills">
            <div className="skills">
              {skills.map(skill => (
                <div className="containerSkill" key={skill}>
                  <div>
                    <img src={skill.image} alt="imagem" />
                  </div>
                  <div className="imgDescription">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="lineSeperator"></div>
        <section className="container">
          <div className="projectsTitle">
            <h3>Projetos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div className="cards">
            {projects.map(project => (
              <div
                className="card"
                key={project}
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                <a href="#" className="projectDescription">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </a>
              </div>
            ))}
          </div>
        </section>
        <div className="lineSeperator"></div>
        <section className="container">
          <div className="contato">
            <h3>Contato</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
