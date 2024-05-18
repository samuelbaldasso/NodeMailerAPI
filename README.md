# Backend de Email - NodeJS

Este projeto é uma aplicação construída usando Node.js e Express, que integra o serviço de envio de e-mails via lib NodeMailer para facilitar o envio de e-mails programáticos a partir de outras aplicações. O projeto segue as melhores práticas de desenvolvimento para garantir a funcionalidade e robustez da mesma.

## Recursos

- **Integração com NodeMailer**: Utilize a poderosa biblioteca NodeJS para enviar e-mails de forma confiável.
- **Fácil de Integrar**: Aplicação projetada para ser simples de integrar com qualquer front-end ou sistema que necessite de serviços de e-mail.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para o backend.
- **Express**: Framework web para construção de APIs.
- **dotenv**: Módulo para gerenciamento de variáveis de ambiente.

## Configuração do Projeto

### Pré-requisitos

Antes de iniciar, certifique-se de que tem instalado:
- [Node.js](https://nodejs.org/en/) (versão 12.x ou superior)

### Instalação

Para começar, clone o repositório e instale as dependências.

```bash
git clone https://github.com/samuelbaldasso/NodeMailer_Email_API-JavaScript-NodeJS-Express-CORS-Security.git
cd NodeMailer_Email_API-JavaScript-NodeJS-Express-CORS-Security
npm install
```

## Configuração de Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione a seguinte variável necessária para a configuração do NodeMailer:

`SMTP_USER=seu_usuario_do_gmail_aqui`

`SMTP_PASS=sua_senha_do_gmail_aqui`

`EMAIL_RECIPIENT=email_destinatario`

## Execução

Para iniciar a API localmente, execute:

```bash
nodemon server.js
```

A API estará disponível em http://localhost:3000.

---

Desenvolvido com ❤️ por Samuel Baldasso
