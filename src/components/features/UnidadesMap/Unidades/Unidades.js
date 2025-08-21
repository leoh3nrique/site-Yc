import React, { useState } from "react";
import { Footer } from "../../../layout/Footer/Footer";
import { Header } from "../../../layout/Header/Header";
import MapComponent from "../Map/Map";
import { unidades } from "../../../../data";
import Carousel from "../../../ui/Carousel/Carousel";
import {
  PageContainer,
  HeaderSection,
  MainTitle,
  Subtitle,
  ContentContainer,
  MapWrapper,
  DetailsCard,
  DetailsTitle,
  Tag,
  Description,
  ContactList,
  ContactItem,
  Icon,
} from "./styled";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Unidades = () => {
  const [selectedUnit, setSelectedUnit] = useState(unidades[0]);

  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <>
      <PageContainer>
        <HeaderSection>
          <MainTitle>Nossas Unidades</MainTitle>
          <Subtitle>
            Clique em um ponto no mapa para ver fotos e detalhes de cada
            unidade.
          </Subtitle>
        </HeaderSection>

        <ContentContainer>
          <MapWrapper>
            <MapComponent
              unidades={unidades}
              selectedUnit={selectedUnit}
              onSelectUnit={handleSelectUnit}
            />
          </MapWrapper>
          {selectedUnit && (
            <DetailsCard>
              <div>
                <DetailsTitle>{selectedUnit.nome}</DetailsTitle>
                <Tag>Centro de Distribuição</Tag>
              </div>

              <Carousel
                images={selectedUnit.images}
                pagination={{ clickable: true }}
                loop
              />

              <Description>{selectedUnit.descricao}</Description>
            </DetailsCard>
          )}
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Unidades;
