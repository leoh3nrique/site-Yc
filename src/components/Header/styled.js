import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #1bb7d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  position: relative; /* Mantém o contexto para o dropdown em desktop (se voltar) */
  width: 100%;
  z-index: 100; /* Garante que o header fique sobre a maioria dos conteúdos */
`;

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
  z-index: 1002; /* Garante que a logo fique acima do menu aberto */
`;

export const MobileIcon = styled.div`
  display: none; /* Escondido em desktop */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1002; /* z-index maior para ficar na frente do menu */

    div {
      width: 2rem;
      height: 0.25rem;
      background: white;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }

    /* Animação do ícone para "X" quando o menu está aberto */
    ${({ isOpen }) =>
      isOpen &&
      `
      div:nth-child(1) {
        transform: rotate(45deg);
      }
      div:nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }
      div:nth-child(3) {
        transform: rotate(-45deg);
      }
    `}
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    /* Menu Mobile */
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    /* Posicionamento e visibilidade */
    position: fixed; /* Cobre a tela inteira, ignorando o scroll */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Ocupa a altura toda da tela */
    background: #1bb7d1;

    transition: transform 0.3s ease-in-out;

    /* Esconde o menu fora da tela à direita */
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};

    z-index: 1001; /* Fica acima de todo o site, mas abaixo da logo/ícone */
  }
`;

export const LinkNav = styled.button`
  font-size: 1.1rem;
  border: none;
  background: none;
  padding: 10px 0;
  cursor: pointer;
  color: white;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #fb4121;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
