"use client";

// Imported Components
import Menu from "@/components/menu/menu";

// Components Styles
import {
  MainAplicationContainer,
  MyProjectsTitle,
  AboutSection,
  TitleAndIcons,
  TitlePrimary,
  TextAbout,
  SpanTextAbout,
  ContainerTextAbout,
  IconsAbout,
  ProjectsSection,
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
        <AboutSection id="about">
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
              <a style={{ color: "#fff" }} href="#" target="_blank">
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
        <MyProjectsTitle>Projetos</MyProjectsTitle>
        <ProjectsSection id="projects">
          <CardProjects />
        </ProjectsSection>
        {/* Qualifications Section */}
      </MainAplicationContainer>
    </>
  );
}
