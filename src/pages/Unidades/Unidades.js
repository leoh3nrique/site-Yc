import { useState } from "react";
import DetailsMap from "../../components/DetailsMap/DetailsMap";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import MapComponent from "../../components/Map/Map";
import { ContainerUnidade, SectionUnidade } from "./styled";

const Unidades = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <>
      <Header />
      <ContainerUnidade>
        <h1>Nossas Unidades</h1>
        <SectionUnidade>
          <MapComponent
            selectedUnit={selectedUnit}
            setSelectedUnit={setSelectedUnit}
          />

          <DetailsMap unit={selectedUnit} />
        </SectionUnidade>
      </ContainerUnidade>
      <Footer />
    </>
  );
};

export default Unidades;
