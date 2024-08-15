"use client";

// Imported Components
import Menu from "@/components/menu/menu";

// Icons
import { IoCodeSlash } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

// Components Styles
import {
  MainAplicationContainer,
  SectionTitle,
  AboutSection,
  TitleAndIcons,
  TitlePrimary,
  TextAbout,
  SpanTextAbout,
  ContainerTextAbout,
  IconsAbout,
  ProjectsSection,
  ContactSection,
  TitleContact,
  SectionContactTitle,
} from "./styles";

// Icons
import { BsGithub, BsLinkedin, BsFiletypeDoc } from "react-icons/bs";
import { CardProjects } from "@/components/card/card";

export default function Home() {
  return (
    <>
      <Menu />
      <MainAplicationContainer>
        {/* About Section */}
        <AboutSection>
          <TitleAndIcons>
            <TitlePrimary>JUNIOR DEVELOPER</TitlePrimary>
            <IconsAbout>
              <a
                target="_blank"
                style={{ color: "#fff" }}
                href="https://github.com/Sottili"
              >
                <BsGithub
                  style={{
                    marginLeft: "10px",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a
                target="_blank"
                style={{ color: "#fff" }}
                href="https://www.linkedin.com/in/filipe-sottili-7855b2218/"
              >
                <BsLinkedin
                  style={{
                    marginLeft: "10px",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a
                style={{ color: "#fff" }}
                href="https://docs.google.com/document/d/15baVEJSmBtgiOWrYXADFWIokyNYn-y26/edit?usp=sharing&ouid=100187131871817709103&rtpof=true&sd=true"
                target="_blank"
              >
                <BsFiletypeDoc
                  style={{
                    marginLeft: "10px",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                />
              </a>
            </IconsAbout>
          </TitleAndIcons>
          <ContainerTextAbout>
            <TextAbout>
              Tenho 19 anos, sou desenvolvedor junior com 3 anos de experiência
              profissional. Tenho conhecimento e experiência em
              <SpanTextAbout> Javascript, </SpanTextAbout>
              <SpanTextAbout>React, </SpanTextAbout>
              <SpanTextAbout>Typescript, </SpanTextAbout>
              <SpanTextAbout>NextJS, </SpanTextAbout>
              <SpanTextAbout>TailwindCSS, </SpanTextAbout>
              <SpanTextAbout>Node, </SpanTextAbout>
              <SpanTextAbout>Express, </SpanTextAbout>
              <SpanTextAbout>NestJS, </SpanTextAbout>
              <SpanTextAbout>PrismaORM, </SpanTextAbout>
              <SpanTextAbout>PostgreSQL, </SpanTextAbout>
              <SpanTextAbout>Firebase, </SpanTextAbout>
              <SpanTextAbout>MongoDB, </SpanTextAbout>
              <SpanTextAbout>MySQL, </SpanTextAbout>
              <SpanTextAbout>Bootstrap, </SpanTextAbout>
              <SpanTextAbout>Python, </SpanTextAbout>
              <SpanTextAbout>Pandas, </SpanTextAbout>
              <SpanTextAbout>Git e </SpanTextAbout>
              <SpanTextAbout>Github.</SpanTextAbout>
            </TextAbout>
          </ContainerTextAbout>
        </AboutSection>
        {/* Projects Section */}
        <SectionTitle id="projects">
          <IoCodeSlash
            style={{
              verticalAlign: "middle",
              marginRight: "8px",
              width: "25px",
              color: "var(--pink-primary)",
            }}
          />
          Projetos
        </SectionTitle>
        <ProjectsSection>
          <CardProjects />
        </ProjectsSection>
        {/* Qualifications Section */}
        <ContactSection>
          <SectionContactTitle id="contact">
            Entre em Contato
          </SectionContactTitle>
          <TitleContact>
            <SiMinutemailer
              style={{
                verticalAlign: "middle",
                marginRight: "8px",
                width: "20px",
                color: "var(--pink-primary)",
              }}
            />
            Email: felipesottili32@gmail.com
          </TitleContact>
          <TitleContact>
            <BsFillTelephoneFill
              style={{
                verticalAlign: "middle",
                marginRight: "8px",
                width: "14px",
                color: "var(--pink-primary)",
              }}
            />
            Telefone: (11) 94857-7665
          </TitleContact>
        </ContactSection>
      </MainAplicationContainer>
    </>
  );
}
