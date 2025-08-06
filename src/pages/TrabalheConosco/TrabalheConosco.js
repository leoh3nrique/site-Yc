import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import {
  PageContainer,
  FormContainer,
  Form,
  FormGroup,
  Input,
  Select,
  Textarea,
  Button,
  FormTitle,
  TwoColumns,
  Notification,
  FileInputWrapper,
  FileInput,
  FileInputLabel,
  ContainerDescription,
} from "./styled";
import TabNav from "../../components/TabNav/TabNav";

const TrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    area: "",
    mensagem: "",
    curriculo: null,
  });
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        curriculo: file,
      }));
      setFileName(file.name);
    }
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulação de envio
    setTimeout(() => {
      showNotification("Candidatura enviada com sucesso!");
      setIsSending(false);
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        area: "",
        mensagem: "",
        curriculo: null,
      });
      setFileName("");
    }, 1500);
  };

  return (
    <>
      <Header />
      {/* <Notification show={notification.show} type={notification.type}>
        {notification.message}
      </Notification> */}

      <TabNav activeTab="work" />
      <PageContainer>
        <FormContainer>
          <FormTitle>Trabalhe Conosco</FormTitle>
          <ContainerDescription>
            <p className="main-description">
              Você acredita que é possível transformar vidas através da
              alimentação? Na YesCooking, buscamos pessoas comprometidas,
              éticas e empenhadas por servir com excelência.
            </p>
            <p className="main-description">
              Somos uma equipe que valoriza a dedicação, o trabalho em equipe e
              o propósito de impactar positivamente a comunidade acadêmica.
              Venha fazer parte da nossa missão.
            </p>
            {/* <p className="main-description"></p> */}
            <p className="main-description">Preencha o formulário abaixo:</p>
          </ContainerDescription>
          <Form onSubmit={handleSubmit}>
            <TwoColumns>
              <FormGroup>
                <Input
                  type="text"
                  name="nome"
                  placeholder="Nome completo"
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
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Selecione a área de interesse
                  </option>
                  <option value="nutricao">Nutrição</option>
                  <option value="administrativo">Administrativo</option>
                  <option value="logistica">Logística</option>
                  <option value="operacional">Operacional</option>
                </Select>
              </FormGroup>
            </TwoColumns>
            <FormGroup>
              <FileInputWrapper>
                <FileInput
                  id="curriculo"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <FileInputLabel htmlFor="curriculo">
                  {fileName || "Anexar currículo (PDF, DOC)"}
                </FileInputLabel>
              </FileInputWrapper>
            </FormGroup>
            <FormGroup>
              <Textarea
                name="mensagem"
                placeholder="Mensagem de apresentação (opcional)"
                rows="6"
                value={formData.mensagem}
                onChange={handleChange}
              ></Textarea>
            </FormGroup>
            <Button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar candidatura"}
            </Button>
          </Form>
        </FormContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default TrabalheConosco;
