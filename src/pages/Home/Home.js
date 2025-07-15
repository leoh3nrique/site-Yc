import { useState } from "react";
import About from "../../components/About/About";
import WelcomeSection from "../../components/Apresentation/Apresentation";
import Carousel from "../../components/Carousel/Carousel";
import DetailsMap from "../../components/DetailsMap/DetailsMap";
import Estatisticas from "../../components/Estatisticas/Estatisticas";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import MapComponent from "../../components/Map/Map";
import Servicos from "../../components/Servicos/Servicos";
import {
  ContainerUnidade,
  SectionUnidade,
} from "../../components/Unidades/styled";
import Unidades from "../../components/Unidades/Unidades";
import { ContainerAboutUs } from "../AboutUs/styled";

function Home() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <div>
      <Header />
      <WelcomeSection />
      {/* <About /> */}
      <ContainerAboutUs>
        <h1>Quem Somos</h1>
        <p className="main-description">
          A Yes Cooking é uma empresa especializada na produção e fornecimento
          de refeições para instituições públicas de ensino superior.
          Atualmente, atendemos com excelência as universidades UFSCar (São
          Carlos, Sorocaba e Buri) e a USP Ribeirão Preto, oferecendo
          alimentação nutritiva, saborosa e acessível para estudantes,
          servidores e comunidade universitária.
        </p>
        <p className="main-description">
          Com uma equipe dedicada e estrutura de ponta, prezamos por qualidade,
          responsabilidade social e acolhimento em cada refeição servida.
        </p>
      </ContainerAboutUs>
      {/* <Servicos /> */}
      {/* <Estatisticas /> */}
      {/* <Carousel images={images} title="Conheça nossas unidades" /> */}

      <Footer />
    </div>
  );
}

export default Home;
