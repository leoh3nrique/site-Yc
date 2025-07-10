import { Header } from "../../components/Header/Header";
import {
  Card,
  CardInformacoes,
  CardOqueFazemos,
  ContainerAboutUs,
  ContainerCard,
  SectionFoodImages,
  SectionInformacoes,
  SectionOqueFazemos,
} from "./styled";
import { Footer } from "../../components/Footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carousel from "../../components/Carousel/Carousel";

function AboutUs() {
  // Define os caminhos base para as imagens que estão na pasta public
  const imageBase = "./images/";
  const unidadesBase = `${imageBase}unidades/`;
  const comidasBase = `.${imageBase}comidas/`;

  const coracaoImg = `${imageBase}coracaoTeste.png`;
  const caminhaoImg = `${imageBase}caminhaoTeste.png`;

  // Imagem usada nos cards de "O que fazemos" (pode ser alterada conforme necessário)
  const servicosImg = caminhaoImg;

  // Imagens para o Carousel (se for utilizado)
  const images = [
    { src: `${unidadesBase}sc1.jpg` },
    { src: `${unidadesBase}sc2.jpg` },
    { src: `${unidadesBase}sc3.jpg` },
  ];

  return (
    <>
      <Header />
      <ContainerAboutUs>
        <h1>Quem somos</h1>
        <a>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions.
        </a>
        <ContainerCard>
          <Card>
            <div className="card-title">
              <img src={coracaoImg} alt="Ícone de coração" />
              <h3>Nossos Valores</h3>
            </div>
            <div>
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, popularised in the 1960s with the
                release of.
              </a>
            </div>
          </Card>
          <Card>
            <div className="card-title">
              <img src={coracaoImg} alt="Ícone de coração" />
              <h3>Nossos Valores</h3>
            </div>
            <div>
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, popularised in the 1960s with the
                release of.
              </a>
            </div>
          </Card>
          <Card>
            <div className="card-title">
              <img src={coracaoImg} alt="Ícone de coração" />
              <h3>Nossos Valores</h3>
            </div>
            <div>
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, popularised in the 1960s with the
                release of.
              </a>
            </div>
          </Card>
          <Card>
            <div className="card-title">
              <img src={coracaoImg} alt="Ícone de coração" />
              <h3>Nossos Valores</h3>
            </div>
            <div>
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, popularised in the 1960s with the
                release of.
              </a>
            </div>
          </Card>
        </ContainerCard>
      </ContainerAboutUs>

      <ContainerAboutUs>
        <h1>O que fazemos</h1>
        <SectionOqueFazemos>
          <CardOqueFazemos>
            <img src="./images/quemsomos/qs1.jpg" alt="Serviços alimentares" />
            <h3>Serviços alimentares</h3>
          </CardOqueFazemos>
          <CardOqueFazemos>
            <img src="./images/quemsomos/qs2.jpg" alt="Marmitas" />
            <h3>Marmitas</h3>
          </CardOqueFazemos>
          <CardOqueFazemos>
            <img src={servicosImg} alt="Lanches e Coffee breaks" />
            <h3>Lanches e Coffee breaks</h3>
          </CardOqueFazemos>
        </SectionOqueFazemos>

        <SectionInformacoes>
          <CardInformacoes>
            <img src={coracaoImg} alt="Ícone de coração" />
            <span>Aproximadamente 100 colaboradores</span>
          </CardInformacoes>
          <CardInformacoes>
            <img src={coracaoImg} alt="Ícone de coração" />
            <span>8.000 quilos de insumos consumidos</span>
          </CardInformacoes>
          <CardInformacoes>
            <img src={coracaoImg} alt="Ícone de coração" />
            <span>6 unidades atendidas</span>
          </CardInformacoes>
          <CardInformacoes>
            <img src={coracaoImg} alt="Ícone de coração" />
            <span>Mais de 9.000 refeições servidas por dia</span>
          </CardInformacoes>
        </SectionInformacoes>

        {/* <SectionFoodImages>
          <img
            className="comida1"
            src={`${comidasBase}comida1.jpg`}
            alt="Comida 1"
          />
          <img
            className="comida2"
            src={`${comidasBase}comida2.jpg`}
            alt="Comida 2"
          />
          <img
            className="comida3"
            src={`${comidasBase}comida3.jpg`}
            alt="Comida 3"
          />
          <img
            className="comida4"
            src={`${comidasBase}comida4.jpg`}
            alt="Comida 4"""
          />
          <img
            className="comida5"
            src={`${comidasBase}comida5.jpg`}
            alt="Comida 5"
          />
          <img
            className="comida6"
            src={`${comidasBase}comida6.jpg`}
            alt="Comida 6"
          />
        </SectionFoodImages> */}
      </ContainerAboutUs>

      <Footer />
    </>
  );
}

export default AboutUs;
