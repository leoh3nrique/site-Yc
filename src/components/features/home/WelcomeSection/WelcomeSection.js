import {
  Apresentation,
  ContainerApresentation,
  SectionButtons,
  SectionPlayVideo,
  StyledTitleApresentation,
} from "./styled";
import VideoPlayer from "../../../ui/VideoPlayer/VideoPlayer";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router";
import { goToPage } from "../../../../App";

function WelcomeSection() {
  const background = "./images/utils/teste.jpg";
  const navigate = useNavigate();

  return (
    <ContainerApresentation $bgImage={background}>
      <Apresentation>
        <h1> Bem vindo a YesCooking</h1>
        <StyledTitleApresentation>
          A nossa missão é fazer a missão!
        </StyledTitleApresentation>
        <SectionButtons>
          <Button
            onClick={() => goToPage(navigate, "servicos")}
            as="a"
            variant="primary"
          >
            Conheça
          </Button>
          {/* <SectionPlayVideo>
            <VideoPlayer videoId="dQw4w9WgXcQ" />
            <span>Assistir Vídeo</span>
          </SectionPlayVideo> */}
        </SectionButtons>
      </Apresentation>
    </ContainerApresentation>
  );
}

export default WelcomeSection;
