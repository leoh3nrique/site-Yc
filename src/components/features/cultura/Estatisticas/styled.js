import styled from "styled-components";

export const StatsContainer = styled.div`
  background-color: #f8f9fa;
  padding: 4rem 5%;
  text-align: center;

  h1 {
    color: #1c779f;
    font-family: "Staatliches", sans-serif;
    font-size: 3em;
    margin-bottom: 1.5rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  border-top: 4px solid #a73129;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const IconWrapper = styled.div`
  background-color: #f1f2f6;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const StatNumber = styled.p`
  font-family: "Staatliches", sans-serif;
  font-size: 48px;
  color: #2c3e50;
  font-weight: 600;
  margin: 0;
`;

export const StatTitle = styled.h3`
  font-size: 20px;
  color: #34495e;
  font-weight: 500;
  margin: 0;
`;

export const StatDescription = styled.p`
  font-size: 14px;
  color: #34495e;
  line-height: 1.5;
`;
