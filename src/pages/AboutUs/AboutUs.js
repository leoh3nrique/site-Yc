import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Timeline from "../../components/Timeline/Timeline";
import Estatisticas from "../../components/Estatisticas/Estatisticas";

// 1. Importando os novos ícones do react-icons
import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuMountain } from "react-icons/lu";

import {
  ContainerAboutUs,
  SectionCultura,
  CardCultura,
  ValoresList,
  IconWrapper, // 2. Importando o novo wrapper de estilo
} from "./styled";
import Unidades from "../../components/Unidades/Unidades";

// 3. Dados atualizados para usar os novos ícones
const culturaData = [
  {
    title: "Missão",
    description:
      "Garantir refeições seguras, equilibradas e saborosas, contribuindo para a saúde e o bem-estar da comunidade acadêmica.",
    icon: <FaHeart />,
  },
  {
    title: "Visão",
    description:
      "Sermos referência em alimentação universitária, reconhecida por nosso compromisso com a qualidade, inovação e impacto social.",
    icon: <MdOutlineRemoveRedEye />,
  },
  {
    title: "Valores",
    items: [
      "Qualidade em cada etapa",
      "Ética e responsabilidade",
      "Valorização das pessoas",
      "Respeito à diversidade",
      "Sustentabilidade e transparência",
    ],
    icon: <LuMountain />,
  },
];

function AboutUs() {
  return (
    <>
      <Header />
      <ContainerAboutUs>
        <h2>Nossa Cultura</h2>
        <SectionCultura>
          {culturaData.map((item) => (
            <CardCultura key={item.title}>
              <div className="card-title">
                {/* 4. O ícone agora é envolvido pelo IconWrapper para estilização */}
                <IconWrapper>{item.icon}</IconWrapper>
                <h3>{item.title}</h3>
              </div>
              {item.description && <p>{item.description}</p>}
              {item.items && (
                <ValoresList>
                  {item.items.map((valor) => (
                    <li key={valor}>{valor}</li>
                  ))}
                </ValoresList>
              )}
            </CardCultura>
          ))}
        </SectionCultura>
      </ContainerAboutUs>

      <Estatisticas />
      <Timeline />
      <Unidades />
      <Footer />
    </>
  );
}

export default AboutUs;
