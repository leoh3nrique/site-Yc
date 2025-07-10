import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ContainerAboutUs } from "../AboutUs/styled";

import {
  ButtonAboutLegado,
  CardAboutLegado,
  SectionAboutLegado,
} from "./styled";
import { useState } from "react";
import SectionInfoLegacy from "../../components/SectionInfoLegacy/SectionInfoLegacy";

const Legado = () => {
  const [mostrarContainerPCD, setMostrarContainerPCD] = useState(false);
  const [mostrarContainerMissao, setMostrarContainerMissao] = useState(false);

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

  const handleSaibaMaisPCD = () => {
    setMostrarContainerPCD(true);
  };
  const handleSaibaMaisMissao = () => {
    setMostrarContainerMissao(true);
  };

  return (
    <>
      <Header />
      <ContainerAboutUs>
        <h1> Nosso Legado</h1>
        <a>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only fivpopularised
          in the 1960s with the release of
        </a>
        <a>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only fivpopularised
          in the 1960s with the release of
        </a>
        <a>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only fivpopularised
          in the 1960s with the release of
        </a>
      </ContainerAboutUs>
      <SectionAboutLegado>
        <CardAboutLegado>
          <h1>Projeto PCD</h1>
          <img src="./images/pcd/pcd3.png" />
          <ButtonAboutLegado onClick={handleSaibaMaisPCD}>
            Saiba Mais
          </ButtonAboutLegado>
        </CardAboutLegado>
        <CardAboutLegado>
          <h1>Missões</h1>
          <img src="./images/missoes/m6.jpg" />
          <ButtonAboutLegado onClick={handleSaibaMaisMissao}>
            Saiba Mais
          </ButtonAboutLegado>
        </CardAboutLegado>
      </SectionAboutLegado>
      {mostrarContainerPCD && (
        <SectionInfoLegacy
          title="Projeto PCD"
          description="  Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versio"
          setMostrarContainer={setMostrarContainerPCD}
          images={imagesPCD}
        />
      )}
      {mostrarContainerMissao && (
        <SectionInfoLegacy
          title="Missões"
          description="testetestetestDASDASDASDASDAesLorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially"
          setMostrarContainer={setMostrarContainerMissao}
          images={imagesMissoes}
        />
      )}

      <Footer />
    </>
  );
};

export default Legado;
