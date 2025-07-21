import styled from "styled-components";

// --- NOVO WRAPPER PARA OS ÍCONES ---
// Este componente envolve os ícones e aplica os estilos de cor e tamanho
export const IconWrapper = styled.div`
  color: #1bb7d1; /* Cor principal dos ícones */
  font-size: 50px; /* Tamanho dos ícones */
`;

export const ContainerAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 5%;
  text-align: center;

  h1,
  h2 {
    color: #1bb7d1;
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
    margin-bottom: 1.5rem;
  }

  .main-description {
    max-width: 800px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1rem;
  }
`;

export const SectionCultura = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 1rem;
`;

export const CardCultura = styled.div`
  background-color: #fff;
  min-height: 250px;
  border-radius: 15px;
  border-top: 5px solid #fb4121;
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
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

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

  li::before {
    content: "✓";
    margin-right: 10px;
    color: #fb4121;
    font-weight: bold;
  }
`;
