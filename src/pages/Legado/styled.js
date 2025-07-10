import styled from "styled-components";

export const SectionAboutLegado = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas iguais */
  gap: 30px; /* Espaço entre os cards */
  height: auto;
  align-items: center;
  justify-items: center;
  margin: 40px;
`;

export const CardAboutLegado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.39);
  width: 85%;
  height: 450px;
  gap: 10px;
  h1 {
    color: #fb4121;
  }
  img {
    width: 400px;
  }
`;

export const ButtonAboutLegado = styled.div`
  font-size: 15px;
  border: none;
  background: none;
  display: inline-block;
  padding: 15px;
  margin: 10px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  color: white;
  background-color: #fb4121;
  border-radius: 5px;
  width: 110px;
  height: auto;
`;
