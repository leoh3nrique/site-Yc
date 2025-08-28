// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

// 1. Configuração do Servidor
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const mailerSend = new MailerSend({
  apiKey:
    "mlsn.9103a07d5b047f3dcbe9799290bc82bd3b389d0c3c375449499a2fa3c5203d24",
});
''
app.post("/api/send-email", async (req, res) => {
  console.log("Recebida requisição para /api/send-email");

  const { nome, email, telefone, setor, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes." });
  }

  const sentFrom = new Sender(
    "test@test-2p0347zkx07lzdrn.mlsender.net",
    "Contato Site YesCooking"
  );
  const recipients = [
    new Recipient("comercial.yescooking@gmail.com", "Nome Destinatário"),
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(new Sender(email, nome))
    .setSubject(`Nova mensagem de ${nome} - Setor: ${setor}`).setHtml(`
      <h3>Nova mensagem recebida pelo site:</h3>
      <ul>
        <li><strong>Nome:</strong> ${nome}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Telefone:</strong> ${telefone || "Não informado"}</li>
        <li><strong>Setor:</strong> ${setor}</li>
      </ul>
      <hr>
      <p><strong>Mensagem:</strong></p>
      <p>${mensagem}</p>
    `);

  try {
    await mailerSend.email.send(emailParams);
    return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao enviar a mensagem." });
  }
});

// 5. Inicia o Servidor
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
