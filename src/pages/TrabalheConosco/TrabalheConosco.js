import React, { useState, useCallback } from "react";
import { useForm, ValidationError } from "@formspree/react";
import PageLayout from "../../components/layout/PageLayout";
import TabNav from "../../components/ui/TabNav/TabNav";
import Button from "../../components/ui/Button";

import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

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
  ContainerDescription,
} from "./styled";
import { CheckboxWrapper, ContactPageContainer, StyledCheckbox } from "../Contato/styled";

const TrabalheConosco = () => {
  const [state, handleSubmit] = useForm(
    `${process.env.REACT_APP_FORMSPREE_ID_WORK}`
  );
  const [curriculoUrl, setCurriculoUrl] = useState("");

  const uploaderRef = useCallback((divElement) => {
    if (divElement !== null) {
      const uploader = divElement.querySelector("lr-file-uploader-regular");

      const handleUploadChange = (e) => {
        const fileUrl = e.detail?.files[0]?.cdnUrl;
        if (fileUrl) {
          setCurriculoUrl(fileUrl);
          console.log(
            "SUCESSO: URL do currículo capturada via Callback Ref:",
            fileUrl
          );
        }
      };

      if (uploader) {
        uploader.addEventListener("change", handleUploadChange);
      }

      return () => {
        if (uploader) {
          uploader.removeEventListener("change", handleUploadChange);
        }
      };
    }
  }, []);

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
      <TabNav activeTab="work" />
      <PageContainer>
        <FormContainer>
          <FormTitle>Trabalhe Conosco</FormTitle>
          <ContainerDescription>
            <p className="main-description">
              Buscamos pessoas comprometidas, éticas e empenhadas por servir com
              excelência. Se você se identifica com nossa missão, envie sua
              candidatura!
            </p>
          </ContainerDescription>

          <Form onSubmit={handleSubmit} method="POST">
            <TwoColumns>
              <FormGroup>
                <Input
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="Nome completo"
                  required
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
                <Select id="area" name="area" required defaultValue="">
                  <option value="" disabled>
                    Selecione a área
                  </option>
                  <option value="nutricao">Nutrição</option>
                  <option value="administrativo">Administrativo</option>
                  <option value="logistica">Logística</option>
                  <option value="operacional">Operacional</option>
                </Select>
              </FormGroup>
            </TwoColumns>

            <FormGroup>
              <label style={{ marginBottom: "8px", display: "block" }}>
                Anexar Currículo*
              </label>
              <div ref={uploaderRef}>
                <FileUploaderRegular
                  pubkey="9b78056c14e13887cc45"
                  maxFiles={1}
                  sourceList="local"
                  validationValidators={["accepts=.pdf,.doc,.docx"]}
                />
              </div>

              <input type="hidden" name="curriculo_url" value={curriculoUrl} />
              <ValidationError
                prefix="Currículo"
                field="curriculo_url"
                errors={state.errors}
              />
            </FormGroup>

            <FormGroup>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Mensagem (opcional)"
                rows="6"
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

            <Button type="submit" $variant="dark" disabled={state.submitting}>
              {state.submitting ? "Enviando..." : "Enviar candidatura"}
            </Button>
          </Form>
        </FormContainer>
      </PageContainer>
    </PageLayout>
  );
};

export default TrabalheConosco;
