import Estatisticas from "../../components/features/cultura/Estatisticas/Estatisticas";

import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuMountain } from "react-icons/lu";

import {
  ContainerAboutUs,
  SectionCultura,
  CardCultura,
  ValoresList,
  IconWrapper,
  SectionAboutInfo,
  BackgroundVideo,
  MainTitle,
  ContainerVideo,
  ContainerInfoApresentation,
} from "./styled";
import Unidades from "../../components/features/UnidadesMap/Unidades/Unidades";
import PageLayout from "../../components/layout/PageLayout";

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
      <MainTitle>Nossa Cultura</MainTitle>
      <SectionAboutInfo>
        <ContainerInfoApresentation>
          <p>
            Somos uma empresa missionária dedicada à alimentação coletiva,
            unindo qualidade, cuidado e propósito. Servimos com excelência para
            nutrir corpo e alma, oferecendo refeições que levam acolhimento,
            comunhão e esperança. Cada prato é preparado com dedicação,
            refletindo nossos valores e o compromisso de servir com amor.
          </p>
        </ContainerInfoApresentation>
        <ContainerVideo>
          <BackgroundVideo autoPlay loop muted playsInline>
            <source src="/videos/videoYc.mp4" type="video/mp4" />
          </BackgroundVideo>
        </ContainerVideo>
      </SectionAboutInfo>
      <ContainerAboutUs>
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
      <Unidades />
    </PageLayout>
  );
}

export default AboutUs;
