# Porsche Store

Este é um projeto pessoal desenvolvido com o objetivo de estudo e aprimoramento de habilidades em desenvolvimento web Fullstack. A aplicação simula uma loja da Porsche, permitindo que os usuários explorem e adquiram carros. O sistema também oferece funcionalidades de administração para a gestão dos pedidos.

## Funcionalidades

- **Compra de Veículos:** Os usuários podem navegar pela loja e realizar a compra de veículos.
- **Gerenciamento de Pedidos (Admin):** Na área administrativa, é possível visualizar, editar e excluir pedidos existentes, garantindo um controle completo sobre as transações realizadas.

## Tecnologias Utilizadas

### Backend
- **C#**: Utilizado para a implementação da lógica de negócios no servidor.
- **ASP.NET Core**: Framework utilizado para o desenvolvimento da API REST que lida com as requisições e a lógica de autenticação, autorização e persistência de dados.
- **MySQL**: Banco de dados relacional usado para armazenar as informações dos produtos, pedidos e usuários.

### Frontend
- **Angular**: Framework utilizado para a construção da interface web interativa e dinâmica.
- **SCSS**: Pré-processador CSS utilizado para a estilização das páginas, permitindo maior modularidade e reaproveitamento de código.

## Estrutura do Projeto

- **Frontend**: Localizado na pasta `frontend/`, onde estão os componentes Angular, serviços e assets.
- **Backend**: Localizado na pasta `backend/`, onde se encontram os controladores, modelos e lógica de negócio em C#.
- **Banco de Dados**: Scripts SQL para a criação do esquema de banco de dados e inserção de dados de exemplo estão na pasta `database/`.

## Como Executar o Projeto

### Pré-requisitos
- **.NET Core SDK** instalado para rodar o backend.
- **Node.js** e **Angular CLI** instalados para rodar o frontend.
- **MySQL** instalado para gerenciar o banco de dados.

### Passos para Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Black-Oper/Porsche-Store.git
   ```

2. **Configuração do Backend**:
   - Navegue até a pasta `backend/`.
   - Configure a string de conexão do MySQL no arquivo `appsettings.json`.
   - Execute os comandos para restaurar os pacotes e rodar a aplicação:
     ```bash
     dotnet restore
     dotnet run
     ```

3. **Configuração do Frontend**:
   - Navegue até a pasta `frontend/`.
   - Instale as dependências do projeto:
     ```bash
     npm install
     ```
   - Execute o servidor de desenvolvimento Angular:
     ```bash
     ng serve
     ```

4. **Banco de Dados**:
   - Importe o script SQL localizado em `database/schema.sql` para criar as tabelas no MySQL.

5. **Acesse a Aplicação**:
   - Frontend: `http://localhost:4200`
   - Backend: `http://localhost:7072`
