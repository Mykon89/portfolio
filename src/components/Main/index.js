import React from 'react';
import './Main.css';
import ReactJS from '../assets/reactjs.svg';
import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';
import JavaScript from '../assets/javascript.svg';
import Bootstrap from '../assets/bootstrap.svg';
import Whatsapp from '../assets/whatsapp.svg';
import Email from '../assets/email.svg';
import Cronometro from '../assets/cronômetro.png';
import Portfolio from '../assets/portfolio.png';
import Aluratube from '../assets/aluratube.png';
import Organo from '../assets/organo.png';
import Login from '../assets/tela-login.png';

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
      image: `${Cronometro}`,
      title: 'Cronômetro',
      description: 'Cronômetro desenvolvido na aula do curso Alura',
      link: 'https://cronometro-helvis-mykon.vercel.app/',
    },
    {
      image: `${Portfolio}`,
      title: 'Portfólio',
      description: 'Portfólio criado para apresentar meus projetos.',
      link: 'https://portfolio-helvis-mykon.vercel.app/',
    },
    {
      image: `${Aluratube}`,
      title: 'Aluratube',
      description: 'Página estilo Youtube',
      link: 'https://aluratube-mykon89.vercel.app/',
    },
    {
      image: `${Organo}`,
      title: 'Organo',
      description: 'Organograma criado em conjunto com as aulas do Alura',
      link: 'https://organo-orpin.vercel.app/',
    },
    {
      image: `${Login}`,
      title: 'Tela de Login',
      description: 'Criação para testar minhas habilidades.',
      link: 'https://tela-login-helvis-mykon.vercel.app/',
    },
  ];

  const contacts = [
    {
      image: `${Whatsapp}`,
      title: 'Whatsapp',
      description: '(+55) 61 9 91841232',
      link: 'https://contate.me/helvis-mykon',
    },
    {
      image: `${Email}`,
      title: 'E-mail',
      description: 'helvis89@gmail.com',
      link: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Portfolio+H%C3%A9lvis+Mykon&to=helvis89@gmail.com',
    },
  ];
  return (
    <main>
      <section className="container bgHome">
        <h2 className="titleHome">Portfólio Profissional de Hélvis Mykon</h2>
        <p className="descriptionHome">
          Desenvolvedor Front-End, Criação de Sites com Inteligência e Código
          Estruturado
        </p>
      </section>

      <section className="container" title="Sobre" id="sobre">
        <div className="about">
          <div>
            <h3>Sobre</h3>
            <p>
              Meu nome é Hélvis Mykon, tenho 33 anos. Um dos meus objetivos é
              atuar na área de desenvolvimento, tenho estudado e práticado muito
              e para o futuro conseguirei ainda mais conhecimento, este
              postfólio foi criado por mim no intuito de adquirir mais
              experiência e demonstrar um pouco do que sou capaz de criar.
              Utilizo de muitas plataformas de cursos gratuitos e pagos para
              refinar minhas habilidades. Almejo me desenvolver cada vez mais.
            </p>
          </div>
          <div className="imgPerfil">
            <img
              src="https://avatars.githubusercontent.com/u/104459249?v=4"
              alt="imagem perfil portfolio"
            />
          </div>
        </div>
      </section>

      <section className="container" title="Habilidades" id="habilidades">
        <div className="bgSkills"></div>
        <div className="skillTitle">
          <h3> Habilidades</h3>
          <p>
            Aqui você irá encontrar as tecnologias que eu utilizei para criar
            este portfólio e os aplicativos que estão demonstrados na aba de
            <strong> Projetos</strong>. Estarei sempre atualizando essa área
            assim que for concluindo mais projetos ou até mesmo na melhoria do
            próprio portfólio.
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

      <section className="container" title="Projetos" id="projetos">
        <div className="projectsTitle">
          <h3>Projetos</h3>
          <p>
            Reservei essa área para a demonstração dos projetos desenvolvidos
            por mim.
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
              <a
                href={project.link}
                className="projectDescription"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="container" title="Contato" id="contato">
        <div className="contactTitle">
          <h3>Contato</h3>
          <p>Gostou do que viu? Entre em contato!</p>
        </div>
        <div className="contact">
          {contacts.map(contact => (
            <div className="containerContact" key={contact}>
              <div>
                <a href={contact.link} target="_blank" rel="noreferrer">
                  <img src={contact.image} alt="imagem" />
                </a>
              </div>
              <div className="imgDescription">
                <h3>{contact.title}</h3>
                <p>{contact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
