import styled from "styled-components";

export const ServicesPageContainer = styled.div`
  width: 100%;
`;

// --- Estilos Comuns ---
export const HeaderSection = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3rem auto;
`;

export const MainTitle = styled.h1`
  color: #1bb7d1;
  font-size: clamp(2.2rem, 5vw, 2.8rem);
  font-family: "Lucida Handwriting", "Brush Script MT", normal;
`;

// --- 1. Estilos da Seção Principal ---
export const MainSection = styled.section`
  width: 100%;
  padding: 4rem 5%;
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
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 0.8;
  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  h3 {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    color: #fb4121;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

// --- 2. Estilos da Seção de Diferenciais ---
export const DifferentialsSection = styled.section`
  width: 100%;
  padding: 4rem 5%;
  background-color: #fff;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
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
