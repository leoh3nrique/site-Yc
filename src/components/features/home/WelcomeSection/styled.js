import styled from "styled-components";

export const ContainerApresentation = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;

  @media (max-width: 768px) {
    height: auto;
    height: 55vh;
  }
`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 130px;
  text-align: center;

  h1 {
    font-family: "Staatliches", sans-serif;
    font-size: 65px;
    color: #fb4121;
    text-shadow: -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black,
      1px 1px 0px black;
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
    h1 {
      font-size: 30px;
    }
    a {
      font-size: 20px;
    }
  }
`;

export const StyledTitleApresentation = styled.a`
  font-size: 45px;
  color: white;
  font-family: "Lucida Handwriting", "Brush Script MT", cursive;
  text-shadow: -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black,
    1px 1px 0px black;
`;

export const SectionButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 13px;

  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
    justify-content: center;
  }
`;

export const StyledAnchor = styled.a`
  border: none;
  background: none;
  display: inline-block;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  outline: none;
  color: white;
  background-color: #1c779f;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    background: transparent;
    border: 1px solid white;
  }
`;

export const SectionPlayVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    color: white;
    font-weight: 500;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 55px;
    height: 55px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex-shrink: 0;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  img {
    width: 40%;
    height: auto;
  }
`;
