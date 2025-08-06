import Carousel from "../Carousel/Carousel";
import { CloseSvg, ContainerSectionInfo, Overlay } from "./styled";

const SectionInfoLegacy = ({
  title = " ",
  images = [],
  description = "",
  setMostrarContainer,
}) => {
  return (
    <Overlay>
      <ContainerSectionInfo>
        <h1>{title}</h1>
        <a>{description}</a>
        <Carousel images={images} />
        <button onClick={() => setMostrarContainer(false)}>
          {" "}
          <CloseSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </CloseSvg>
        </button>
      </ContainerSectionInfo>
    </Overlay>
  );
};

export default SectionInfoLegacy;
