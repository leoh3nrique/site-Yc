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
import { BsPeople } from "react-icons/bs";
import { FaBalanceScale, FaBalanceScaleRight, FaTruck } from "react-icons/fa";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { FiTruck } from "react-icons/fi";

const statsData = [
  {
    icon: <BsPeople size={47} color="#A73129" />,
    number: "150",
    title: "Colaboradores",
    description: "Equipe dedicada em servir.",
  },
  {
    icon: <MdOutlineMapsHomeWork size={50} color="#A73129" />,
    number: "5",
    title: "Unidades",
    description: "atendidas anualmente.",
  },
  {
    icon: <LiaBalanceScaleSolid size={58} color="#A73129" />,

    number: "300",
    title: "Toneladas",
    description: "consumidas por mês.",
  },

  {
    icon: <MdOutlineFoodBank size={52} color="#A73129" />,

    number: "2 Mi",
    title: "Refeições Servidas Anualmente",
    description: "em nossos contratos.",
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
