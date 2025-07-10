import {
  Apresentation,
  ContainerApresentation,
  SectionButtons,
  SectionPlayVideo,
  StyledButton,
} from "./styled";
// import background from ".";
// import iconPlay from "../../assets/iconPlay.png";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function WelcomeSection() {
  const background = "./images/teste.png";

  return (
    <ContainerApresentation bgImage={background}>
      <Apresentation>
        <h1> Bem vindo a Yes Cooking</h1>
        <a>A nossa missão é fazer a missão!</a>
        <SectionButtons>
          <StyledButton class="btn-conheca" onclick="scrollToSection()">
            Conheça
          </StyledButton>
          <SectionPlayVideo>
            <button>
              
              <VideoPlayer videoId="dQw4w9WgXcQ" />
            </button>
            <span>Assistir Vídeo</span>
          </SectionPlayVideo>
        </SectionButtons>
      </Apresentation>
    </ContainerApresentation>
  );
}

export default WelcomeSection;
