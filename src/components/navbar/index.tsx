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
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt={"Logo da Share Energy"}
          width={300}
          height={32}
        />
      </Link>
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
            <Link href="/">Sobre nós</Link>
          </li>
          <li>
            <Link href="/">Serviços</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
          <li>
            <Link href="/">Carreiras</Link>
          </li>
          <li>
            <Link href="/">
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
