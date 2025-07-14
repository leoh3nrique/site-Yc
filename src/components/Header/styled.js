// src/components/Header/styled.js
import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #1bb7d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%; /* Usa padding responsivo */
  position: relative;
  width: 100%;
`;

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
  z-index: 11; /* Para ficar acima do menu mobile */
`;

export const MobileIcon = styled.div`
  display: none; /* Escondido em desktop */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    z-index: 11; /* Para ficar acima do menu */

    div {
      width: 32px;
      height: 3px;
      background: white;
      border-radius: 5px;
      margin: 4px;
      transition: all 0.3s linear;
    }
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    /* Lógica do Menu Mobile */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #1bb7d1;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    z-index: 10;
  }
`;

export const LinkNav = styled.button`
  font-size: 1.1rem;
  border: none;
  background: none;
  padding: 10px 15px;
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
    font-size: 1.5rem; /* Fontes maiores no menu mobile */
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 180px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 5px 0;
  
  /* Esconde o menu se o container não estiver em hover */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  
  ${DropdownContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }

  & ${LinkNav} {
    color: black;
    width: 100%;
    font-size: 1rem;
    &:hover {
      background: #f0f0f0;
      color: #1bb7d1;
    }
  }

  @media (max-width: 768px) {
    /* Simplifica o dropdown no menu mobile */
    position: static;
    box-shadow: none;
    background: transparent;
    width: 100%;
    padding: 0;
    align-items: center;
    gap: 1rem;

    & ${LinkNav} {
      color: white;
      font-size: 1.2rem;
      &::after {
        display: none;
      }
    }
  }
`;