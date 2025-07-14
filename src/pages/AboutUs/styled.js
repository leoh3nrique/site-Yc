import styled from "styled-components";

export const ContainerAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* Padding responsivo para se adaptar a todas as telas */
  padding: 3rem 5%;
  text-align: center;

  /* Estilos aplicados a todos os títulos h1 e h2 dentro deste container */
  h1,
  h2 {
    color: #1bb7d1;
    font-size: clamp(2rem, 5vw, 3rem); /* Fonte fluida */
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
    margin-bottom: 1.5rem;
  }

  /* Estilo para o parágrafo principal */
  .main-description {
    max-width: 800px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1rem;

    /* Ajuste para telas menores */
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// --- ESTILOS PARA OS CARDS DE CULTURA ---

export const SectionCultura = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 1rem;
`;

export const CardCultura = styled.div`
  background-color: #fff;
  min-height: 250px;
  border-radius: 15px;
  border-top: 5px solid #1bb7d1;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }

  .card-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    img {
      width: 40px;
    }

    h3 {
      font-size: 1.8rem;
      color: #333;
    }
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #666;
  }
`;

export const ValoresList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #666;

  li {
    &::before {
      content: "✓";
      margin-right: 10px;
      color: #fb4121;
      font-weight: bold;
    }
  }
`;

export const SectionOqueFazemos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: auto;
  margin: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }
`;

export const CardOqueFazemos = styled.div`
  width: 300px;
  /* ... */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionInformacoes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  /* ... */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// ... o resto dos estilos

export const CardInformacoes = styled.div`
  width: 350px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.39); /* Sombra suave */
  padding: 20px;
  transition: transform 0.3s ease;

  img {
    width: 80px;
  }
  span {
    color: #fb4121;
    font-size: 24px;
    /* font-family: "Lucida Handwriting", "Brush Script MT", normal; */
  }
`;

export const SectionFoodImages = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1rem;
  background-color: #fb4121;

  img {
    width: 85%;
    height: 85%;
    border-radius: 15px;
  }
  .comida1 {
    grid-row: span;
  }
  .comida3 {
    grid-column: span 1;
  }
`;

export const SectionLegacy = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
  justify-items: center;
`;

export const CardLegacy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  padding: 1.5rem;
  gap: 1rem;
  text-align: center;

  h1 {
    color: #fb4121;
    font-size: 1.8rem;
  }

  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ButtonLegacy = styled.button`
  font-size: 1rem;
  border: none;
  background-color: #fb4121;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e03010;
  }
`;
