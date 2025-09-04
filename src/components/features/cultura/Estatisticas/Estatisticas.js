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
import {
  FaBalanceScale,
  FaBalanceScaleRight,
  FaBuilding,
  FaTruck,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { FiTruck } from "react-icons/fi";
import { GiGrain } from "react-icons/gi";

const statsData = [
  {
    icon: <FaUsers size={47} color="#A73129" />,
    number: "150",
    title: "Colaboradores",
    description: "Equipe dedicada em servir.",
  },
  {
    icon: <FaBuilding size={42} color="#A73129" />,
    number: "5",
    title: "Unidades",
    description: "Atendidas num raio de 800km atendidas simultaneamente.",
  },
  {
    icon: <GiGrain size={45} color="#A73129" />,

    number: "300",
    title: "Toneladas",
    description: "Insumos in-natura consumidos por mês.",
  },

  {
    icon: <FaUtensils size={44} color="#A73129" />,
    number: "2 Mi",
    title: "Refeições Servidas Anualmente",
    description: "Em nossos contratos.",
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
