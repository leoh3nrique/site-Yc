import styled from "styled-components";

export const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 3px auto;
  padding: 3rem 5%;
  background-color: #fff;
  min-height: 80vh;
`;

export const Title = styled.h1`
  color: #1c779f;
  font-family: "Staatliches", sans-serif;
  font-size: 2.8em;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f1b75c;
  padding-bottom: 0.5rem;
`;

export const SectionTitle = styled.h2`
  color: #a73129;
  font-family: "Staatliches", sans-serif;
  font-size: 1.8em;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1rem;

  strong {
    color: #333;
  }
`;

export const StyledList = styled.ul`
  list-style-position: inside;
  padding-left: 1rem;
  margin-bottom: 1rem;

  li {
    font-size: 1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

export const StyledLink = styled.a`
  color: #1c779f;
  text-decoration: underline;
  font-weight: bold;

  &:hover {
    color: #155a7a;
  }
`;
