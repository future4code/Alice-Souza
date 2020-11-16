import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// Email para onde enviaremos a mensagem
export const config: SMTPTransport.Options = {
  host: "smtp.mailtrap.io", // Endereço do servidor SMTP
  port: 2525,  // Porta do servidor
  auth: {  // Dados de acesso ao server do email
    user: "0082859f0e4e3f",
    pass: "fc367fe26942c6"
  }
}
// Tem ainda o secure e tls, mas são opcionais (ver na apostila, se precisar)

// Função para transportar (configuração)
const transporter = nodemailer.createTransport(config);

// Conteúdo do email e seu envio
export async function writeEmail( // Todos esses itens serão os argumentos recebidos onde formos usar a função "writeEmail"
  from: string,  //
  to: string,
  subject: string,
  text: string,
  html: string
) {
  const mailContent: Mail.Options = { 
    from,  // Remetente
    to,  // Destinatário
    subject,  // Assunto
    text,  // Textinho que fica ao lado do assunto (antes de abrir a mensagem, tipo descrição)
    html // Texto do email
  }
  transporter.sendMail(mailContent, (error: Error | null, info: any) => {
    if (error) {
      throw new Error("Erro! " + error.message)
    } else {
      console.log("Sucesso!")
    }
  })
}




