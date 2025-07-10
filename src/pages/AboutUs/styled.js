import styled from "styled-components";

export const ContainerAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  h1 {
    color: #1bb7d1;
    font-size: 50px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
  h3 {
    color: #1bb7d1;
    font-size: 25px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
  a {
    width: 75%;
    font-size: 15px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas iguais */
  gap: 20px; /* Espaço entre os cards */
  height: auto;
  margin: 40px;
`;

export const Card = styled.div`
  background-color: #fff;
  width: 550px;
  height: 200px;
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.39); /* Sombra suave */
  padding: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  .card-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 30px;
  }
`;

export const SectionOqueFazemos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Duas colunas iguais */
  gap: 30px; /* Espaço entre os cards */
  height: auto;
  margin: 40px;
`;

export const CardOqueFazemos = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.39); /* Sombra suave */
  padding: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 287px;
    height: 250px;
  }
`;

export const SectionInformacoes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Duas colunas iguais */
  gap: 30px; /* Espaço entre os cards */
  height: auto;
  margin: 40px;
`;

export const CardInformacoes = styled.div`
  width: 350px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.39); /* Sombra suave */
  padding: 20px;
  transition: transform 0.3s ease;

  img {
    width: 80px;
  }
  span {
    color: #fb4121;
    font-size: 24px;
    /* font-family: "Lucida Handwriting", "Brush Script MT", normal; */
  }
`;

export const SectionFoodImages = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1rem;
  background-color: #fb4121;

  img {
    width: 85%;
    height: 85%;
    border-radius: 15px;
  }
  .comida1 {
    grid-row: span;
  }
  .comida3 {
    grid-column: span 1;
  }
`;
