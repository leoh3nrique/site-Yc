import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHeader, NavLinks, LinkNav, MobileIcon, Logo } from "./styled";
import { goToPage } from "../../../App";

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (page) => {
    goToPage(navigate, page);
    setIsOpen(false);
  };

  const checkIsActive = (path) => {
    return location.pathname === path;
  };

  return (
    <ContainerHeader>
      <Logo
        src="./images/utils/logoBranca.png"
        alt="Yes Cooking Logo"
        onClick={() => handleNavigate("")}
      />

      <MobileIcon onClick={toggleMenu} $isOpen={isOpen}>
        <div />
        <div />
        <div />
      </MobileIcon>

      <NavLinks $isOpen={isOpen}>
        <LinkNav
          $isActive={checkIsActive("/")}
          onClick={() => handleNavigate("")}
        >
          Início
        </LinkNav>
        <LinkNav
          $isActive={checkIsActive("/cultura")}
          onClick={() => handleNavigate("cultura")}
        >
          Cultura
        </LinkNav>
        <LinkNav
          $isActive={checkIsActive("/servicos")}
          onClick={() => handleNavigate("servicos")}
        >
          Serviços
        </LinkNav>
        <LinkNav
          $isActive={checkIsActive("/trabalhe-conosco")}
          onClick={() => handleNavigate("trabalhe-conosco")}
        >
          Trabalhe Conosco
        </LinkNav>
        <LinkNav
         $isActive={checkIsActive("/contato")}
          onClick={() => handleNavigate("contato")}
        >
          Contato
        </LinkNav>
      </NavLinks>
    </ContainerHeader>
  );
}
