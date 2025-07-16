import styled, { css } from "styled-components";

export const ContainerHeader = styled.header`
  position: sticky;
  top: 0; /* Gruda no topo da tela */
  z-index: 1000; /* Garante que ele fique sobre todos os outros elementos */

  width: 100%;
  background-color: #1bb7d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5%; /* Padding reduzido para um header mais compacto */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: padding 0.3s ease-in-out;
`;
export const Logo = styled.img`
  width: 140px; /* Tamanho padrão para desktop */
  height: auto;
  cursor: pointer;
  transition: width 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100px; /* Tamanho menor para mobile */
  }
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
  gap: 1rem; /* Espaçamento entre os links ajustado */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #1bb7d1;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    z-index: 1010;
  }
`;

export const LinkNav = styled.button`
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  background: none;
  padding: 0.5rem 1rem; /* Padding para criar o fundo ao redor do texto */
  cursor: pointer;
  color: white;
  position: relative;
  text-decoration: none;
  border-radius: 20px; /* Borda arredondada para o fundo */
  transition: background-color 0.3s ease, color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px; /* Posição do sublinhado */
    width: 0;
    height: 2px;
    background-color: #fb4121;
    transition: width 0.3s ease;
  }

  &:hover:not(:disabled)::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: white;
      color: #1bb7d1;
      font-weight: bold;

      /* Remove o efeito de sublinhado quando o link está ativo */
      &::after {
        display: none;
      }
    `}
`;
