import Image from "next/image";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="item">
        <Image
          src={"/logo.png"}
          alt={"Logo da Share Energy"}
          width={300}
          height={32}
        />
        <div className="contacts">
          <span>(31) 3236-1585</span>
          <span>(31) 98526-1434</span>
          <a href="mailto:contato@sharenergy.com.br">
            <span>contato@sharenergy.com.br</span>
          </a>
        </div>
        <div className="social">
          <a href="/">
            <AiFillFacebook />
          </a>
          <a href="/">
            <AiFillTwitterSquare />
          </a>
          <a href="/">
            <AiFillInstagram />
          </a>
          <a href="/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className="item">
        <span className="title">Páginas</span>
        <ul>
          <li>
            <a href="/">Sobre nós</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Serviços</a>
          </li>
        </ul>
      </div>
      <div className="item">
        <span className="title">Energia Solar</span>
        <ul>
          <li>
            <a href="/">Residencial</a>
          </li>
          <li>
            <a href="/">Empresas</a>
          </li>
          <li>
            <a href="/">Agronegócio</a>
          </li>
          <li>
            <a href="/">Indústrias</a>
          </li>
        </ul>
      </div>
      <div className="item">
        <span className="title">Cases</span>
        <ul>
          <li>
            <a href="/">Frigorífico Companhia de Carne</a>
          </li>
          <li>
            <a href="/">Prima Línea</a>
          </li>
          <li>
            <a href="/">Fortline Calçados</a>
          </li>
          <li>
            <a href="/">Residencial</a>
          </li>
        </ul>
      </div>
      <div className="item">
        <span className="title">Legal</span>
        <ul>
          <li>
            <a href="/">Política de Privacidade</a>
          </li>
          <li>
            <a href="/">Termos e Condições</a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
