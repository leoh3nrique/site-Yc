import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    height: 100%;
  }
`;

export const CarouselSlide = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 85%;
    position: center;
    object-fit: cover;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  color: #333;

  ${CarouselContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? "white" : "rgba(255, 255, 255, 0.5)"};
  transition: background-color 0.3s;
`;
