import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterLink,
  ContactInfo,
  Icon,
  Copyright,
  FooterTitle,
} from "./styled";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>
            <img
              src="./images/logoYc.png"
              alt="Yes Cooking Logo"
              style={{ width: "150px" }}
            />
          </FooterTitle>
          <p>
            Alimentação corporativa de excelência para empresas que
            verdadeiramente valorizam seus colaboradores.
          </p>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Serviços</FooterTitle>
          <FooterLink href="/servicos/gestao">Serviços Alimentares</FooterLink>
          <FooterLink href="/servicos/catering">Marmitas</FooterLink>
          <FooterLink href="/servicos/consultoria">
            Lanches e Coofebreaks
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Empresa</FooterTitle>
          <FooterLink href="/quemsomos">Sobre Nós</FooterLink>
          <FooterLink href="/legado">Legado</FooterLink>
          <FooterLink href="/contato">Unidades</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contato</FooterTitle>
          <ContactInfo>
            <Icon>📞</Icon>
            <span>(11) 99999-9999</span>
          </ContactInfo>
          <ContactInfo>
            <Icon>📧</Icon>
            <span>contato@yescooking.com.br</span>
          </ContactInfo>
          <ContactInfo>
            <Icon>📍</Icon>
            <span>São Paulo, SP - Brasil</span>
          </ContactInfo>
        </FooterColumn>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Yes Cooking. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
}
