import React, { useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import TabNav from "../../components/ui/TabNav/TabNav";
import Button from "../../components/ui/Button"; // <-- 1. Importa o novo botão
import { useForm } from "../../hooks/useForm"; // <-- 2. Importa o hook de formulário

import {
  PageContainer,
  FormContainer,
  Form,
  FormGroup,
  Input,
  Select,
  Textarea,
  FormTitle,
  TwoColumns,
  Notification,
  FileInputWrapper,
  FileInput,
  FileInputLabel,
  ContainerDescription,
} from "./styled";

const TrabalheConosco = () => {
  const [fileName, setFileName] = useState("");

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
    area: "",
    curriculo: null,
    mensagem: "",
  });

  const handleFileChange = (e) => {
    handleChange(e); // Chama o handler do hook
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      showNotification("Candidatura enviada com sucesso!");
      setIsSending(false);
      resetForm();
      setFileName("");
    }, 1500);
  };

  return (
    <PageLayout>
      <Notification show={notification.show} type={notification.type}>
        {notification.message}
      </Notification>
      <TabNav activeTab="work" />
      <PageContainer>
        <FormContainer>
          <FormTitle>Trabalhe Conosco</FormTitle>
          <ContainerDescription>
            <p className="main-description">
              Você acredita que é possível transformar vidas através da
              alimentação? Na YesCooking, buscamos pessoas comprometidas, éticas
              e empenhadas por servir com excelência.
            </p>
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
                  name="curriculo"
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
            {/* 5. Usa o novo componente Button */}
            <Button type="submit" variant="dark" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar candidatura"}
            </Button>
          </Form>
        </FormContainer>
      </PageContainer>
    </PageLayout>
  );
};

export default TrabalheConosco;
