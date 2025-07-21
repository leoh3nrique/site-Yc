import styled from "styled-components";
import { StyledAnchor, StyledButton } from "../Apresentation/styled";

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 5%;
  text-align: center;
  h1,
  h2 {
    color: #1bb7d1;
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
    margin-bottom: 1.5rem;
  }
  .main-description {
    max-width: 800px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1rem;
  }
`;

export const ButtonAbout = styled(StyledAnchor)`
  background-color: #1bb7d1;
  max-width: 150px;
  font-size: 1.1rem;

  &:hover {
    background: #1bb7d1;
    border: 0.7px solid white;
  }
`;
