import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../App";
import { ContainerHeader, NavLinks, LinkNav, MobileIcon, Logo } from "./styled";

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (page) => {
    goToPage(navigate, page);
    setIsOpen(false);
  };

  return (
    <ContainerHeader>
      <Logo
        src="./images/logoYc.png"
        alt="Yes Cooking Logo"
        onClick={() => handleNavigate("")}
      />

      <MobileIcon onClick={toggleMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </MobileIcon>

      <NavLinks isOpen={isOpen}>
        <LinkNav onClick={() => handleNavigate("")}>Início</LinkNav>
        <LinkNav onClick={() => handleNavigate("cultura")}>
          Cultura
        </LinkNav>
        <LinkNav onClick={() => handleNavigate("trabalhe-conosco")}>
          Trabalhe Conosco
        </LinkNav>
        <LinkNav onClick={() => handleNavigate("contato")}>Contato</LinkNav>
      </NavLinks>
    </ContainerHeader>
  );
}
