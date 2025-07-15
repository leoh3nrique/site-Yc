import styled from 'styled-components';

export const PageContainer = styled.section`
  padding: 3rem 5%;
  background-color: #f8f9fa;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const MainTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: #2c3e50;
  font-family: "Lucida Handwriting", "Brush Script MT", normal;
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #7f8c8d;
  max-width: 700px;
  margin: 1rem auto 0;
`;

// Container principal que controla o layout
export const ContentContainer = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: flex-start;
  max-width: 1600px;
  margin: 0 auto;

  /* Layout para Mobile (padrão): uma coluna */
  grid-template-columns: 1fr;

  /* Layout para Desktop: duas colunas */
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  /* Altura para Mobile: um tamanho fixo e razoável */
  height: 450px;

  /* Altura para Desktop */
  @media (min-width: 1024px) {
    height: 650px;
  }
`;

export const DetailsCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* A altura se ajusta automaticamente ao conteúdo */
`;

// --- Estilos dos elementos internos do Card ---
export const DetailsTitle = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: #2c3e50;
  margin: 0;
`;

export const Tag = styled.span`
  font-size: 0.8rem;
  color: #fb4121;
  font-weight: bold;
  &::before { content: "●"; margin-right: 8px; }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f2f6;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;

  strong {
    flex-shrink: 0;
  }
`;

export const Icon = styled.span`
  color: #1bb7d1;
  font-size: 1.2rem;
  flex-shrink: 0;
`;