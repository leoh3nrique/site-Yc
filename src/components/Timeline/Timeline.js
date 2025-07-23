import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Seus dados atualizados da timeline
const events = [
  {
    year: "2020",
    title: "Fundação da Empresa",
    description: "Fundação da empresa.",
    image: "./images/timeline/timeline01.jpg",
  },
  {
    year: "2022",
    title: "Primeiras Unidades",
    description: "Primeiras Unidades na UFSCAR.",
    image: "./images/timeline/timeline3.jpg",
  },
  {
    year: "2023",
    title: "Expansão para outras unidades",
    description: "A empresa expandiu para outras unidades em 2023.",
    image: "./images/timeline/timeline4.jpg",
  },
  {
    year: "2025",
    title: "Construção de novas lanchonetes",
    description: "Inauguração de uma nova lanchonete regional em 2025.",
    image: "./images/timeline/timeline4.jpg",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(events[0].year);
  const selectedEvent = events.find((event) => event.year === selectedYear);
  const navRef = useRef(null);

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
              data-year={event.year}
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
            {/* O h2 aqui foi trocado para o Título do evento, para mais dinamismo */}
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
          </TextContainer>
        </ContentArea>
      )}
    </TimelineContainer>
  );
};


const TimelineContainer = styled.section`
  width: 100%;
  max-width: 960px; /* Limita a largura para o efeito de card */
  margin: 3rem auto; /* Centraliza o card na página */
  padding: 2.5rem; /* Espaçamento interno */
  font-family: "Helvetica", "Arial", sans-serif;
  background: #ffffff; /* Fundo branco para contraste */
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); /* Sombra suave */

  @media (max-width: 768px) {
    margin: 2rem 1rem;
    padding: 1.5rem;
  }
`;

const MainTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: #fb4121;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const TimelineNavWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 1rem 0;
  margin-bottom: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const TimelineTrack = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-width: 600px;
  padding: 1rem 1rem;
  margin-top: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background-color: #ddd;
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
    background-color: ${({ isActive }) => (isActive ? "#fb4121" : "#ccc")};
    width: ${({ isActive }) => (isActive ? "12px" : "2px")};
    height: 12px;
    border-radius: ${({ isActive }) => (isActive ? "0" : "2px")};
    transition: all 0.3s;
    position: absolute;
    top: -6px;
  }

  span {
    font-size: 0.9rem;
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    color: ${({ isActive }) => (isActive ? "#fb4121" : "#555")};
    position: absolute;
    top: -30px;
    white-space: nowrap;
  }
`;

const ContentArea = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente a imagem e o texto */
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 45%; /* A imagem ocupa 45% do espaço */
  max-width: 400px;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const TextContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 1.8rem;
    color: #333; /* Cor mais escura para o título do evento */
    margin-bottom: 0.8rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #555; /* Tom de cinza para o texto */
  }
`;

export default Timeline;
