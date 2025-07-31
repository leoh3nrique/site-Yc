import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
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
    icon: <IoPeopleSharp size={230} color="#FAF9F6" />,
    number: "150+",
    title: "Colaboradores",
  },
  {
    icon: <IconCalendar />,
    number: "5+",
    title: "Anos de Experiência",
    description: "Mais de uma década de excelência e sabor.",
  },
  {
    icon: <IconBuilding />,
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
