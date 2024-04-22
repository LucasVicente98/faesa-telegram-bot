# Bot do Telegram - Dev. Aplicações Web II

Este é um bot do Telegram desenvolvido como projeto para a disciplina de Desenvolvimento de Aplicações Web II. Ele permite aos usuários registrar seus endereços de e-mail fora do horário comercial e fornece durante o horário comercial o link para a página inicial da faculdade.

## Funcionalidades

- **Registro de E-mail**: Fora do horário comercial (9:00 às 18:00), o bot solicita aos usuários que informem seus endereços de e-mail para que a equipe entre em contato posteriormente.

- **Informações Durante o Horário Comercial**: Durante o horário comercial, o bot envia o link da [página inicial da faculdade](https://faesa.br).

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução do JavaScript.
- **node-telegram-bot-api**: Biblioteca Node.js para interagir com a API do Telegram.
- **Prisma**: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados SQLite.
- **dotenv**: Módulo Node.js para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **SQLite**: Banco de dados utilizado para armazenar os endereços de e-mail registrados.

## Requisitos

- Node.js instalado
- Token de Bot do Telegram configurado em um arquivo `.env` com a variável `TELEGRAM_TOKEN` definida

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasVicente98/faesa-telegram-bot

2. Instale as dependências:
   
   ```bash
   npm install
   ```
   
3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
     ```plaintext
     TELEGRAM_TOKEN=seu_token_aqui
     DATABASE_URL=file:./dev.db
     ```

4. Execute o bot:
   ```bash
   npm start
   ```

## Como Usar

1. Inicie uma conversa com o bot no Telegram.
2. Fora do horário comercial (9:00 às 18:00), o bot solicitará seu endereço de e-mail.
3. Durante o horário comercial, o bot enviará informações úteis aos usuários.

## Autor

- **Nome**: Lucas Leite Vicente
- **Contato**: [LinkedIn](https://www.linkedin.com/in/lucas-leite-vicente-136568207/)

---

**Observação**: Este bot foi desenvolvido como exemplo e pode ser personalizado para atender a diferentes necessidades.