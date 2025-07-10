import { CardOqueFazemos, SectionOqueFazemos, ContainerServicos } from "./styled";

function Servicos() {
  return (
    <ContainerServicos>
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
          <img src="./images/caminhaoTeste.png" alt="Lanches e Coffee breaks" />
          <h3>Lanches e Coffee breaks</h3>
        </CardOqueFazemos>
      </SectionOqueFazemos>
    </ContainerServicos>
  );
}

export default Servicos;