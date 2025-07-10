import styled from "styled-components";
import { StyledButton } from "../Apresentation/styled";

export const ContainerAbout = styled.div`
  width: 100%;
  height: 55vh;
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  h1 {
    color: #1bb7d1;
    font-size: 50px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
  a {
    width: 89%;

    font-size: 15px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
`;

export const ButtonAbout = styled.button`
  background-color: #1bb7d1;
  &:hover {
    background: #1bb7d1;
    border: 0.7px solid white;
  }
`;
