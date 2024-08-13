// Styled Components
import { styled } from "styled-components";

// Imagens
import Image from "next/image";
import LogoRainha from "../../assets/logoRainha.png";
import logoSetta from "../../assets/setta_logo.jpg";
import logoCDA from "../../assets/cda_logo.jpg";
import logoCoffe from "../../assets/logoCoffe.svg";

const CardContainer = styled.div`
  width: 300px;
  padding-bottom: 20px;
  background: #191a55;
  margin: 0 20px;
  margin-top: 20px;
  border-radius: 6px;
  @media (max-width: 575px) {
    height: auto !important;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutProject = styled.div`
  text-align: center;
  padding: 0 12px;
  margin-bottom: 20px;
`;

const TitleProject = styled.h2`
  text-align: center;
  font-size: 18px;
`;

const BtnGithub = styled.a`
  padding: 10px 0;
  margin: 10px auto;
  width: 90%;
  color: #fff;
  text-decoration: none;
  text-align: center;
  background-color: var(--purple-primary);
  cursor: pointer;
  border-radius: 5px;
`;

export const CardProjects = () => {
  return (
    <>
      <CardContainer style={{ height: "700px" }}>
        <CardBody>
          <div style={{ margin: "0 auto" }}>
            <Image
              height={120}
              src={LogoRainha}
              alt="Logo Rainha da Antiga Religião"
            />
          </div>
          <AboutProject>
            <TitleProject>Rainha da Antiga religião.</TitleProject>
            <p>
              A Rainha da Antiga Religião é um centro insitucional religioso,
              que se encontra aberto á 8 anos. Dentro das minhas atividades como
              desenvolvedor web dentro da instituição, minhas atribuições
              incluem: Consultoria para desenvolvimento de software e design
              UX/UI. Design UX/UI das funcionalidades e casos de uso do site.
              Desenvolvimento de site web, utilizando as melhores práticas de
              programação. Stack utilizada nesse projeto: HTML, CSS, Javascript,
              React e Bootstrap.
            </p>
          </AboutProject>
          <BtnGithub
            target="_blank"
            href="https://rainhadaantigareligiao.org.br"
          >
            Conheça o Projeto
          </BtnGithub>
          <BtnGithub
            target="_blank"
            href="https://github.com/Sottili/Projeto-Rainha-em-React"
          >
            Github do Projeto
          </BtnGithub>
        </CardBody>
      </CardContainer>
      <CardContainer style={{ height: "715px" }}>
        <CardBody>
          <div style={{ margin: "10px auto" }}>
            <Image
              style={{ borderRadius: "50%" }}
              src={logoSetta}
              alt="Logo Lua Station"
              height={100}
            />
          </div>
          <AboutProject className="aboutProject">
            <TitleProject>Grupo Setta - Challenge</TitleProject>
            <p>
              Desenvolvi um projeto para um desafio oferecido pelo Grupo Setta
              durante o processo seletivo para a posição de Desenvolvedor
              Junior. O projeto envolveu a criação de um Front-End e Back-End
              distintos. No Front-End, utilizei Next.js, TypeScript e Axios,
              implementando Custom Hooks e estilização com TailwindCSS. No
              Back-End, empreguei Node.js com NestJS, PrismaORM e TypeScript,
              com o banco de dados PostgreSQL na versão 16.2, gerenciado em um
              container Docker.
            </p>
          </AboutProject>
          <BtnGithub
            href="https://github.com/Sottili/challenge_setta-front"
            target="_blank"
          >
            Github Front-End
          </BtnGithub>
          <BtnGithub
            href="https://github.com/Sottili/challenge_setta-back"
            target="_blank"
          >
            Github Back-End
          </BtnGithub>
        </CardBody>
      </CardContainer>
      <CardContainer style={{ height: "610px" }}>
        <CardBody>
          <div style={{ margin: "10px auto" }}>
            <Image
              style={{ borderRadius: "50%" }}
              src={logoCDA}
              alt="Logo Grupo Setta"
              height={100}
            />
          </div>
          <AboutProject className="aboutProject">
            <TitleProject>Cidade Alta - Challenge</TitleProject>
            <p>
              Desenvolvi um projeto para um desafio promovido pela Cidade Alta
              RP, parte do processo seletivo para a posição de Desenvolvedor
              Junior. O escopo do projeto envolvia exclusivamente a criação do
              Back-End. Para isso, utilizei as seguintes tecnologias: Node.js,
              NestJS, PrismaORM, Bcrypt, JsonWebToken e TypeScript. O banco de
              dados empregado foi o PostgreSQL na versão 16.2, configurado e
              gerenciado através de um container Docker.
            </p>
          </AboutProject>
          <BtnGithub
            href="https://github.com/Sottili/challenge_setta-back"
            target="_blank"
          >
            Github do Projeto
          </BtnGithub>
        </CardBody>
      </CardContainer>
      <CardContainer style={{ height: "650px" }}>
        <CardBody>
          <div style={{ margin: "10px auto" }}>
            <Image src={logoCoffe} alt="Logo Lua Station" height={75} />
          </div>
          <AboutProject className="aboutProject">
            <TitleProject>Coffe Store - Challenge</TitleProject>
            <p>
              Desenvolvi um projeto baseado em um desafio oferecido pela
              RocketSeat, cujo objetivo era criar um mini sistema de delivery de
              cafés. O projeto compreendeu o desenvolvimento tanto do Front-End
              quanto do Back-End. No Front-End, utilizei React.js, TypeScript,
              Styled Components e Axios para gerenciar requisições HTTP. No
              Back-End, desenvolvi uma API com Node.js, Express e TypeScript, e
              optei pelo Firebase como banco de dados.
            </p>
          </AboutProject>
          <BtnGithub href="" target="_blank">
            Github do Back-End
          </BtnGithub>
          <BtnGithub
            href="https://github.com/Sottili/challenge_setta-back"
            target="_blank"
          >
            Github do Front-End
          </BtnGithub>
        </CardBody>
      </CardContainer>
    </>
  );
};
