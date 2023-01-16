import Image from "next/image";
import Link from "next/link";
import { useReducer } from "react";
import { CgMenuRight } from "react-icons/cg";
import { SlClose } from "react-icons/sl";

import { Button } from "../button";
import { Container, Nav } from "./styles";

export function NavBar() {
  const [sidebarVisible, toggleSidebarVisible] = useReducer(
    (visible) => !visible,
    false
  );

  return (
    <Container>
      <div className="image">
        <Image src="/logo.png" alt="Logo da Sharenergy" fill />
      </div>
      <Nav visible={sidebarVisible}>
        <button
          aria-label="fechar sidebar"
          className="close-button"
          onClick={toggleSidebarVisible}
        >
          <SlClose />
        </button>
        <ul>
          <li>
            <Link href="/sobre-nos">Sobre nós</Link>
          </li>
          <li>
            <Link href="/servicos">Serviços</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
          <li>
            <Link href="/carreiras">Carreiras</Link>
          </li>
          <li>
            <Link href="/orcamento">
              <Button>Orçamento</Button>
            </Link>
          </li>
        </ul>
      </Nav>
      <button
        aria-label="abrir sidebar"
        className="menu-button"
        onClick={toggleSidebarVisible}
      >
        <CgMenuRight />
      </button>
    </Container>
  );
}
