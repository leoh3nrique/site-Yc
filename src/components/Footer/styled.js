// src/components/Footer/styled.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1bb7d1;
  color: #ecf0f1;
  padding: 3rem 5%;
  margin-top: 4rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha */
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 220px; /* Largura mínima para cada coluna */
  flex: 1; /* Permite que as colunas cresçam e ocupem o espaço */

  p {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

// ... O resto dos estilos pode ser mantido
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
