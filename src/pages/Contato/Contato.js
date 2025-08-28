import React from "react";
import { useForm, ValidationError } from "@formspree/react"; // 1. Importe do Formspree
import PageLayout from "../../components/layout/PageLayout";
import TabNav from "../../components/ui/TabNav/TabNav";
import Button from "../../components/ui/Button";

// Importações dos seus styled-components
import {
  ContactPageContainer,
  FormContainer,
  Form,
  FormGroup,
  Input,
  Select,
  Textarea,
  CheckboxWrapper,
  StyledCheckbox,
  FormTitle,
  TwoColumns,
  Notification,
} from "./styled";
import { ContainerDescription } from "../TrabalheConosco/styled";

const Contact = () => {
  // 2. Configure o hook do Formspree com um NOVO ID para este formulário
  //    Lembre-se de criar um formulário separado no Formspree para "Contato"
  const [state, handleSubmit] = useForm("mdklkkqq"); // <-- SUBSTITUA PELO SEU ID

  // 3. Se o formulário foi enviado com sucesso, mostramos uma mensagem de agradecimento.
  if (state.succeeded) {
    return (
      <PageLayout>
        <TabNav activeTab="contact" />
        <ContactPageContainer>
          <FormContainer>
            <FormTitle>Obrigado!</FormTitle>
            <ContainerDescription>
              <p className="main-description">
                Sua mensagem foi recebida com sucesso. Entraremos em contato em
                breve!
              </p>
            </ContainerDescription>
          </FormContainer>
        </ContactPageContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <TabNav activeTab="contact" />
      <ContactPageContainer>
        <FormContainer>
          <FormTitle>Entre em Contato</FormTitle>
          <ContainerDescription>
            <p className="main-description">
              Tem um produto ou serviço que pode contribuir com a nossa missão?
              A YesCooking está sempre aberta a parcerias com fornecedores
              comprometidos com qualidade, responsabilidade e ética.
            </p>
          </ContainerDescription>

          {/* 4. O onSubmit agora é o 'handleSubmit' do Formspree */}
          <Form onSubmit={handleSubmit}>
            <TwoColumns>
              <FormGroup>
                <Input
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  required
                />
                <ValidationError
                  prefix="Nome"
                  field="nome"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="telefone"
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  required
                />
              </FormGroup>
            </TwoColumns>
            <TwoColumns>
              <FormGroup>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Select id="setor" name="setor" required>
                  <option value="" disabled>
                    Selecione um setor
                  </option>
                  <option value="comercial">Comercial</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="rh">Recursos Humanos</option>
                  <option value="outro">Outro</option>
                </Select>
              </FormGroup>
            </TwoColumns>
            <FormGroup>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite a sua mensagem"
                rows="8"
                required
              ></Textarea>
              <ValidationError
                prefix="Mensagem"
                field="mensagem"
                errors={state.errors}
              />
            </FormGroup>
            <CheckboxWrapper>
              <StyledCheckbox
                type="checkbox"
                name="aceite"
                id="aceite"
                required
              />
              <label htmlFor="aceite">
                Declaro que li e estou de acordo com o{" "}
                <a
                  href="/aviso-de-privacidade"
                  target="_blank"
                  rel="noreferrer"
                >
                  aviso de privacidade
                </a>
              </label>
            </CheckboxWrapper>

            {/* O botão é desabilitado automaticamente durante o envio */}
            <Button type="submit" $variant="dark" disabled={state.submitting}>
              {state.submitting ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </Form>
        </FormContainer>
      </ContactPageContainer>
    </PageLayout>
  );
};

export default Contact;
