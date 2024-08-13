"use client";

import Link from "next/link";
import { styled } from "styled-components";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./index.css";

const HeaderContainer = styled.header`
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  @media (max-width: 900px) {
    padding: 10px 0px;
  }
`;

const ListHeader = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    padding: 20px 10px;
    display: none;
    transition: 1s;
  }
`;

const ItemsListHeader = styled(Link)`
  font-size: 16px;
  margin-right: 20px;
  margin-top: 6px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    color: #7b2cbf;
  }
  @media (max-width: 900px) {
    margin-top: 15px;
  }
`;

const TitleHeader = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  letter-spacing: 2px;
  &:hover {
    transition: 0.3s;
    color: var(--purple-primary);
  }
  @media (max-width: 900px) {
    position: absolute;
    left: 2%;
    font-size: 23px;
  }
`;

const ToggleBtn = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 2%;
  display: none;
  @media (max-width: 900px) {
    display: initial;
  }
`;

export default function Menu() {
  const [active, setActive] = useState(false);

  const openCloseMenu = () => {
    setActive((current) => !current);
  };

  return (
    <HeaderContainer className={active ? "openMenu" : ""}>
      <TitleHeader href="#inicio">Filipe Sottili</TitleHeader>
      <ListHeader className={active ? "openMenu" : ""}>
        <ItemsListHeader href="#about">Inicio</ItemsListHeader>
        <ItemsListHeader href="#projects">Projetos</ItemsListHeader>
        <ItemsListHeader href="#qualifications">Qualificações</ItemsListHeader>
        <ItemsListHeader href="#contact">Contato</ItemsListHeader>
      </ListHeader>
      <ToggleBtn onClick={openCloseMenu} />
    </HeaderContainer>
  );
}
