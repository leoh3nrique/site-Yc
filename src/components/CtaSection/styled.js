import styled from "styled-components";

export const CtaContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(90deg, #1bb7d1 0%, #fb4121 100%);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #1bb7d1;

  font-size: 40px;
  font-weight: bold;
  margin-bottom: 15px;
  max-width: 600px;
  line-height: 1.3;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.p`
  font-size: 18px;
  max-width: 700px;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Para que os botões quebrem em telas menores */
  justify-content: center;
`;

const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  svg {
    font-size: 18px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: white;
  color: #2c3e50; /* Um azul escuro para o texto */

  &:hover {
    background-color: #f1f2f6;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: white;
  }
`;
