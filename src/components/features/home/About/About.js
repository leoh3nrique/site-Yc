import { useNavigate } from "react-router-dom";
import { ContainerAbout } from "./styled";
import Button from "../../../ui/Button";
import { goToPage } from "../../../../App";

function About() {
  const navigate = useNavigate();

  return (
    <ContainerAbout>
      <h1>Quem Somos</h1>
      <p className="main-description">
        Na <span className="vermelho">Yes</span>
        <span>Cooking</span>, acreditamos que uma boa refeição vai além do
        sabor: é um ato de cuidado, missão e propósito. Somos especializados na
        produção e fornecimento de refeições para instituições públicas de
        ensino superior, com foco em qualidade, responsabilidade e acolhimento.
      </p>
      <p className="main-description">
        Atualmente, servimos com excelência as universidades <span className="unidades">UFSCar (São Carlos,
        Sorocaba, Araras e Buri) e a USP (Ribeirão Preto)</span>, oferecendo
        alimentação nutritiva, saborosa e acessível a estudantes, servidores e
        toda a comunidade universitária.
      </p>
      <p className="main-description">
        Nossa equipe é comprometida e preparada, contando com estrutura moderna
        e processos eficientes. Mais do que alimentar, buscamos impactar vidas
        com excelência e propósito.
      </p>

      <Button
        as="a"
        onClick={() => goToPage(navigate, "cultura")}
        variant="primary"
      >
        Saiba Mais
      </Button>
    </ContainerAbout>
  );
}

export default About;
