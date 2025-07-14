import styled from "styled-components";

export const PageContainer = styled.section`
  padding: 60px 20px;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 16px;
  font-family: "Lucida Handwriting", "Brush Script MT", normal;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas de tamanho igual */
  gap: 40px;
  align-items: center;
  max-width: 1600px; /* Aumentado para acomodar os dois cards largos */
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr; /* Coluna única em telas menores */
    gap: 20px;
  }
`;

// Card de Detalhes
export const DetailsCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto; /* Altura automática para se ajustar ao conteúdo */

  @media (min-width: 1201px) {
    height: 650px; /* Altura fixa apenas para telas grandes */
  }
`;

export const DetailsTitle = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: 32px;
  color: #2c3e50;
  margin: 0;
`;

export const Tag = styled.span`
  font-size: 12px;
  color: #fb4121;
  font-weight: bold;
  &::before { content: "●"; margin-right: 8px; }
`;

export const Description = styled.p`
  font-size: 15px;
  color: #7f8c8d;
  line-height: 1.6;
  text-align: center;
  margin-top: 10px;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid #f1f2f6;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
`;

export const Icon = styled.span`
  color: #1bb7d1;
  font-size: 18px;
`;