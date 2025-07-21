import React, { useState, useEffect } from "react"; // Adicione useEffect
import emailjs from "@emailjs/browser";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
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
  Button,
  FormTitle,
  TwoColumns,
  Notification, // Importe o novo componente de notificação
} from "./styled";
import TabNav from "../../components/TabNav/TabNav";
import { ContainerDescription } from "../TrabalheConosco/styled";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    setor: "",
    mensagem: "",
    aceite: false,
  });
  const [isSending, setIsSending] = useState(false);
  // Novo estado para controlar a notificação
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success", // 'success' ou 'error'
  });

  // Efeito para esconder a notificação após 3 segundos
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 3000);
      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceite) {
      showNotification("Você precisa aceitar o aviso de privacidade.", "error");
      return;
    }

    setIsSending(true);

    const templateParams = {
      nome: formData.nome,
      telefone: formData.telefone,
      email: formData.email,
      setor: formData.setor,
      mensagem: formData.mensagem,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        showNotification("Mensagem enviada com sucesso!");
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          setor: "",
          mensagem: "",
          aceite: false,
        });
      })
      .catch((err) => {
        showNotification("Ocorreu um erro ao enviar a mensagem.", "error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <Header />
      {/* <Notification show={notification.show} type={notification.type}>
        {notification.message}
      </Notification> */}
      <TabNav activeTab="contact" />

      <ContactPageContainer>
        <FormContainer>
          <FormTitle>Entre em Contato</FormTitle>
          <ContainerDescription>
            <p className="main-description">
              Tem um produto ou serviço que pode contribuir com a nossa missão?
              A Yes Cooking está sempre aberta a parcerias com fornecedores
              comprometidos com qualidade, responsabilidade e ética.
            </p>
            <p className="main-description">
              Se você deseja fornecer insumos, equipamentos, ou outras soluções,
              entre em contato conosco. Vamos juntos alimentar vidas com
              excelência.
            </p>
            <p className="main-description">Preencha o formulário abaixo:</p>
          </ContainerDescription>
          <Form onSubmit={handleSubmit}>
            {/* ... o resto do seu formulário ... */}
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
                <a href="/aviso-de-privacidade" target="_blank">
                  aviso de privacidade
                </a>
              </label>
            </CheckboxWrapper>
            <Button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </Form>
        </FormContainer>
      </ContactPageContainer>
      <Footer />
    </>
  );
};

export default Contact;
