import React, { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import MapComponent from "../../components/Map/Map";
import { unidades } from "../../data";
import Carousel from "../../components/Carousel/Carousel";
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

              <ContactList>
                <ContactItem>
                  <Icon>
                    <FaMapMarkerAlt />
                  </Icon>
                  <span>
                    <strong>Endereço:</strong> {selectedUnit.endereco}
                  </span>
                </ContactItem>
                <ContactItem>
                  <Icon>
                    <FaPhone />
                  </Icon>
                  <span>
                    <strong>Telefone:</strong> {selectedUnit.contato.telefone}
                  </span>
                </ContactItem>
                <ContactItem>
                  <Icon>
                    <FaEnvelope />
                  </Icon>
                  <span>
                    <strong>Email:</strong> {selectedUnit.contato.email}
                  </span>
                </ContactItem>
              </ContactList>
            </DetailsCard>
          )}
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Unidades;
