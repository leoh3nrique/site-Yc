import React from "react";
import {
  CtaContainer,
  Title,
  Subtitle,
  ButtonWrapper,
  PrimaryButton,
  SecondaryButton,
} from "./styled";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const CtaSection = () => {
  return (
    <CtaContainer>
      <Title>Pronto Para Transformar a Alimentação da Sua Empresa?</Title>
      <Subtitle>
        Solicite um orçamento gratuito e descubra como podemos revolucionar a
        experiência alimentar dos seus colaboradores.
      </Subtitle>
      <ButtonWrapper>
        <PrimaryButton href="tel:+5511999999999">
          <FaPhoneAlt />
          Ligar Agora: (11) 9999-9999
        </PrimaryButton>
        <SecondaryButton href="mailto:contato@yescooking.com.br">
          <FaEnvelope />
          Enviar E-mail
        </SecondaryButton>
      </ButtonWrapper>
    </CtaContainer>
  );
};

export default CtaSection;