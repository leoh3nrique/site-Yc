import styled from "styled-components";

const IconStyle = `
  width: 32px;
  height: 32px;
`;
export const IconBuilding = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fb4121",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
    <circle cx="8.5" cy="7" r="4" />,
    <polyline points="17 11 19 13 23 9" />,
  ],
})`
  ${IconStyle}
`;

export const IconCalendar = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#1bb7d1",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />,
    <line x1="16" y1="2" x2="16" y2="6" />,
    <line x1="8" y1="2" x2="8" y2="6" />,
    <line x1="3" y1="10" x2="21" y2="10" />,
  ],
})`
  ${IconStyle}
`;

export const IconChart = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2ecc71",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />,
    <polyline points="17 6 23 6 23 12" />,
  ],
})`
  ${IconStyle}
`;

export const IconMedal = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#9b59b6",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    <path d="M12 11v-1" />,
    <path d="M12 15h0" />,
  ],
})`
  ${IconStyle}
`;

export const StatsContainer = styled.div`
  background-color: #f8f9fa;
  padding: 4rem 5%;
  text-align: center;

  h1 {
    color: #1c779f;
    font-size: clamp(2rem, 5vw, 3rem); /* Fonte fluida */
    font-family: "Lucida Handwriting", "Brush Script MT", normal;
    margin-bottom: 2.5rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 10px;
`;

export const StatNumber = styled.p`
  font-family: "Staatliches", sans-serif;
  font-size: 60px;
  color: ${(props) => props.color};
  font-weight: 600;
  margin: 0;
`;

export const StatTitle = styled.h3`
  font-size: 25px;
  color: ${(props) => props.color};
  font-weight: 500;
  margin: 0;
`;

export const StatDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  line-height: 1.5;
`;
