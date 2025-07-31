import styled, { css } from "styled-components";

export const ContainerHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1010;
  width: 100%;
  background-color: #1bb7d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: padding 0.3s ease-in-out;
`;

export const Logo = styled.img`
  width: 190px;
  height: auto;
  cursor: pointer;
  transition: width 0.3s ease-in-out;

  position: relative;
  z-index: 1012;

  @media (max-width: 768px) {
    width: 110px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 8rem;

    gap: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    /* CORREÇÃO 2: Fundo um pouco mais claro */
    background-color: rgba(0, 0, 0, 0.75); /* 75% de opacidade */
    backdrop-filter: blur(5px);

    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    /* Z-index abaixo do header, logo e ícone */
    z-index: 1011;
  }
`;

export const LinkNav = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  background: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: white;
  position: relative;
  text-decoration: none;
  border-radius: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: #1bb7d1;
        color: white;
      `}
  }

  @media (min-width: 769px) {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: white;
        color: #1bb7d1;
        font-weight: bold;
      `}
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    z-index: 1012;

    div {
      width: 2rem;
      height: 0.25rem;
      background: white;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
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
