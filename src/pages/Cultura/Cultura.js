import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import Timeline from "../../components/features/cultura/Timeline/Timeline";
import Estatisticas from "../../components/features/cultura/Estatisticas/Estatisticas";

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
import Unidades from "../../components/features/UnidadesMap/Unidades/Unidades";
import PageLayout from "../../components/layout/PageLayout";

// 3. Dados atualizados para usar os novos ícones
const culturaData = [
  {
    title: "Missão",
    description:
      "Oferecer refeições equilibradas e saborosas que promovam saúde, acolhimento e bem-estar à comunidade acadêmica, servindo com propósito e compromisso diário",
    icon: <FaHeart />,
  },
  {
    title: "Visão",
    description:
      "Sempre continuar com excelência no serviço, e impacto positivo na sociedade e na vida de cada pessoa servida",
    icon: <MdOutlineRemoveRedEye />,
  },
  {
    title: "Valores",
    items: [
      "Qualidade em cada etapa do processo",
      "Ética, responsabilidade e transparência",
      "Compromisso com a saúde e bem-estar",
      "Respeito à diversidade, à inclusão e ao ambiente acadêmico",
      "Inovação com propósito",
    ],
    icon: <LuMountain />,
  },
];

function AboutUs() {
  return (
    <PageLayout>
      <ContainerAboutUs>
        <h2>Nossa Cultura</h2>
        <SectionCultura>
          {culturaData.map((item) => (
            <CardCultura key={item.title}>
              <div className="card-title">
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
    </PageLayout>
  );
}

export default AboutUs;
