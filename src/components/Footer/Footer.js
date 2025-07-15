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
          <p>Alimentamos com propósito. Servimos com excelência.</p>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Serviços</FooterTitle>
          <FooterLink href="/servicos">Serviços Alimentares</FooterLink>
          <FooterLink href="/servicos">Marmitas</FooterLink>
          <FooterLink href="/servicos">Lanches e Coofebreaks</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Empresa</FooterTitle>
          <FooterLink href="/cultura">Cultura</FooterLink>
          <FooterLink href="/servicos">Serviços</FooterLink>
          <FooterLink href="/trabalhe-conosco">Trabalhe Conosco</FooterLink>
          <FooterLink href="/contato">Contato</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contato</FooterTitle>
          <ContactInfo>
            <Icon>📞</Icon>
            <span>(16) 3376-9997 </span>
          </ContactInfo>
          <ContactInfo>
            <Icon>📧</Icon>
            <span>comercial.yescooking@gmail.com</span>
          </ContactInfo>
          <ContactInfo>
            <Icon>📍</Icon>
            <span>São Carlos, SP - Brasil</span>
          </ContactInfo>
        </FooterColumn>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Yes Cooking. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
}
