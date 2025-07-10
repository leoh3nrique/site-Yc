import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1bb7d1;
  color: #ecf0f1; /* Cor de texto clara (cinza bem claro) */
  padding: 40px 20px;
  margin-top: 100px;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 220px;

  p {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  color: #fb4121; /* Laranja do seu projeto */
  margin-bottom: 10px;
  font-family: "Staatliches", sans-serif;
  letter-spacing: 1px;
`;

export const FooterLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #1bb7d1; /* Ciano do seu projeto no hover */
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`;

export const Icon = styled.span`
  font-size: 16px;
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #34495e; /* Linha divisória sutil */
  font-size: 12px;
  color: #bdc3c7; /* Cinza mais claro para o copyright */
`;
