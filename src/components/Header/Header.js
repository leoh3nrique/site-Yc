// src/components/Header/Header.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../App";
import {
  ContainerHeader,
  NavLinks,
  LinkNav,
  DropdownContainer,
  DropdownMenu,
  MobileIcon,
  Logo,
} from "./styled";

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (page) => {
    goToPage(navigate, page);
    setIsOpen(false); // Fecha o menu ao navegar
  };

  return (
    <ContainerHeader>
      <Logo src="./images/logoYc.png" alt="Yes Cooking Logo" onClick={() => handleNavigate("")} />
      
      <MobileIcon onClick={toggleMenu}>
        {/* Ícone de Hambúrguer/Fechar */}
        <div />
        <div />
        <div />
      </MobileIcon>

      <NavLinks isOpen={isOpen}>
        <LinkNav onClick={() => handleNavigate("")}>Home</LinkNav>
        <DropdownContainer
          onMouseEnter={() => setActiveDropdown(true)}
          onMouseLeave={() => setActiveDropdown(false)}
        >
          <LinkNav>Sobre</LinkNav>
          {activeDropdown && (
            <DropdownMenu>
              <LinkNav onClick={() => handleNavigate("quemsomos")}>Quem Somos</LinkNav>
              <LinkNav onClick={() => handleNavigate("legado")}>Legado</LinkNav>
              <LinkNav onClick={() => handleNavigate("unidades")}>Unidades</LinkNav>
            </DropdownMenu>
          )}
        </DropdownContainer>
        <LinkNav onClick={() => handleNavigate("contato")}>Contato</LinkNav>
      </NavLinks>
    </ContainerHeader>
  );
}