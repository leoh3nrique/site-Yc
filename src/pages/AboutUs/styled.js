// src/pages/AboutUs/styled.js
import styled from "styled-components";

export const ContainerAboutUs = styled.div`
  /* ... */
  a {
    width: 85%; /* Ajusta a largura para melhor leitura */
    text-align: center; /* Centraliza o texto */
    @media (max-width: 768px) {
      width: 90%;
      font-size: 14px;
    }
  }
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Grid responsivo */
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 5%;
  margin: 40px 0;
`;

export const Card = styled.div`
  background-color: #fff;
  min-height: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  .card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
  }

  img {
    width: 30px;
  }
`;

// ... O resto dos componentes (SectionOqueFazemos, CardOqueFazemos, etc.)
// podem seguir o mesmo padrão do ContainerCard e Card.
export const SectionOqueFazemos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: auto;
  margin: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }
`;

export const CardOqueFazemos = styled.div`
  width: 300px;
  /* ... */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionInformacoes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  /* ... */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// ... o resto dos estilos

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
