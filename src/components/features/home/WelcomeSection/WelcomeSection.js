import {
  Apresentation,
  ContainerApresentation,
  SectionButtons,
  SectionPlayVideo,
  StyledTitleApresentation,
} from "./styled";
import VideoPlayer from "../../../ui/VideoPlayer/VideoPlayer";
import Button from "../../../ui/Button";

function WelcomeSection() {
  const background = "./images/utils/apresentation.jpeg";

  return (
    <ContainerApresentation bgImage={background}>
      <Apresentation>
        <h1> Bem vindo a YesCooking</h1>
        <StyledTitleApresentation>
          A nossa missão é fazer a missão!
        </StyledTitleApresentation>
        <SectionButtons>
          <Button as="a" href="/servicos" variant="primary">
            Conheça
          </Button>
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
