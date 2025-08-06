import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ContainerSectionInfo = styled.div`
  background: #fff; /* Fundo branco */
  padding: 20px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra para destacar */
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .teste {
    border: 1px solid red;
  }
  h1 {
    color: #1bb7d1;
    font-size: 50px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
  a {
    font-size: 18px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
  button {
    width: 50px;
    position: absolute;
    top: 10px; /* ajuste conforme necessário */
    right: 0px; /* ajuste conforme necessário */
    background: transparent;
    border: none;
    font-size: 1.5rem; /* ou outro tamanho adequado */
    cursor: pointer;
  }
`;

export const CloseSvg = styled.svg`
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: stroke 0.3s ease-in-out;

  &:hover {
    stroke: red;
  }
`;
