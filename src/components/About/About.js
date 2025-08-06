import { useNavigate } from "react-router-dom";
import { ButtonAbout, ContainerAbout } from "./styled";

function About() {
  const navigate = useNavigate();

  const goToCultura = () => {
    navigate("/cultura");
  };

  return (
    <ContainerAbout>
      <h1>Quem Somos</h1>
      <p className="main-description">
        Na <span className="vermelho">Yes</span><span>Cooking</span>, acreditamos que uma boa refeição vai além do
        sabor: é um ato de cuidado, missão e propósito. Somos especializados na
        produção e fornecimento de refeições para instituições públicas de
        ensino superior, com foco em qualidade, responsabilidade e acolhimento.
      </p>
      <p className="main-description">
        Atualmente, servimos com excelência as universidades UFSCar (São Carlos,
        Sorocaba, Araras e Buri e a USP Ribeirão Preto), oferecendo alimentação
        nutritiva, saborosa e acessível a estudantes, servidores e toda a
        comunidade universitária.
      </p>
      <p className="main-description">
        Nossa equipe é comprometida e preparada, contando com estrutura moderna
        e processos eficientes. Mais do que alimentar, buscamos impactar vidas
        com excelência e propósito.
      </p>
      <ButtonAbout onClick={goToCultura}>Saiba mais</ButtonAbout>
    </ContainerAbout>
  );
}

export default About;
