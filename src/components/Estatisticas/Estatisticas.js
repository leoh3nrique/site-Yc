import { MdMapsHomeWork, MdOutlineFoodBank, MdOutlineMapsHomeWork } from "react-icons/md";
import {
  StatsContainer,
  StatsGrid,
  StatCard,
  IconWrapper,
  StatNumber,
  StatTitle,
  StatDescription,
  IconBuilding,
  IconCalendar,
  IconChart,
  IconMedal,
} from "./styled";

const statsData = [
  {
    icon: <IconBuilding />,
    number: "150+",
    title: "Colaboradores",
    description: "Equipe dedicada e apaixonada por servir.",
  },
  {
    icon: <MdOutlineFoodBank size={50} color="#fb4121" />,
    number: "9",
    title: "Toneladas",
    description: "Mais de 9 toneladas consumidas por dia.",
  },
  {
    icon: <MdOutlineMapsHomeWork size={50} color="#fb4121" />,
    number: "6",
    title: "Unidades",
    description: "Índice de aprovação de nossos clientes.",
  },
  {
    icon: <IconMedal />,
    number: "150K+",
    title: "Refeições Servidas",
    description: "Mensalmente em todos os nossos contratos.",
  },
];

function Estatisticas() {
  return (
    <StatsContainer>
      <h1>Nossos Números</h1>
      <StatsGrid>
        {statsData.map((stat, index) => (
          <StatCard key={index}>
            <IconWrapper>{stat.icon}</IconWrapper>
            <StatNumber>{stat.number}</StatNumber>
            <StatTitle>{stat.title}</StatTitle>
            <StatDescription>{stat.description}</StatDescription>
          </StatCard>
        ))}
      </StatsGrid>
    </StatsContainer>
  );
}

export default Estatisticas;
