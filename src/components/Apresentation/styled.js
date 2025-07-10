import styled from "styled-components";

export const WelcomeContainer = styled.div`
  width: 100%;
  height: 70vh;
  padding: 60px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const LeftColumn = styled.div`
  color: white;
  @media (max-width: 1024px) {
    order: 2; /* Coloca o texto depois do card no mobile */
  }
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    order: 1; /* Coloca o card antes do texto no mobile */
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fb4121; /* Laranja do projeto */
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #fb4121;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 15px;
  color: #1bb7d1;

  span {
    font-weight: 700;
  }
`;

export const Subtitle = styled.h2`
  font-size: 28px;
  color: #fb4121; /* Laranja */
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 30px;
  color: black;
  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CtaButton = styled.button`
  background-color: #fb4121; /* Laranja */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Card da Direita
export const InfoCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  max-width: 450px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
`;

export const CardBody = styled.div`
  padding: 25px;
  text-align: center;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 15px;
  color: #f39c12; /* Cor de estrela amarela */

  span {
    color: #34495e; /* Cor do texto de avaliação */
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 15px;
  color: #7f8c8d;
  line-height: 1.6;
`;
