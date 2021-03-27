# Eu no Trânsito API

Serviço Backend criado para o projeto Eu no Trânsito com o objetivo de receber e
entregar informações de ranking.

## Pré-requisitos

- NodeJS 14.15.4
- PostgreSQL 13.2

## Instalação e Configuração

- Realize o clone ou download deste projeto.
- Execute `npm install` na raiz do projeto.
- Crie um banco de dados chamado `eu_no_transito_dev` no Postgresql.
- Configure o ambiente de testes com os dados do Postgres no arquivo `src/config/config.json`.
- Execute `sequelize db:migrate` na raiz do projeto.
- Rode o sistema executando o comando `npm run dev` na raiz do projeto.
- Renomeie o arquivo `.env.example` para `.env` e altere o valor `defaultkey` para um valor único, esse token será utilizado nas requisições da API.
- Utilize a API pelo endereço: `http://localhost:3000`

## Documentação da API

- Apiary: https://eunotransitoapi.docs.apiary.io/
