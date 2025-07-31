import React from "react";
import {
  ServicesPageContainer,
  MainSection,
  HeaderSection,
  MainTitle,
  ServiceRow,
  ImageContainer,
  TextContainer,
  // Botões removidos dos imports
  DifferentialsSection,
  DifferentialCard,
  IconWrapper,
  OtherServicesSection,
  OtherServiceCard,
  ContainerInsumos,
  TitleInsumos,
  ContentInsumos,
  BackgroundInsumos,
  ButtonInsumos,
} from "./styled";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

// --- Dados da Seção Principal ---
const mainServiceData = [
  {
    title: "Refeição Administrada",
    description:
      "Assumimos a gestão completa do seu restaurante ou refeitório. Cuidamos de tudo, desde a compra de insumos e gestão de equipe até o preparo final das refeições no local, permitindo que sua empresa foque no que faz de melhor.",
    image: "./images/quemsomos/qs1.jpg",
    reverse: false,
  },
  {
    title: "Refeição Transportada",
    description:
      "Nossas refeições são preparadas em nossa cozinha central com os mais altos padrões de qualidade e segurança, e então transportadas em veículos climatizados, garantindo que o sabor e a temperatura cheguem perfeitos ao seu refeitório.",
    image: "./images/caminhaoTeste.png",
    reverse: true,
  },
  {
    title: "Refeição Hospitalar",
    description:
      "Desenvolvemos cardápios específicos para o ambiente hospitalar, seguindo rigorosas dietas e restrições. Nosso foco é oferecer uma alimentação segura, nutritiva e saborosa, que contribua para a recuperação e o bem-estar dos pacientes.",
    image: "./images/comidas/comida2.jpg",
    reverse: false,
  },
];

const differentialsData = [
  {
    title: "Equipamentos de Última Geração",
    description:
      "Contamos com equipamentos de última geração que asseguram eficiência, segurança alimentar e alto padrão de qualidade em cada etapa do processo.",
  },
  {
    title: "Ultracongelamento Cook & Chill",
    description:
      "Aplicamos a técnica Cook & Chill para preservar sabor, textura e valor nutricional dos alimentos — refeições sempre frescas, seguras e deliciosas.",
  },
  {
    title: "Opções Veganas e Vegetarianas",
    description:
      "Oferecemos opções vegetarianas e veganas cuidadosamente elaboradas, garantindo refeições equilibradas, saborosas e acessíveis a todos os perfis alimentares.",
  },
];
const otherServicesData = [
  { image: "./images/comidas/comida2.jpg", title: "Marmitas" },
  { image: "./images/comidas/comida3.jpg", title: "Coffee Breaks" },
  { image: "./images/quemsomos/qs1.jpg", title: "Lanches" },
  { image: "./images/quemsomos/qs2.jpg", title: "Desjejum" },
];

function Servicos() {
  const background = "./images/fundo-insumos.png";

  return (
    <>
      <Header />
      <ServicesPageContainer>
        <MainSection>
          <HeaderSection>
            <MainTitle>Nossos Modelos de Serviço</MainTitle>
          </HeaderSection>
          {mainServiceData.map((service, index) => (
            <ServiceRow key={index} reverse={service.reverse}>
              <ImageContainer>
                <img src={service.image} alt={service.title} />
              </ImageContainer>
              <TextContainer>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </TextContainer>
            </ServiceRow>
          ))}
        </MainSection>

        <DifferentialsSection>
          <HeaderSection>
            <MainTitle>Nossos Diferenciais</MainTitle>
          </HeaderSection>
          <div className="cards-container">
            {differentialsData.map((item, index) => (
              <DifferentialCard key={index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </DifferentialCard>
            ))}
          </div>
        </DifferentialsSection>

        {/* <OtherServicesSection>
          <HeaderSection>
            <MainTitle>Outras Soluções</MainTitle>
          </HeaderSection>
          <div className="gallery-container">
            {otherServicesData.map((item, index) => (
              <OtherServiceCard key={index}>
                <img src={item.image} alt={item.title} />
                <h5>{item.title}</h5>
              </OtherServiceCard>
            ))}
          </div>
        </OtherServicesSection> */}
        <BackgroundInsumos bgImage={background}>
          <ContainerInsumos>
            <TitleInsumos>Seleção de Insumos</TitleInsumos>
            <ContentInsumos>
              A Yes Cooking acredita que uma alimentação saudável começa na
              seleção dos fornecedores qualificando a rastreabilidade dos
              insumos. Não importa se será servida em uma universidade, um
              hospital ou uma lanchonete.
            </ContentInsumos>
            <ContentInsumos>
              Gostaria de fazer parte do time? Entre em contato!
            </ContentInsumos>
            <ButtonInsumos>Contato</ButtonInsumos>
          </ContainerInsumos>
        </BackgroundInsumos>
      </ServicesPageContainer>
      <Footer />
    </>
  );
}

export default Servicos;
