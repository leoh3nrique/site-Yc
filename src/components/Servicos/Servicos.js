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

const mainServiceData = [
  {
    title: "Refeições Universitárias",
    description:
      "A Yes Cooking oferece um serviço completo de alimentação para universidades públicas, com foco em nutrição, sabor e eficiência. Planejamos e executamos cardápios que atendem às necessidades de uma rotina acadêmica agitada, garantindo qualidade e bem-estar em cada prato.",
    image: "./images/servicos/principal.png",
    reverse: false,
  },
];

const differentialsData = [
  {
    icon: "⚙️",
    title: "Equipamentos de Última Geração",
    description:
      "Utilizamos tecnologia de ponta para garantir a máxima eficiência, segurança alimentar e qualidade em todos os processos.",
  },
  {
    icon: "❄️",
    title: "Ultracongelamento Cook & Chill",
    description:
      "Nossa técnica preserva o sabor, os nutrientes e a textura dos alimentos, garantindo refeições sempre frescas e seguras.",
  },
  {
    icon: "🌱",
    title: "Opções Veganas e Vegetarianas",
    description:
      "Desenvolvemos cardápios inclusivos e saborosos, com opções completas para dietas vegetarianas e veganas.",
  },
];

const otherServicesData = [
  { image: "./images/servicos/marmitas.jpg", title: "Marmitas" },
  { image: "./images/comidas/comida3.jpg", title: "Coffee Breaks" },
  { image: "./images/quemsomos/qs1.jpg", title: "Lanches" },
  { image: "./images/quemsomos/qs2.jpg", title: "Desjejum" },
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
                <IconWrapper>{item.icon}</IconWrapper>
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
