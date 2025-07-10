import styled from "styled-components";

export const ContainerApresentation = styled.div`
  width: 100%;
  height: 110vh;
  background-image: url(${(props) => props.bgImage});
  background-size: 100% auto;
  background-repeat: no-repeat;

  /* Adiciona uma cor de fundo (em RGBA) para dar o efeito de escurecer */
  background-color: rgba(0, 0, 0, 0.5); /* 0.5 = 50% transparente */

  /* Define o modo de mesclagem para escurecer */
  background-blend-mode: darken;
`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 110px;
  h1 {
    font-family: "Staatliches", sans-serif;
    font-size: 55px;
    color: #fb4121;
    text-shadow: -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black,
      1px 1px 0px black;
  }
  a {
    font-size: 55px;
    color: white;
    font-family: "Lucida Handwriting", "Brush Script MT", cursive;
    text-shadow: -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black,
      1px 1px 0px black;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  margin: 10px;
  padding: 10px;
`;

export const StyledButton = styled.button`
  font-size: 15px;
  border: none;
  background: none;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
