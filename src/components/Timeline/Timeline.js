import React from "react";
import styled from "styled-components";

const events = [
  {
    title: "Fundação da Empresa",
    date: "2000",
    description: "A empresa foi fundada em 2000.",
  },
  {
    title: "Primeiro Produto",
    date: "2005",
    description: "Lançamento do primeiro produto no mercado.",
  },
  {
    title: "Expansão Internacional",
    date: "2012",
    description: "A empresa expandiu para outros países.",
  },
  {
    title: "Novo Escritório",
    date: "2018",
    description: "Inauguração de um novo escritório regional.",
  },
  {
    title: "Novo Escritório",
    date: "2020",
    description: "Inauguração de um novo escritório regional.",
  },
  {
    title: "Novo Escritório",
    date: "2024",
    description: "Inauguração de um novo escritório regional.",
  },
];

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    background-color: #ddd;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ left }) => (left ? "flex-start" : "flex-end")};
  width: 100%;
  position: relative;
  padding: 10px 0;
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  width: 45%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #fb4121;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem key={index} left={index % 2 === 0}>
          <Circle />
          <ContentBox>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </ContentBox>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
