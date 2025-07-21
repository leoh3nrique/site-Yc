import {
  Apresentation,
  ContainerApresentation,
  SectionButtons,
  SectionPlayVideo,
  StyledAnchor,
  StyledTitleApresentation,
} from "./styled";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function WelcomeSection() {
  const background = "./images/utils/apresentation.jpeg";

  return (
    <ContainerApresentation bgImage={background}>
      <Apresentation>
        <h1> Bem vindo a Yes Cooking</h1>
        <StyledTitleApresentation>
          A nossa missão é fazer a missão!
        </StyledTitleApresentation>
        <SectionButtons>
          <StyledAnchor class="btn-conheca" href="/servicos">
            Conheça
          </StyledAnchor>
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
