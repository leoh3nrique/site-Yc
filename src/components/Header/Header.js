import { useState, useRef } from "react";
import {
  ContainerHeader,
  ContainerSection,
  LinkNav,
  DropdownContainer,
  DropdownMenu,
} from "./styled";
// import logo from "../../assets/logoYc.png";
import { goToPage } from "../../App";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Abre o dropdown ao passar o mouse
  const handleMouseEnter = () => {
    setActiveDropdown(true);
  };

  // Fecha o dropdown com um pequeno delay para evitar sumiço abrupto
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!dropdownRef.current?.matches(":hover")) {
        setActiveDropdown(false);
      }
    }, 200); // Pequeno delay para evitar fechamento abrupto
  };

  return (
    <ContainerHeader>
      <img src="./images/logoYc.png" alt="TESTE" />
      <ContainerSection>
        <LinkNav onClick={() => goToPage(navigate, "")}>Home</LinkNav>
        <LinkNav onClick={() => goToPage(navigate, "quemsomos")}>
          Quem Somos
        </LinkNav>
        <LinkNav onClick={() => goToPage(navigate, "legado")}>Legado</LinkNav>
       

        {/* Dropdown para "Sobre"
        // <DropdownContainer
        //   onMouseEnter={handleMouseEnter}
        //   onMouseLeave={handleMouseLeave}
        //   ref={dropdownRef}
        // >
        //   <LinkNav>Sobre</LinkNav>
        //   {activeDropdown && (
        //     <DropdownMenu>
              
        //     </DropdownMenu>
        //   )}
        // </DropdownContainer> */}

        <LinkNav onClick={() => goToPage(navigate, "contato")}>Contato</LinkNav>
      </ContainerSection>
    </ContainerHeader>
  );
}
