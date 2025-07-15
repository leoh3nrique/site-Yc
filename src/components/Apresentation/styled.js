// src/components/Apresentation/styled.js
import styled from "styled-components";

export const ContainerApresentation = styled.div`
  width: 100%;
  height: 110vh;
  background-image: url(${(props) => props.bgImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: top; /* Centraliza a imagem */
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

  @media (max-width: 768px) {
    height: auto;
    min-height: 80vh;
    background-size: cover; /* Cobre a área sem distorcer */
  }
`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 110px;
  text-align: center; /* Centraliza o texto */

  h1 {
    font-family: "Staatliches", sans-serif;
    font-size: 55px;
    color: #fb4121;
    text-shadow: -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black,
      1px 1px 0px black;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    h1 {
      font-size: 40px;
    }
    a {
      font-size: 24px;
    }
  }
`;

export const StyledTitleApresentation = styled.a`
  font-size: 55px;
  color: white;
  font-family: "Lucida Handwriting", "Brush Script MT", cursive;
  text-shadow: -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black,
    1px 1px 0px black;
`;

export const SectionButtons = styled.div`
  display: flex;
  flex-direction: column; /* Empilha os botões */
  justify-content: space-around;
  align-items: center;
  width: 100%; /* Ocupa a largura toda */
  margin: 10px;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row; /* Volta para a linha em telas maiores */
    width: 300px;
  }
`;

export const StyledAnchor = styled.a`
  border: none;
  background: none;
  display: inline-block;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  outline: none;
  color: white;
  background-color: #1bb7d1;
  border-radius: 5px;
  width: 110px;
  height: 60px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: transparent;
    border: 0.7px solid white;
  }
`;

export const SectionPlayVideo = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    color: white;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  img {
    width: 40%; /* O ícone ocupa 40% do botão */
    height: auto; /* Mantém a proporção da imagem */
    filter: brightness(1); /* Brilho normal */
    transition: filter 0.3s ease; /* Transição suave no hover */
  }
`;
