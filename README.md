# Jogo Adivinhe o Número

![Posts App Demo](/public/index.gif)

## Descrição
"Guess the Number" é um jogo simples e divertido baseado em React, onde os usuários tentam adivinhar um número gerado aleatoriamente entre 1 e 100 dentro de 10 tentativas. O aplicativo fornece feedback sobre se o número adivinhado é maior ou menor que o número alvo.

## Recursos
- Interface amigável para o usuário.
- Feedback em tempo real sobre os palpites.
- Exibe o histórico de palpites.
- Alertas quando a entrada é inválida.
- Páginas de sucesso e falha baseadas no desempenho do usuário.

## Tecnologias

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
</p>



## Estrutura do Projeto
O projeto segue uma estrutura padrão de aplicativo React:

```
guess-the-number/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── Bad.svg
│   │   ├── Success.svg
│   │   └── questionMark.svg
│   ├── components/
│   │   ├── AlertMessage/
│   │   │   ├── AlertMessage.jsx
│   │   │   └── AlertMessage.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── GuessHistory/
│   │   │   ├── GuessHistory.jsx
│   │   │   └── GuessHistory.module.css
│   │   ├── ResultMessage/
│   │   │   ├── ResultMessage.jsx
│   │   │   └── ResultMessage.module.css
│   ├── pages/
│   │   ├── StartPage/
│   │   │   ├── StartPage.jsx
│   │   │   └── StartPage.module.css
│   │   ├── Game/
│   │   │   ├── Game.jsx
│   │   │   └── Game.module.css
│   │   ├── SuccessPage/
│   │   │   ├── SuccessPage.jsx
│   │   │   └── SuccessPage.module.css
│   │   └── FailPage/
│   │       ├── FailPage.jsx
│   │       └── FailPage.module.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

### Estrutura do Projeto

Aqui está uma visão geral dos arquivos relevantes para nosso projeto, com base nas práticas padrão e inferidas a partir dos caminhos dos arquivos:

- **public/**: Contém ativos públicos e o arquivo HTML principal.
- **src/**: Contém todo o código-fonte.
  - **components/**: Contém componentes React reutilizáveis.
  - **pages/**: Contém componentes de nível de página.
  - **assets/**: Contém imagens e outros ativos estáticos.
  - **App.js**: O componente principal do aplicativo.
  - **index.js**: O ponto de entrada para o aplicativo React.
- **package.json**: Contém metadados e dependências do projeto.


## Instalação

Para executar este projeto localmente, siga estas etapas:

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-nome-de-usuário/guess-the-number.git
   cd guess-the-number
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm start
   ```

4. Abra seu navegador e acesse `http://localhost:5173`.

   

## Componentes

### `StartPage`
- A página inicial do jogo.
- Exibe instruções do jogo e um botão para iniciar o jogo.

### `Game`
- A interface principal do jogo onde os usuários inserem seus palpites.
- Fornece feedback em tempo real sobre os palpites.
- Exibe o histórico de palpites.
- Redireciona para as páginas de sucesso ou falha com base no desempenho do usuário.

### `SuccessPage`
- Exibe uma mensagem de sucesso e o histórico de palpites quando o usuário acerta o número.

### `FailPage`
- Exibe uma mensagem de falha e o histórico de palpites quando o usuário não acerta o número dentro de 10 tentativas.

### `GuessHistory`
- Um componente que exibe o histórico de palpites.

### `ResultMessage`
- Um componente que mostra se o último palpite foi muito alto ou muito baixo.

### `AlertMessage`
- Um componente que exibe mensagens de alerta para entradas inválidas.

### `Footer`
- Um componente de rodapé simples.

## Scripts

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm build`: Compila o aplicativo para produção.
- `npm test`: Executa testes.
- `npm eject`: Ejecta a configuração do Create React App.


## Design

Você pode encontrar o design do jogo no Figma [aqui](https://www.figma.com/design/OAvs5QHH2ASMmK4bgYy8b3/Jogo-Advinha-n%C3%BAmeros---React?node-id=10-2&t=6QAiGF9lRYD3APGn-1).


## Contribuindo

1. Faça um fork do repositório.
2. Crie sua branch de feature: `git checkout -b feature/sua-feature`
3. Faça commit das suas alterações: `git commit -m 'Adicione alguma feature'`
4. Faça push para a branch: `git push origin feature/sua-feature`
5. Abra um pull request.



Desenvolvido por [Alan Barroncas](https://linkedin.com/in/alan-barroncas) 🚀
