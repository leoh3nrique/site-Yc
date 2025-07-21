import styled from "styled-components";

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  position: relative;
  color: ${({ isActive }) => (isActive ? "#fb4121" : "#666")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  transition: color 0.3s;

  /* Borda inferior que indica a aba ativa */
  &::after {
    content: "";
    position: absolute;
    bottom: -1px; /* Alinha com a borda do container */
    left: 0;
    right: 0;
    height: 3px;
    background-color: #fb4121;
    transform: ${({ isActive }) => (isActive ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: #fb4121;
  }

  @media (max-width: 720px) {
    font-size: 1rem;
  }
`;
