import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Estatisticas from "../../components/Estatisticas/Estatisticas";
import SectionInfoLegacy from "../../components/SectionInfoLegacy/SectionInfoLegacy";
import Timeline from "../../components/Timeline/Timeline";
import {
  ContainerAboutUs,
  Card,
  ContainerCard,
  SectionOqueFazemos,
  CardOqueFazemos,
  SectionLegacy, // Importado de styled.js
  CardLegacy, // Importado de styled.js
  ButtonLegacy,
  SectionCultura,
  CardCultura,
  ValoresList, // Importado de styled.js
} from "./styled";
import Unidades from "../../components/Unidades/Unidades";

function AboutUs() {
  const [mostrarContainerPCD, setMostrarContainerPCD] = useState(false);
  const [mostrarContainerMissao, setMostrarContainerMissao] = useState(false);

  // Dados para os modais (anteriormente em Legado.js)
  const imagesPCD = [
    "./images/pcd/pcd3.png",
    "./images/pcd/pcd4.png",
    "./images/pcd/pcd5.png",
    "./images/pcd/pcd6.png",
  ];
  const imagesMissoes = [
    "./images/missoes/m1.jpg",
    "./images/missoes/m2.jpg",
    "./images/missoes/m3.jpg",
    "./images/missoes/m4.jpg",
    "./images/missoes/m5.jpg",
    "./images/missoes/m6.jpg",
    "./images/missoes/m7.jpg",
  ];

  const culturaData = [
    {
      title: "Missão",
      description:
        "Garantir refeições seguras, equilibradas e saborosas, contribuindo para a saúde e o bem-estar da comunidade acadêmica.",
      icon: "./images/coracaoTeste.png", // Exemplo de ícone
    },
    {
      title: "Visão",
      description:
        "Sermos referência em alimentação universitária, reconhecida por nosso compromisso com a qualidade, inovação e impacto social.",
      icon: "./images/coracaoTeste.png", // Exemplo de ícone
    },
    {
      title: "Valores",
      items: [
        "Qualidade em cada etapa",
        "Ética e responsabilidade",
        "Valorização das pessoas",
        "Respeito à diversidade",
        "Sustentabilidade e transparência",
      ],
      icon: "./images/coracaoTeste.png", // Exemplo de ícone
    },
  ];

  return (
    <>
      <Header />
      

      <ContainerAboutUs>
        <h2>Nossa Cultura</h2>
        <SectionCultura>
          {culturaData.map((item) => (
            <CardCultura key={item.title}>
              <div className="card-title">
                <img src={item.icon} alt={`${item.title} icon`} />
                <h3>{item.title}</h3>
              </div>
              {item.description && <p>{item.description}</p>}
              {item.items && (
                <ValoresList>
                  {item.items.map((valor) => (
                    <li key={valor}>{valor}</li>
                  ))}
                </ValoresList>
              )}
            </CardCultura>
          ))}
        </SectionCultura>
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
            <img
              src="./images/caminhaoTeste.png"
              alt="Lanches e Coffee breaks"
            />
            <h3>Lanches e Coffee breaks</h3>
          </CardOqueFazemos>
        </SectionOqueFazemos>
      </ContainerAboutUs>

      <Estatisticas />

      <Timeline />

      <Unidades />

      {/* <SectionLegacy>
        <CardLegacy>
          <h1>Projeto PCD</h1>
          <img src="./images/pcd/pcd3.png" alt="Projeto PCD" />
          <ButtonLegacy onClick={() => setMostrarContainerPCD(true)}>
            Saiba Mais
          </ButtonLegacy>
        </CardLegacy>
        <CardLegacy>
          <h1>Missões</h1>
          <img src="./images/missoes/m6.jpg" alt="Missões" />
          <ButtonLegacy onClick={() => setMostrarContainerMissao(true)}>
            Saiba Mais
          </ButtonLegacy>
        </CardLegacy>
      </SectionLegacy>
      <Timeline />


      {mostrarContainerPCD && (
        <SectionInfoLegacy
          title="Projeto PCD"
          description="Lorem Ipsum has been the industry's standard dummy text..."
          setMostrarContainer={setMostrarContainerPCD}
          images={imagesPCD}
        />
      )}
      {mostrarContainerMissao && (
        <SectionInfoLegacy
          title="Missões"
          description="testetestetestDASDASDASDASDAesLorem Ipsum has been the industry's standard..."
          setMostrarContainer={setMostrarContainerMissao}
          images={imagesMissoes}
        />
      )}
 */}
      <Footer />
    </>
  );
}

export default AboutUs;
54;
