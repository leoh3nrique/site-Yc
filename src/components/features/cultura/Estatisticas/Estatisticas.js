import {
  MdMapsHomeWork,
  MdOutlineFoodBank,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
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
    number: "150",
    title: "Colaboradores",
    description: "Equipe dedicada e apaixonada por servir.",
  },
  {
    icon: <MdOutlineFoodBank size={50} color="#A73129" />,
    number: "300",
    title: "Toneladas",
    description: "Mais de 300 toneladas consumidas por mês.",
  },
  {
    icon: <MdOutlineMapsHomeWork size={50} color="#A73129" />,
    number: "5",
    title: "Unidades",
    description: "Índice de aprovação de nossos clientes.",
  },
  {
    icon: <IconMedal />,
    number: "170.000",
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
