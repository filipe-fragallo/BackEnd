# Backend

## Stack Utilizada

A stack utilizada no projeto do backend é composta pelos seguintes elementos:

- Linguagem: Node.js
- Framework: Express.js
- Banco de Dados: MongoDB
- Pacotes adicionados:
  - bcryptjs: Utilizado para a criptografia de senhas.
  - cors: Middleware para habilitar o Cross-Origin Resource Sharing (CORS) no Express.js, permitindo solicitações de diferentes origens.
  - crypto: Fornece funcionalidades criptográficas.
  - dotenv: Carrega variáveis de ambiente a partir de um arquivo `.env`.
  - express: Framework web para Node.js, utilizado para criação de rotas e manipulação de requisições HTTP.
  - jsonwebtoken: Biblioteca para geração e verificação de JSON Web Tokens (JWT), utilizada para autenticação e autorização.
  - mongoose: Ferramenta de modelagem de objetos do MongoDB para Node.js, facilitando a interação com o banco de dados.
  - nodemailer: Biblioteca para envio de emails.
  - nodemon: Utilitário para reiniciar automaticamente o servidor ao detectar alterações de arquivos durante o desenvolvimento.

Escolhemos utilizar o Node.js devido à sua eficiência e escalabilidade para aplicações em tempo real. O Express.js foi escolhido como framework web por sua simplicidade e robustez, facilitando o desenvolvimento de APIs RESTful. O MongoDB foi escolhido como banco de dados por sua flexibilidade e escalabilidade, adequando-se bem a aplicativos que requerem um modelo de dados dinâmico.

## Instruções para Executar o Sistema e Realizar Testes

Siga as etapas abaixo para executar o sistema e realizar testes:

1. Clone o repositório:

   ```
   git clone <repository_url>
   ```

2. Acesse o diretório do projeto:

   ```
   cd instagramclone
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
#   B a c k E n d  
 