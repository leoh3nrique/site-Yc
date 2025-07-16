import styled from "styled-components";

// ... (ContainerApresentation, Apresentation, StyledTitleApresentation) ...

export const ContainerApresentation = styled.div`
  width: 100%;
  height: 110vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

  @media (max-width: 768px) {
    height: auto;
    min-height: 80vh;
  }
`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 110px;
  text-align: center;

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
  flex-direction: column;
  justify-content: center; /* Alterado para 'center' para melhor alinhamento */
  align-items: center;
  width: 100%;
  margin: 13px;

  /* CORREÇÃO: Adicionado 'gap' para criar espaço entre os itens */
  gap: 1.5rem; /* Adiciona 1.5rem de espaço (aprox. 24px) */

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto; /* Largura automática para acomodar o gap */
    justify-content: center;
  }
`;

export const StyledAnchor = styled.a`
  border: none;
  background: none;
  display: inline-block;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  outline: none;
  color: white;
  background-color: #1bb7d1;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    background: transparent;
    border: 1px solid white;
  }
`;

export const SectionPlayVideo = styled.div`
  /* Removido width fixo para flexibilidade */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Espaço entre o botão de play e o texto */

  span {
    color: white;
    font-weight: 500;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex-shrink: 0; /* Impede que o botão encolha */

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  img {
    width: 40%;
    height: auto;
  }
`;
