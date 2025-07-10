import {
  WelcomeContainer,
  ContentWrapper,
  LeftColumn,
  RightColumn,
  Badge,
  MainTitle,
  Subtitle,
  Description,
  CtaButton,
  InfoCard,
  CardImage,
  CardBody,
  Rating,
  CardTitle,
  CardText,
} from "./styled";
import { FaStar, FaRegLightbulb } from "react-icons/fa"; // Usando react-icons

function WelcomeSection() {
  const background = "./images/teste.png"; // Imagem de fundo de batatas fritas
  const cardImageUrl = "./images/quemsomos/qs1.jpg"; // Imagem para o card da direita

  return (
    <WelcomeContainer>
      <ContentWrapper>
        {/* Coluna da Esquerda com os Textos */}
        <LeftColumn>
          <MainTitle>
            Bem-vindo à <span>Yes Cooking</span>
          </MainTitle>
          <Subtitle>
            Nutrimos seus funcionários, potencializamos sua empresa!
          </Subtitle>
          <Description>
            Transforme a alimentação corporativa em um diferencial competitivo.
            Funcionários bem alimentados são mais produtivos, felizes e leais à
            sua empresa.
          </Description>
          <CtaButton>Solicitar Orçamento Gratuito &rarr;</CtaButton>
        </LeftColumn>

        {/* Coluna da Direita com o Card de Informações */}
        <RightColumn>
          <InfoCard>
            <CardImage src={cardImageUrl} alt="Equipe preparando alimentos" />
            <CardBody>
              <CardTitle>
                Qualidade Comprovada por Centenas de Empresas
              </CardTitle>
              <CardText>
                Desde 2008 oferecendo soluções completas em alimentação
                corporativa com foco total na satisfação do cliente.
              </CardText>
            </CardBody>
          </InfoCard>
        </RightColumn>
      </ContentWrapper>
    </WelcomeContainer>
  );
}

export default WelcomeSection;
