import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import {
  PrivacyContainer,
  Title,
  SectionTitle,
  Paragraph,
  StyledList,
  StyledLink,
} from "./styled";

const AvisoPrivacidade = () => {
  return (
    <PageLayout>
      <PrivacyContainer>
        <Title>Aviso de Privacidade</Title>
        <Paragraph>
          <strong>Última atualização:</strong> 28 de Agosto de 2025
        </Paragraph>

        <Paragraph>
          A Yes Cooking ("nós", "nosso") está comprometida em proteger a
          privacidade e a segurança dos dados pessoais de seus usuários
          ("você"). Este Aviso de Privacidade descreve como coletamos, usamos,
          compartilhamos e protegemos as informações que você nos fornece ao
          utilizar nosso site.
        </Paragraph>

        <SectionTitle>1. Dados que Coletamos</SectionTitle>
        <Paragraph>
          Coletamos informações que você nos fornece diretamente através dos
          nossos formulários:
        </Paragraph>
        <StyledList>
          <li>
            <strong>Formulário de Contato:</strong> Nome, telefone, e-mail,
            setor de interesse e a mensagem que você nos envia.
          </li>
          <li>
            <strong>Formulário "Trabalhe Conosco":</strong> Nome, telefone,
            e-mail, área de interesse, mensagem de apresentação e seu currículo
            em arquivo (PDF, DOC ou DOCX).
          </li>
        </StyledList>

        <SectionTitle>2. Como Usamos Seus Dados</SectionTitle>
        <Paragraph>
          As informações coletadas são utilizadas para as seguintes finalidades:
        </Paragraph>
        <StyledList>
          <li>
            <strong>Para responder às suas solicitações:</strong> Usamos os
            dados do formulário de contato para responder às suas perguntas e
            fornecer as informações solicitadas.
          </li>
          <li>
            <strong>Para processos seletivos:</strong> Usamos os dados e o
            currículo do formulário "Trabalhe Conosco" para avaliar sua
            candidatura a vagas de emprego em nossa empresa.
          </li>
          <li>
            <strong>Para comunicação:</strong> Podemos usar seu e-mail ou
            telefone para entrar em contato sobre sua solicitação ou
            candidatura.
          </li>
        </StyledList>

        <SectionTitle>3. Compartilhamento de Dados com Terceiros</SectionTitle>
        <Paragraph>
          Para que nosso site funcione, compartilhamos seus dados com serviços
          de terceiros que atuam como operadores de dados em nosso nome. São
          eles:
        </Paragraph>
        <StyledList>
          <li>
            <strong>Formspree:</strong> Nossos formulários são processados por
            este serviço. Quando você envia um formulário, os dados são enviados
            para o Formspree para que possam ser entregues a nós. Leia a{" "}
            <StyledLink
              href="https://formspree.io/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade do Formspree
            </StyledLink>
            .
          </li>
          <li>
            <strong>Uploadcare:</strong> Os arquivos (currículos) enviados
            através do formulário "Trabalhe Conosco" são processados e
            armazenados de forma segura pelo Uploadcare. Leia a{" "}
            <StyledLink
              href="https://uploadcare.com/about/privacy_policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade do Uploadcare
            </StyledLink>
            .
          </li>
          <li>
            <strong>Google Maps:</strong> Utilizamos o serviço de mapas do
            Google em nossa página de unidades. O uso deste recurso está sujeito
            à{" "}
            <StyledLink
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade do Google
            </StyledLink>
            .
          </li>
        </StyledList>
        <Paragraph>
          Não vendemos nem alugamos suas informações pessoais a terceiros.
        </Paragraph>

        <SectionTitle>4. Armazenamento e Segurança dos Dados</SectionTitle>
        <Paragraph>
          Os dados que você nos envia são armazenados nos servidores seguros dos
          nossos parceiros (Formspree e Uploadcare). Adotamos práticas de
          segurança para proteger suas informações, mas lembramos que nenhum
          método de transmissão pela internet é 100% seguro.
        </Paragraph>

        <SectionTitle>5. Seus Direitos</SectionTitle>
        <Paragraph>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o
          direito de acessar, corrigir, solicitar a exclusão e obter informações
          sobre o compartilhamento de seus dados. Para exercer seus direitos,
          entre em contato conosco através do e-mail:{" "}
          <strong>comercial.yescooking@gmail.com</strong>.
        </Paragraph>

        <SectionTitle>6. Contato</SectionTitle>
        <Paragraph>
          Se você tiver alguma dúvida sobre este Aviso de Privacidade, entre em
          contato conosco:
        </Paragraph>
        <StyledList>
          <li>
            <strong>E-mail:</strong> comercial.yescooking@gmail.com
          </li>
          <li>
            <strong>Telefone:</strong> (16) 3376-9997
          </li>
        </StyledList>
      </PrivacyContainer>
    </PageLayout>
  );
};

export default AvisoPrivacidade;
