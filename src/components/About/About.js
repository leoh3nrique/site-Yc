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
        A Yes Cooking é uma empresa especializada na produção e fornecimento de
        refeições para instituições públicas de ensino superior. Atualmente,
        atendemos com excelência as universidades UFSCar (São Carlos, Sorocaba e
        Buri) e a USP Ribeirão Preto, oferecendo alimentação nutritiva, saborosa
        e acessível para estudantes, servidores e comunidade universitária.
      </p>
      <p className="main-description">
        Com uma equipe dedicada e estrutura de ponta, prezamos por qualidade,
        responsabilidade social e acolhimento em cada refeição servida.
      </p>
      <ButtonAbout onClick={goToCultura}>Saiba mais</ButtonAbout>
    </ContainerAbout>
  );
}

export default About;
