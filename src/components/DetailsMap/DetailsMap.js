import styled from "styled-components";
import Carousel from "../Carousel/Carousel";

const DetailsContainer = styled.div`
  padding: 20px;
  width: 45%;
  height: 500px;
  border-radius: 4px;
  h3 {
    font-family: "Staatliches", sans-serif;
    color: #fb4121;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const DetailsMap = ({ unit }) => {
  if (!unit) {
    return (
      <DetailsContainer>
        <p>Selecione uma unidade para ver os detalhes.</p>
      </DetailsContainer>
    );
  }

  return (
    <DetailsContainer>
      <h2>{unit.nome}</h2>

      <Carousel
        images={unit.images}
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{ delay: 5 }}
        pagination={{ clickable: true }}
      />
      <p>{unit.descricao}</p>
      <p>
        <strong>Endereço:</strong> {unit.endereco}
      </p>
      <p>
        <strong>Telefone:</strong> {unit.contato.telefone}
      </p>
      <p>
        <strong>Email:</strong> {unit.contato.email}
      </p>
    </DetailsContainer>
  );
};

export default DetailsMap;
