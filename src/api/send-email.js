// api/send-email.js

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// Inicializa o MailerSend com a sua chave de API secreta
// Esta chave virá das variáveis de ambiente do seu servidor de hospedagem
const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

// Define quem está enviando o e-mail (deve ser um domínio verificado no MailerSend)
const sentFrom = new Sender(
  "comercial.yescooking@gmail.com",
  "Contato Site YesCooking"
);

export default async function handler(req, res) {
  // Permite apenas requisições do tipo POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Extrai os dados do corpo da requisição
  const { nome, email, telefone, setor, mensagem } = req.body;

  // Validação simples dos dados
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes." });
  }

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
}
