import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #1bb7d1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 145px;
  }
`;

export const ContainerSection = styled.div`
  width: 400px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkNav = styled.button`
  font-size: 20px;
  border: none;
  background: none;
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  appearance: none;
  outline: none;
  color: white;
  position: relative;
  width: 170px;

  /* &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  } */
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 180px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 5px 0;

  & ${LinkNav} {
    color: black;
    padding: 10px;
    text-align: left;
    width: 100%;
    font-size: 18px;
  }

  & ${LinkNav}:hover {
    background: #ddd;
    color: #1bb7d1;
  }
`;
