// src/components/Servicos/styled.js
import styled from "styled-components";

export const ContainerServicos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 5%; /* Padding responsivo */
  
  h1 {
    color: #1bb7d1;
    font-size: clamp(2rem, 5vw, 3rem); /* Fonte fluida */
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const SectionOqueFazemos = styled.div`
  display: grid;
  /* Cria colunas responsivas automaticamente */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const CardOqueFazemos = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Alinha ao topo */
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover; /* Garante que a imagem preencha o espaço */
    border-radius: 8px;
  }

  h3 {
    color: #1bb7d1;
    font-size: 1.5rem;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
    margin-top: auto; /* Empurra o título para baixo */
  }
`;