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
      <About />
      {/* <Servicos /> */}
      {/* <Estatisticas /> */}
      {/* <Carousel images={images} title="Conheça nossas unidades" /> */}

      <Footer />
    </div>
  );
}

export default Home;
