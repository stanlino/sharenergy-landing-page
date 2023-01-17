import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

import {
  About,
  Background,
  Competences,
  Feedbacks,
  Hero,
  Main,
  Report,
  Separator,
  Services,
  ShowCase,
  UseCases,
} from "./styles";

export default function Home() {
  return (
    <Main>
      <Background />
      <header>
        <About>
          <h1>Economize com a Energia Solar!</h1>
          <p>
            Tenha ao seu lado uma equipe de especialistas em energia solar.
            Economia, segurança e retorno do seu investimento garantidos.
          </p>
          <Button>Quero um orçamento</Button>
        </About>
        <Hero>
          <Image
            src="/paineis.jpg"
            alt="Paineis solares espalhados enfileirados em um campo"
            width={803}
            height={536}
          />
        </Hero>
      </header>
      <Separator>
        <h2>
          Interessado em conhecer como funciona a energia solar fotovoltaica?
          <a href={"/"}>Veja o vídeo</a>
        </h2>
      </Separator>
      <Report>
        <div>
          <h2>Somos experts em fazer o Sol trabalhar para você.</h2>
          <p>
            Tenha descontos de até 98% na conta de luz. Investimento de baixo
            risco e de elevada rentabilidade financeira.
          </p>
          <Button>Veja como funciona</Button>
        </div>
        <div>
          <Image
            src="/instalacao.jpg"
            alt="Funcionário instalando painel solar"
            width={607}
            height={707}
          />
        </div>
        <div>
          <h2>3.800 MWH</h2>
          <p>Geração de energia total dos nossos clientes.</p>
          <h2>92 %</h2>
          <p>Índice de satisfação dos nossos clientes.</p>
          <h2>301 TON CO2</h2>
          <p>Total de emissões evitadas pelos nossos clientes.</p>
        </div>
      </Report>
      <UseCases>
        <div className="content">
          <h2>Ajudamos pessoas e empresas a gerar a própria energia</h2>
          <p>
            Acreditamos que a transição energética para uma matriz elétrica
            limpa e renovável só é possível com a democratização do acesso a
            estas tecnologias.
          </p>
          <Services>
            <Link href={"/"}>
              <Image width={480} height={360} src="/enterprise.jpg" alt="" />
              <div className="service">
                <span>Empresas</span>
                <BiRightArrowAlt />
              </div>
            </Link>
            <Link href={"/"}>
              <Image width={480} height={360} src="/residential.jpg" alt="" />
              <div className="service">
                <span>Residencial</span>
                <BiRightArrowAlt />
              </div>
            </Link>
            <Link href={"/"}>
              <Image width={480} height={360} src="/farm.jpg" alt="" />
              <div className="service">
                <span>Agronegócio</span>
                <BiRightArrowAlt />
              </div>
            </Link>
            <Link href={"/"}>
              <Image width={480} height={360} src="/industry.jpg" alt="" />
              <div className="service">
                <span>Indústria</span>
                <BiRightArrowAlt />
              </div>
            </Link>
          </Services>
        </div>
      </UseCases>
      <Competences>
        <div className="img">
          <Image
            width={600}
            height={600}
            id="back-svg"
            src="/back-felipe.svg"
            alt="Plano de fundo"
          />
          <Image width={356} height={457} src="/Felipe.png" alt="Felipe" />
        </div>
        <div className="aside">
          <h2>
            Razões para contar com a nossa equipe para o seu projeto solar.
          </h2>
          <p>
            Instalamos e acompanhamos a geração dos sistemas fotovoltaicos
            seguindo as melhores práticas e normas de engenharia para você
            começar a economizar com segurança.
          </p>
          <div className="competences">
            <div>
              <span>
                <b>✔</b> Experiência
              </span>
              <span>
                <b>✔</b> Pós-vendas eficiente
              </span>
            </div>
            <div>
              <span>
                <b>✔</b> Equipe qualificada
              </span>
              <span>
                <b>✔</b> Tecnologia
              </span>
            </div>
          </div>
        </div>
      </Competences>
      <ShowCase>
        <div className="overlay">
          <button aria-label="Play">
            <FaPlay />
          </button>
          <h2>Veja um de nossos cases</h2>
          <p>
            Sistema Fotovoltaico de 75 kWp que proporciona ao cliente uma
            economia anual de R$90.000,00 e redução de 9.400 kg/mês de CO2 na
            atmosfera.
          </p>
        </div>
      </ShowCase>
      <Feedbacks>
        <h2>O que dizem sobre nós</h2>
        <p>
          Veja o depoimento de alguns dos clientes já atendidos por nossa
          equipe.
        </p>
        <div className="feedbacks">
          <div className="feedback">
            <Image width={64} height={69} src="/jose.png" alt="José Maurício" />
            <p>
              “Estou bem satisfeito com o serviço, tem sempre um técnico a
              disposição quando necessário. A empresa oferece atendimento e
              pós-vendas muito bons.”
            </p>
            <span>
              José Maurício <b>Empresário</b>
            </span>
          </div>
          <div className="feedback">
            <Image
              width={50}
              height={50}
              src="/george.jpg"
              alt="George Jamil"
            />
            <p>
              “Achei a proposta muito interessante! Energia de fonte limpa e
              acho que o potencial é muito grande, pois, disponibiliza a energia
              para o consumidor final de forma muito tranquila, viável e
              racional. Recomendo dar uma olhada! A Sharenergy tem o meu apoio!”
            </p>
            <span>
              George Jamil <b>Pesquisador e consultor</b>
            </span>
          </div>
          <div className="feedback">
            <Image
              width={50}
              height={50}
              src="/julio.png"
              alt="Júlio Antônio"
            />
            <p>
              “Como cliente me sinto muito satisfeito por ter a Sharenergy pois
              seus sócios, além da capacidade técnica, tratam seus clientes com
              honestidade e seriedade.”
            </p>
            <span>
              Júlio Antônio <b>Cliente de BH</b>
            </span>
          </div>
        </div>
      </Feedbacks>
      <Separator>
        <h3>Pronto para começar a economizar?</h3>
        <Button>Receba um orçamento</Button>
      </Separator>
    </Main>
  );
}
