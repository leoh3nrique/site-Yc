import styled from "styled-components";
import { StyledAnchor } from "../../components/features/home/WelcomeSection/styled";

export const ServicesPageContainer = styled.div`
  width: 100%;
`;

// --- Estilos Comuns ---
export const HeaderSection = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 1rem auto;
`;

export const MainTitle = styled.h1`
  color: #f1b75c;
  font-family: "Staatliches", sans-serif;
  padding: 1rem;
  font-size: 3em;
`;

// --- 1. Estilos da Seção Principal ---
export const MainSection = styled.section`
  width: 100%;
  padding: 3rem 5%;
  background-color: #f8f9fa;
`;

export const ServiceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.1rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1.13;
  aspect-ratio: 4 / 3;
  background-color: #f0f0f0;
  border-radius: 8px; /* Opcional: para combinar com o estilo de outros elementos */
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  min-height: 250px;
  h3 {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    color: #a73129;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.9;
    color: #666;
  }
  @media (max-width: 768px) {
    text-align: center;
    min-height: 340px;
  }
`;

export const DifferentialCard = styled.div`
  text-align: center;
  padding: 2rem;

  h4 {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  color: #1bb7d1;
  margin-bottom: 1rem;
`;

// --- 3. Estilos da Seção de Outras Soluções ---
export const OtherServicesSection = styled.section`
  width: 100%;
  padding: 4rem 5%;
  background-color: #f8f9fa;

  .gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const OtherServiceCard = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  h5 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    margin: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    font-size: 1.3rem;
    text-align: right;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const BackgroundInsumos = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  padding: 5rem;

  @media (max-width: 768px) {
    height: auto;
    min-height: 80vh;
    text-align: center;
  }
`;

export const ContainerInsumos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  max-width: 960px;
  margin: 2rem auto;
`;
export const TitleInsumos = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: 3em;
  color: #f1b75c;
  font-weight: bold;
`;

export const ContentInsumos = styled.p`
  font-size: 1.6em;
  line-height: 1.6;
  font-weight: bold;
  color: white;
`;

export const ButtonInsumos = styled(StyledAnchor)`
  background-color: #1c779f;
  max-width: 215px;
  font-size: 1.3rem;
`;
export const DifferentialsSection = styled.section`
  width: 100%;
  padding: 1.5em;
  background-color: #1c779f;
  min-height: 400px;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const ContainerEquipamentos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 20px;
  }
`;

export const SectionInfoEquipamentos = styled.div`
  width: 600px;
  height: 450px;

  p {
    color: white;
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
    color: white;
    font-size: 18px;
  }

  ul li {
    margin-bottom: 8px;
  }

  span {
    font-weight: bold;
    font-size: 27px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    p {
      font-size: 16px;
    }

    ul {
      font-size: 16px;
    }

    span {
      font-size: 22px;
    }
  }
`;

export const SectionCarouselEquipamentos = styled.div`
  width: 600px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
