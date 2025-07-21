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
} from "./styled";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Carousel from "../Carousel/Carousel"; // 1. Importar o Carousel

// 2. Definir as imagens para o carrossel
const carouselImages = [
  "./images/servicos/principal.jpg",
  "./images/servicos/principal.jpg",
  "./images/servicos/principal.jpg",
  "./images/servicos/principal.jpg",
];

const mainServiceData = [
  {
    title: "Refeições Universitárias",
    description:
      "A Yes Cooking oferece um serviço completo de alimentação para universidades públicas, com foco em nutrição, sabor e eficiência. Planejamos e executamos cardápios que atendem às necessidades de uma rotina acadêmica agitada, garantindo qualidade e bem-estar em cada prato.",
    reverse: false,
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

function Servicos() {
  return (
    <div>
      <Header />
      <ServicesPageContainer>
        <MainSection>
          {mainServiceData.map((service, index) => (
            <ServiceRow key={index} reverse={service.reverse}>
              <ImageContainer>
                {/* 3. Substituir a <img> pelo <Carousel> */}
                <Carousel
                  images={carouselImages}
                  autoplay={true}
                  interval={2500}
                />
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

        <OtherServicesSection>
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
        </OtherServicesSection>
      </ServicesPageContainer>
      <Footer />
    </div>
  );
}

export default Servicos;
