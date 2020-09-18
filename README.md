# App de notícias do THE NEW YORK TIMES 

    Este App consomi a API Top Stories de duas categorias 'technology' e 'science'.

## Backend
  - NodeJS
  - Typescript
  - 
## Frontend
  - ReactJS
  - Typescript

### Escolhas

- **React-window** (Frontend)

	Utilizei a biblioteca react-window para renderizar a lista de notícias, pois ela trabalha com o conceito de virtualização, muito utilizada para aumentar o desempenho em listas muito grandes, renderizando somente o que é visível para o usuário e aumentando sua experiência de usuário.


- **Styled-components**  (Frontend)

	Utilizei esta biblioteca porque é uma ótima forma de componentizar nossos estilos e deixar mais limpo o código, além de diversos beneficios de interação com os componentes.


- **Typescript** (frontend/Backend)

	Utilizei o typescript pois além da inteligência (IntelliSense) da IDE, ganhamos mais confiabilidade em seu uso.


- **Eslint/Prettier/EditorConfig** (Frontend)

	Utilizei essas 3 ferramentas para manter nosso código padronizado.


### Instruções [Backend]

Entre na pasta do projeto:
```sh
$ cd backend
```

Para utilização desta aplicação é necessário a chave de acesso da API do THE NEW YORK TIMES, 
Após o cadastro no site deles e obtenção da sua API KEY,
edite o arquivo de nome ".env.example", e altere o valor da variável "NY_TIMES_API_KEY" com o valor da sua API KEY, 
também neste arquivo, altere(se desejar) a porta onde vamos executar nosso servidor nodejs na variável de nome "PORT".

Após essas duas alterações renomeie o arquivo ".env.example" para ".env".

Entre na pasta backend e instale todas as dependências do projeto:
```sh
$ cd backend
$ yarn  
```
Depois apenas inicie:

```sh
$ yarn dev:server
```

### Instruções [Frontend]
Entre na pasta frontend e instale todas as dependências do projeto:
```sh
$ cd frontend
$ yarn  
```

Depois apenas inicie:

```sh
$ yarn start
```