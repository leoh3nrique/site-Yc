import styled from "styled-components";

export const DetailsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  padding: 30px;
  display: flex;
  flex-direction: column; /* Essencial para o layout interno */
  gap: 20px;
  border-top: 4px solid #1bb7d1;
  height: 100%; /* Faz o card preencher a altura do grid container */
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #1bb7d1;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

export const DetailsTitle = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: 28px;
  color: #2c3e50;
  margin: 0;
`;

export const Tag = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #fb4121;
  font-weight: bold;
  margin-left: 2px;

  &::before {
    content: "●";
    margin-right: 8px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: #7f8c8d;
  line-height: 1.6;
  text-align: left; /* Alinhamento mais comum para descrições */
  margin-top: 10px;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: auto; /* A MÁGICA: Isso empurra a lista de contatos para o final do card */
  border-top: 1px solid #f1f2f6;
  padding-top: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  color: #34495e;

  strong {
    min-width: 70px;
  }
`;

export const Icon = styled.span`
  font-size: 18px;
  color: #1bb7d1;
`;
