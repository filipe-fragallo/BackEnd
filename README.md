# Backend

## Stack Utilizada
A stack utilizada no projeto backend é composta pelos seguintes elementos:

- Linguagem: Node.js (versão 14.17.0)
- Framework: Express.js (versão 4.18.2)
- Banco de Dados: MongoDB
- Pacotes adicionados: 
  - bcryptjs (versão 2.4.3): Utilizado para a criptografia de senhas.
  - cors (versão 2.8.5): Middleware para habilitar o Cross-Origin Resource Sharing (CORS) no Express.js, permitindo solicitações de diferentes origens.
  - crypto (versão 1.0.1): Fornece funcionalidades criptográficas.
  - dotenv (versão 16.3.1): Carrega variáveis de ambiente a partir de um arquivo `.env`.
  - express (versão 4.18.2): Framework web para Node.js, utilizado para criação de rotas e manipulação de requisições HTTP.
  - jsonwebtoken (versão 9.0.0): Biblioteca para geração e verificação de JSON Web Tokens (JWT), utilizada para autenticação e autorização.
  - mongoose (versão 7.3.1): Ferramenta de modelagem de objetos do MongoDB para Node.js, facilitando a interação com o banco de dados.
  - nodemailer (versão 6.9.3): Biblioteca para envio de emails.
  - nodemon (versão 2.0.22): Utilitário para reiniciar automaticamente o servidor ao detectar alterações de arquivos durante o desenvolvimento.

Escolhemos utilizar o Node.js devido à sua eficiência e escalabilidade para aplicações em tempo real. O Express.js foi escolhido como framework web por sua simplicidade e robustez, facilitando o desenvolvimento de APIs RESTful. O MongoDB foi escolhido como banco de dados por sua flexibilidade e escalabilidade, adequando-se bem a aplicativos que requerem um modelo de dados dinâmico.

## Instruções para Executar o Sistema e Realizar Testes

Siga as etapas abaixo para executar o sistema e realizar testes:

1. Clone o repositório:
   ```
   git clone <repository_url>
   ```

2. Acesse o diretório do projeto:
   ```
   cd server
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Crie um arquivo `.env` na raiz do diretório e forneça as variáveis de ambiente necessárias. Consulte o arquivo `.env.example` para obter as variáveis necessárias.

5. Inicie o servidor:
   ```
   npm start
   ```

6. O servidor estará em execução em `http://localhost:5000` por padrão. Você pode fazer requisições HTTP para os endpoints disponíveis usando ferramentas como Postman ou integrando o frontend com o backend.

7. Para executar os testes (caso disponíveis):
   ```
   npm test
   ```

Certifique-se de ter o MongoDB instalado e em execução no seu sistema para garantir a correta interação com o banco de dados.

## Licença
Este projeto está licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## Autor
Este backend foi desenvolvido por Filipe Fragallo.
