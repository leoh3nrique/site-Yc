import styled from "styled-components";

export const ContainerServicos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  h1 {
    color: #1bb7d1;
    font-size: 50px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
    margin-bottom: 20px;
  }
`;

export const SectionOqueFazemos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: auto;
  margin: 20px 40px;
`;

export const CardOqueFazemos = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.39);
  padding: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 287px;
    height: 250px;
    border-radius: 8px;
  }

  h3 {
    color: #1bb7d1;
    font-size: 25px;
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
  }
`;
