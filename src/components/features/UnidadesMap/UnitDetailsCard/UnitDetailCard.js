import Carousel from "../Carousel/Carousel";
import {
  DetailsContainer,
  BackButton,
  DetailsTitle,
  Tag,
  Description,
  ContactList,
  ContactItem,
  Icon,
} from "./styled";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const UnitDetailCard = ({ unit, onBack }) => {
  if (!unit) return null;

  return (
    <DetailsContainer>
      <BackButton onClick={onBack}>&larr; Voltar para a lista</BackButton>
      <div>
        <DetailsTitle>{unit.nome}</DetailsTitle>
        <Tag>Centro de Distribuição</Tag>
      </div>

      <Carousel
        images={unit.images} // As imagens virão do seu arquivo data.js
        pagination={{ clickable: true }}
        loop
      />
      <Description>{unit.descricao}</Description>

      <ContactList>
        <ContactItem>
          <Icon>
            <FaMapMarkerAlt />
          </Icon>
          <span>
            <strong>Endereço:</strong> {unit.endereco}
          </span>
        </ContactItem>
        <ContactItem>
          <Icon>
            <FaPhone />
          </Icon>
          <span>
            <strong>Telefone:</strong> {unit.contato.telefone}
          </span>
        </ContactItem>
        <ContactItem>
          <Icon>
            <FaEnvelope />
          </Icon>
          <span>
            <strong>Email:</strong> {unit.contato.email}
          </span>
        </ContactItem>
      </ContactList>
    </DetailsContainer>
  );
};

export default UnitDetailCard;
