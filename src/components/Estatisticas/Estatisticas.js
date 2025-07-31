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
import { MdOutlineFoodBank, MdOutlineMapsHomeWork } from "react-icons/md";

const statsData = [
  {
    icon: <IoPeopleSharp size={190} color="#FAF9F6" />,
    number: "150+",
    title: "Colaboradores",
    color: "#1c779f",
  },
  {
    icon: <MdOutlineFoodBank size={190} color="#FAF9F6" />,
    number: "9.000KG",
    title: "de insumos por dia",
    color: "#A73129",
  },
  {
    icon: <MdOutlineMapsHomeWork size={190} color="#FAF9F6" />,
    number: "6",
    title: "Unidades atendidas",
    description: "Índice de aprovação de nossos clientes.",
    color: "#F1B75C",
  },
  {
    icon: <MdOutlineFoodBank size={190} color="#FAF9F6" />,
    number: "150.000",
    title: "Refeições por mês",
    color: "#1c779f",
  },
];

function Estatisticas() {
  return (
    <StatsContainer>
      <h1>Nossos Números</h1>
      <StatsGrid>
        {statsData.map((stat, index) => (
          <StatCard key={index}>
            <IconWrapper color={stat.color}>{stat.icon}</IconWrapper>
            <StatNumber color={stat.color}>{stat.number}</StatNumber>
            <StatTitle color={stat.color}>{stat.title}</StatTitle>
          </StatCard>
        ))}
      </StatsGrid>
    </StatsContainer>
  );
}

export default Estatisticas;
