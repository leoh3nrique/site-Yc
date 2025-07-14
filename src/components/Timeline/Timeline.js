import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Dados da timeline (mantidos como antes)
const events = [
  {
    year: "1992",
    title: "Fundação da Empresa",
    description: "Inicio da empresa",
    image: "./images/quemsomos/qs1.jpg",
  },
  {
    year: "2005",
    title: "Primeiro Produto",
    description: "Lançamento do primeiro produto no mercado em 2005.",
    image: "./images/quemsomos/qs2.jpg",
  },
  {
    year: "2012",
    title: "Expansão Internacional",
    description: "A empresa expandiu para outros países em 2012.",
    image: "./images/comidas/comida1.jpg",
  },
  {
    year: "2024",
    title: "Novo Escritório",
    description: "Inauguração de um novo escritório regional em 2024.",
    image: "./images/unidades/sc1.jpg",
  },
  {
    year: "2028",
    title: "Futuro",
    description: "Planos futuros da empresa.",
    image: "./images/caminhaoTeste.png",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(events[0].year);
  const selectedEvent = events.find((event) => event.year === selectedYear);
  const navRef = useRef(null);

  // Efeito para centralizar o ano ativo na navegação
  useEffect(() => {
    const selectedElement = navRef.current?.querySelector(
      `[data-year="${selectedYear}"]`
    );
    if (selectedElement) {
      const navWidth = navRef.current.offsetWidth;
      const elementLeft = selectedElement.offsetLeft;
      const elementWidth = selectedElement.offsetWidth;

      navRef.current.scrollLeft = elementLeft - navWidth / 2 + elementWidth / 2;
    }
  }, [selectedYear]);

  return (
    <TimelineContainer>
      <MainTitle>Conheça nossa trajetória</MainTitle>

      <TimelineNavWrapper ref={navRef}>
        <TimelineTrack>
          {events.map((event) => (
            <YearMarker
              key={event.year}
              isActive={event.year === selectedYear}
              onClick={() => setSelectedYear(event.year)}
              data-year={event.year} // Atributo para o useEffect
            >
              <span>{event.year}</span>
            </YearMarker>
          ))}
        </TimelineTrack>
      </TimelineNavWrapper>

      {selectedEvent && (
        <ContentArea>
          <ImageContainer>
            <img src={selectedEvent.image} alt={selectedEvent.title} />
          </ImageContainer>
          <TextContainer>
            <h2>{selectedEvent.year}</h2>
            <p>{selectedEvent.description}</p>
          </TextContainer>
        </ContentArea>
      )}
    </TimelineContainer>
  );
};

// --- ESTILOS REFINADOS ---

const TimelineContainer = styled.section`
  width: 100%;
  max-width: 960px; /* Reduz a largura máxima para um layout mais compacto */
  margin: 3rem auto;
  padding: 1.5rem;
  font-family: "Helvetica", "Arial", sans-serif;
  background: #fff; /* Adiciona um fundo para destacar o componente */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const MainTitle = styled.h1`
  text-align: center;
  /* Fonte fluida para se adaptar melhor */
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-family: "Lucida Handwriting", "Brush Script MT", normal;
  margin-bottom: 1.5rem;
  color: #fb4121;
  margin-bottom: 2.5rem;
`;

const TimelineNavWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Permite rolagem horizontal em telas pequenas */
  -webkit-overflow-scrolling: touch; /* Melhora a experiência em iOS */
  padding: 1rem 0;
  margin-bottom: 1.5rem;

  /* Esconde a barra de rolagem mas mantém a funcionalidade */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Para Firefox */
`;

const TimelineTrack = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-width: 600px; /* Garante que a linha não fique muito comprimida */
  padding: 0 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background-color: #e0e0e0;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const YearMarker = styled.div`
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    background-color: #fff;
    border: 3px solid ${({ isActive }) => (isActive ? "#fb4121" : "#e0e0e0")};
    border-radius: 50%;
    transition: border-color 0.3s;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem; /* Fonte um pouco menor */
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    color: ${({ isActive }) => (isActive ? "#fb4121" : "#555")};
    /* Posição do texto do ano ajustada */
    position: absolute;
    top: -30px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 35%; /* Imagem ocupa menos espaço */

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 4px;
  }
`;

const TextContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 1.8rem; /* Título do ano menor */
    color: #fb4121;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #666;
  }
`;

export default Timeline;
