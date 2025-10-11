import { useState, useRef } from "react";
import appleIcon from "./assets/images/apple-icon.svg";
import arrowRight from "./assets/images/arrow-right.svg";
import bigLogo from "./assets/images/big-logo.png";
import company from "./assets/images/company1.png";
import company2 from "./assets/images/company2.png";
import company3 from "./assets/images/company3.png";
import company4 from "./assets/images/company4.png";
import company5 from "./assets/images/company5.png";
import dashboard from "./assets/images/dashboard-asg-icon.svg";
import eco from "./assets/images/eco-icon.svg";
import kids from "./assets/images/happy-kids-food.png";
import leaf from "./assets/images/leaf.svg";
import leaf2 from "./assets/images/leaf2-icon.svg";
import logo from "./assets/images/logo.png";
import manyLeafs from "./assets/images/many-leafs.svg";
import merendApp from "./assets/images/merendapp.svg";
import upRightArrow from "./assets/images/up-right-arrow.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";

export default function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const goToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <body className="body-bg-color py-xl">
        <header id="header-top" className=" container-gab py-base">
          <img src={logo} alt="Logo" className="" />
          <nav className="header-list  desktop-only">
            <ul className="">
              <li>
                <a onClick={() => goToSection(homeRef)}>Home</a>
              </li>
              <li>
                <a onClick={() => goToSection(aboutRef)}>Sobre nós</a>
              </li>
              <li>
                <a onClick={() => goToSection(contactRef)}>Contato</a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=RtJKhbwuYBk"
                >
                  Video
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="header-button"
            onClick={() => goToSection(contactRef)}
          >
            Comece já
          </button>
        </header>
        {/* /////////////////////////////////////CSS já foi */}
        <main className="flex">
          <section id="hero" ref={homeRef} className=" container-gab py-lg ">
            <div className="order02">
              <img
                src={kids}
                alt="Crianças felizes pegando comida"
                className="kids-img"
              />
            </div>

            <div className="hero-card order01">
              <div className="">
                <img
                  className=""
                  src={appleIcon}
                  alt="Icone de uma maça com fundo verde"
                />
                <p className="">55K+</p>
              </div>
              <div className="">
                <p>Refeições entregues</p>
                <span>
                  Alimentamos milhares de alunos todos os dias com segurança e
                  qualidade.
                </span>
              </div>
            </div>

            <div className="hero-card">
              <div className="">
                <img src={dashboard} alt="Icone de uma maça com fundo verde" />
                <p>20%</p>
              </div>
              <div className="">
                <p>de redução de custos</p>
                <span>
                  Economia comprovada com uso de dados e automação na gestão de
                  merenda.
                </span>
              </div>
            </div>
          </section>
          {/* /////////////////////////////////////CSS já foi */}
          <div id="separator-box" className="container-gab order02">
            <div id="separator"></div>
          </div>
          {/* /////////////////////////////////////CSS já foi */}

          <section id="try-now" className=" container-gab py-lg order01">
            <div className="">
              <h2>Tecnologia que alimenta o futuro da educação</h2>
              <p>
                Com o merendApp, a gestão da alimentação escolar se torna mais
                eficiente, econômica e inteligente.
              </p>
              <div id="btn-wrap" className="main-sub-buttons-container">
                <button
                  className="main-sub-button-primary"
                  onClick={() => goToSection(contactRef)}
                >
                  Veja como funciona
                  <img src={upRightArrow} alt="Icone de uma seta para cima" />
                </button>

                <button className="" onClick={() => goToSection(contactRef)}>
                  Teste agora
                  <img
                    src={arrowRight}
                    alt="Icone de uma seta para a direita"
                  />
                </button>
              </div>
            </div>
          </section>

          {/* /////////////////////////////////////CSS já foi */}

          <section id="about" ref={aboutRef} className="container-gab py-xl ">
            <div className="container-gab">
              <div id= "about-box" className=" ">
                <img
                  className="desktop-only"
                  src={bigLogo}
                  alt="Logo da merendApp grande"
                />
                <div className="about-us-info-container">
                  <h2>Sobre nós</h2>
                  <p>
                    No MerendApp, unimos tecnologia e propósito social para
                    transformar a forma como instituições de ensino se conectam
                    com fornecedores de alimentos. Criamos uma plataforma que
                    promove transparência, agilidade e qualidade em cada etapa
                    da alimentação escolar.
                    <br />
                    <br />
                    Trabalhamos para garantir que estudantes recebam refeições
                    mais nutritivas, enquanto escolas e fornecedores economizam
                    tempo, reduzem desperdícios e fortalecem parcerias
                    sustentáveis.
                  </p>
                  <div className="about-us-info-with-icon-container about-mini-card-wrap">
                    <div className=" about-mini-card">
                      <div className="head">
                        <img src={leaf} alt="" />
                        <p>
                          Desenvolvido para <br />o máximo Impacto
                        </p>
                      </div>
                      <p className="about-us-icon-with-text-subtitle">
                        Tecnologia que simplifica processos e potencializa o
                        alcance da merenda escolar.
                      </p>
                    </div>
                    <div className="about-mini-card">
                      <div className="head">
                        <img src={manyLeafs} alt="" />
                        <p>
                          Eficiência em cada <br />
                          etapa
                        </p>
                      </div>
                      <p className="about-us-icon-with-text-subtitle">
                        Da cotação à entrega, o MerendApp automatiza processos e
                        reduz desperdícios logísticos.
                      </p>
                    </div>
                  </div>
                  <div className="about-us-info-card">
                    <div>
                      <p>55K+</p>
                      <span>Refeições entregues pelo Brasil</span>
                    </div>
                    <div>
                      <p>12+</p>
                      <span>Estados com escolas ativas na plataforma</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ///////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////CSS já foi */}

              <div id="about-card-wrap" className=" py-lg">
                <div className="about-card py-base px-lg">
                  <div className="">
                    <img src={leaf} alt="" />
                    <p>55K+</p>
                  </div>
                  <span>Produtos monitorados com critérios nutricionais</span>
                </div>
                <div className="about-card py-base px-lg">
                  <div className="">
                    <img src={leaf2} alt="" />
                    <p>86+</p>
                  </div>
                  <span>Fornecedores parceiros aprovados</span>
                </div>
                <div className="about-card py-base px-lg">
                  <div className="">
                    <img src={eco} alt="" />
                    <p>
                      4.9<span>/5</span>
                    </p>
                  </div>
                  <span>Avaliação média de satisfação das instituições</span>
                </div>
              </div>
              {/* /////////////////Quem confia no MerendApp////////////////////////////////////////////// */}
              <section id="trusters" className="">
                <h3 className="company-title">Quem confia no MerendApp</h3>
                <div className="">
                  <div className="company-card">
                    <img src={company} alt="1" />
                  </div>
                  <div className="company-card">
                    <img src={company3} alt="2" />
                  </div>
                  <div className="company-card">
                    <img src={company2} alt="3" />
                  </div>
                  <div className="company-card">
                    <img src={company4} alt="4" />
                  </div>
                  <div className="company-card">
                    <img src={company5} alt="5" />
                  </div>
                </div>
              </section>

              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              <Testimonials />
            </div>
          </section>
      <div className="order00">

          <ContactForm ref={contactRef} />
          <FAQ />
      </div>
        </main>

        <div id="customModal" className="custom-modal">
          <div className="custom-modal-content">
            <span className="custom-close-button">&times;</span>
            <h2>Mensagem Enviada</h2>
            <div id="customModalBody"></div>
          </div>
        </div>
        {/* /////////////////////////////////////CSS já foi */}

        <footer className="container-gab px-lg">
          <img src={merendApp} alt="" id="logo" />

          <div className="col mb-3">
            <h5>Menu</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  onClick={() => goToSection(homeRef)}
                  className="nav-link p-0 text-body-secondary lol"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  onClick={() => goToSection(aboutRef)}
                  className="nav-link p-0 text-body-secondary"
                >
                  Sobre nós
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  onClick={() => goToSection(contactRef)}
                  className="nav-link p-0 text-body-secondary"
                >
                  Contato
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  className="nav-link p-0 text-body-secondary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=RtJKhbwuYBk"
                >
                  Video
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Social</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Contato</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="mailto:email@merendapp.com.br"
                  className="nav-link p-0 text-body-secondary"
                >
                  email@merendapp.com.br
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  +55 11 99999-9999
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Rua dos Bobos N 0
                </a>
              </li>
            </ul>
          </div>
        </footer>
        {/* /////////////////////////////////////CSS já foi */}
      </body>
    </>
  );
}
