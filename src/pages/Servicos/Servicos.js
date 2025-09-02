import {
  ServicesPageContainer,
  MainSection,
  HeaderSection,
  MainTitle,
  ServiceRow,
  ImageContainer,
  TextContainer,
  DifferentialsSection,
  BackgroundInsumos,
  ContainerInsumos,
  TitleInsumos,
  ContentInsumos,
  ButtonInsumos,
  ContainerEquipamentos,
  SectionInfoEquipamentos,
  SectionCarouselEquipamentos,
} from "./styled";
import Carousel from "../../components/ui/Carousel/Carousel";
import PageLayout from "../../components/layout/PageLayout";

const carouselImages = [
  "./images/equipamentos/equipamento1.webp",
  "./images/equipamentos/equipamento2.webp",
  "./images/equipamentos/equipamento3.webp",
];

const mainServiceData = [
  {
    title: "Refeições Universitárias",
    description:
      "A YesCooking oferece um serviço completo de alimentação para universidades públicas, com foco em nutrição, sabor e eficiência. Planejamos e executamos cardápios que atendem às necessidades de uma rotina acadêmica agitada, garantindo qualidade e bem-estar em cada prato.",
    reverse: false,
    image: "./images/servicos/principal.webp",
  },
  {
    title: "Refeições Tranportadas",
    description:
      "Na nossa empresa, preparamos as refeições em uma cozinha central de última geração e as entregamos diretamente no seu ponto de consumo, sempre respeitando rigorosos padrões de higiene e controle de temperatura. Utilizamos embalagens térmicas de alta performance e nossa frota de veículos isotérmicos garante que cada prato chegue com a qualidade.",
    reverse: true,
    image: "./images/servicos/transportadas.webp",
  },
  {
    title: "Refeições Administradas",
    description:
      "Também disponibilizamos o serviço completo de refeições administradas “on-site”, instalando e gerenciando cozinhas ou refeitórios diretamente na sua empresa ou instituição. Nossa equipe especializada prepara e serve o cardápio no local, adaptando-o facilmente a necessidades específicas—dietas restritivas, eventos especiais ou ajustes de última hora.",
    reverse: false,
    image: "./images/servicos/administradas.webp",
  },
];

const background = "./images/utils/fundo-insumos.webp";

function Servicos() {
  return (
    <PageLayout>
      <ServicesPageContainer>
        <MainSection>
          {mainServiceData.map((service, index) => (
            <ServiceRow key={index} reverse={service.reverse}>
              <ImageContainer>
                <img src={service.image} loading="lazy" />
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
          </ContainerInsumos>
        </BackgroundInsumos>
      </ServicesPageContainer>
    </PageLayout>
  );
}

export default Servicos;
