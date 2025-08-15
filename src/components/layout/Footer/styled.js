import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1c779f;
  color: #ecf0f1;
  padding: 3rem 5%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 220px;
  flex: 1;
  p {
    font-size: 0.8rem;
    line-height: 0.7;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 22px;
  color: white;
  margin-bottom: 2px;
  font-family: "Staatliches", sans-serif;
  letter-spacing: 1px;
`;

export const FooterLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
`;

export const Icon = styled.span`
  font-size: 16px;
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 25px;
  padding-top: 10px;
  border-top: 1px solid #34495e;
  font-size: 9px;
  color: #bdc3c7;
`;
