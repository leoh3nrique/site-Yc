import emailjs from "@emailjs/browser";
import PageLayout from "../../components/layout/PageLayout";
import TabNav from "../../components/ui/TabNav/TabNav";
import Button from "../../components/ui/Button";
import { useForm } from "../../hooks/useForm";

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
  const {
    formData,
    isSending,
    setIsSending,
    notification,
    showNotification,
    handleChange,
    resetForm,
  } = useForm({
    nome: "",
    telefone: "",
    email: "",
    setor: "",
    mensagem: "",
    aceite: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceite) {
      showNotification("Você precisa aceitar o aviso de privacidade.", "error");
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: formData.nome,
      phone: formData.telefone,
      email: formData.email,
      sector: formData.setor,
      message: formData.mensagem,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showNotification("Mensagem enviada com sucesso!");
        resetForm(); // Limpa o formulário
      })
      .catch(() => {
        showNotification("Ocorreu um erro ao enviar a mensagem.", "error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <PageLayout>
      <Notification show={notification.show} type={notification.type}>
        {notification.message}
      </Notification>
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
          <Form onSubmit={handleSubmit}>
            <TwoColumns>
              <FormGroup>
                <Input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </TwoColumns>
            <TwoColumns>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Select
                  name="setor"
                  value={formData.setor}
                  onChange={handleChange}
                  required
                >
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
                name="mensagem"
                placeholder="Digite a sua mensagem"
                rows="8"
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></Textarea>
            </FormGroup>
            <CheckboxWrapper>
              <StyledCheckbox
                type="checkbox"
                name="aceite"
                id="aceite"
                checked={formData.aceite}
                onChange={handleChange}
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
            <Button type="submit" variant="dark" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </Form>
        </FormContainer>
      </ContactPageContainer>
    </PageLayout>
  );
};

export default Contact;
