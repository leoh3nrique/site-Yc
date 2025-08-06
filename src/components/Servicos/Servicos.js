import {
  ServicesPageContainer,
  MainSection,
  HeaderSection,
  MainTitle,
  ServiceRow,
  ImageContainer,
  TextContainer,
  DifferentialsSection,
  DifferentialCard,
  IconWrapper,
  OtherServicesSection,
  OtherServiceCard,
  BackgroundInsumos,
  ContainerInsumos,
  TitleInsumos,
  ContentInsumos,
  ButtonInsumos,
  ContainerEquipamentos,
  SectionInfoEquipamentos,
  SectionCarouselEquipamentos,
} from "./styled";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Carousel from "../Carousel/Carousel"; // 1. Importar o Carousel

const carouselImages = [
  "./images/equipamentos/4.jpg",
  "./images/equipamentos/1.jpg",
  "./images/equipamentos/2.jpg",
  "./images/equipamentos/3.jpg",
];

const mainServiceData = [
  {
    title: "Refeições Universitárias",
    description:
      "A YesCooking oferece um serviço completo de alimentação para universidades públicas, com foco em nutrição, sabor e eficiência. Planejamos e executamos cardápios que atendem às necessidades de uma rotina acadêmica agitada, garantindo qualidade e bem-estar em cada prato.",
    reverse: false,
    image: "./images/servicos/principal.jpg",
  },
  {
    title: "Refeições Tranportadas",
    description:
      "Na nossa empresa, preparamos as refeições em uma cozinha central de última geração e as entregamos diretamente no seu ponto de consumo, sempre respeitando rigorosos padrões de higiene e controle de temperatura. Utilizamos embalagens térmicas de alta performance e nossa frota de veículos isotérmicos garante que cada prato chegue com a qualidade.",
    reverse: true,
    image: "./images/servicos/transportadas.jpg",
  },
  {
    title: "Refeições Administradas",
    description:
      "Também disponibilizamos o serviço completo de refeições administradas “on-site”, instalando e gerenciando cozinhas ou refeitórios diretamente na sua empresa ou instituição. Nossa equipe especializada prepara e serve o cardápio no local, adaptando-o facilmente a necessidades específicas—dietas restritivas, eventos especiais ou ajustes de última hora.",
    reverse: false,
    image: "./images/servicos/administradas.jpg",
  },
];

const differentialsData = [
  {
    icon: "⚙️",
    title: "Equipamentos",
    description:
      "Contamos com equipamentos de última geração que asseguram eficiência, segurança alimentar e alto padrão de qualidade em cada etapa do processo.",
  },
  {
    icon: "❄️",
    title: "Ultracongelamento Cook & Chill",
    description:
      "Aplicamos a técnica Cook & Chill para preservar sabor, textura e valor nutricional dos alimentos, refeições sempre frescas e deliciosas.",
  },
  {
    icon: "🌱",
    title: "Cardápios inclusivos",
    description:
      "Oferecemos opções vegetarianas e veganas cuidadosamente elaboradas, garantindo refeições equilibradas, saborosas e acessíveis a todos os perfis alimentares.",
  },
];

const otherServicesData = [
  { image: "./images/servicos/marmitas.jpg", title: "Marmitas" },
  { image: "./images/comidas/coofebreak.jpg", title: "Coffee Breaks" },
  { image: "./images/comidas/lanche.jpg", title: "Lanches" },
  { image: "./images/comidas/desjejum.jpg", title: "Desjejum" },
];

const background = "./images/fundo-insumos.png";

function Servicos() {
  return (
    <div>
      <Header />
      <ServicesPageContainer>
        <MainSection>
          {mainServiceData.map((service, index) => (
            <ServiceRow key={index} reverse={service.reverse}>
              <ImageContainer>
                <img src={service.image} />
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
          {/* <div className="cards-container">
            {differentialsData.map((item, index) => (
              <DifferentialCard key={index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </DifferentialCard>
            ))}
          </div> */}

          <ContainerEquipamentos>
            <SectionInfoEquipamentos>
              <p>
                Na <span>YesCooking</span>, a qualidade começa na estrutura.
                Nossas cozinhas contam com equipamentos industriais modernos,
                capazes de atender com excelência grandes volumes, sem abrir mão
                da segurança alimentar e da eficiência energética.
              </p>

              <ul>
                <li>Filtros de ar, exaustores e coifas industriais</li>
                <li>Fornos combinados e ultracongeladores (Cook & Chill)</li>
                <li>Equipamentos de cocção a vapor e pressão</li>
                <li>Câmaras frias monitoradas 24h</li>
              </ul>

              <p>
                Essa estrutura nos permite entregar refeições{" "}
                <span>seguras, padronizadas</span> e dentro das normas mais
                exigentes.
              </p>
            </SectionInfoEquipamentos>
            <SectionCarouselEquipamentos>
              <Carousel images={carouselImages} loop />
            </SectionCarouselEquipamentos>
          </ContainerEquipamentos>
        </DifferentialsSection>
        <BackgroundInsumos bgImage={background}>
          <ContainerInsumos>
            <TitleInsumos>Seleção de Insumos</TitleInsumos>
            <ContentInsumos>
              A YesCooking acredita que uma alimentação saudável começa na
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
    </div>
  );
}

export default Servicos;
