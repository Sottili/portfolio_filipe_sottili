import { styled } from "styled-components";

// Main Component
export const MainAplicationContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Titles
export const MyProjectsTitle = styled.h3`
  text-align: center;
  padding: 40px 0;
  font-size: 32px;
`;

// About Section
export const AboutSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 80px 10px;
  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

export const TitleAndIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitlePrimary = styled.h1`
  color: #fff;
  font-size: 80px;
  padding: 0;
  margin: 0;
  max-width: 300px;
  line-height: 4rem;
  @media (max-width: 575px) {
    font-size: 3rem;
    line-height: 2.5rem !important;
    padding: 0 10px;
  }
`;

export const IconsAbout = styled.div`
  margin-bottom: 30px;
`;

export const ContainerTextAbout = styled.div`
  margin-left: 5rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const TextAbout = styled.p`
  max-width: 400px;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 100% !important;
    font-size: 16px;
  }
`;

export const SpanTextAbout = styled.span`
  color: var(--purple-primary);
`;

// Projects Section

export const ProjectsSection = styled.section`
  padding-top: 0px 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
