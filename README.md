# React

## O que é?

O **React** é uma biblioteca JavaScript desenvolvida pelo Facebook para
a criação de interfaces de usuário (UI) de forma **declarativa**,
**eficiente** e **flexível**.\
Ele é baseado em **componentes**, que são blocos reutilizáveis de código
responsáveis por renderizar partes da interface.

------------------------------------------------------------------------

## Componentes

Os **componentes** no React permitem dividir a interface em partes
independentes e reutilizáveis.\
Existem dois tipos principais: - **Componentes de Função**: escritos
como funções JavaScript. - **Componentes de Classe**: escritos como
classes ES6 (menos usados atualmente).

Exemplo de um componente funcional simples:

\`\`\`jsx function OlaMundo() { return
```{=html}
<h1>
```
Olá, mundo!
```{=html}
</h1>
```
; }

export default OlaMundo; \`\`\`

------------------------------------------------------------------------

## Setup de um Projeto React com Vite

O **Vite** é uma ferramenta de build rápida que facilita a criação de
projetos modernos em React.

### Passo 1: Criar o projeto

No terminal, execute: \`\`\`bash npm create vite@latest nome-do-projeto
\`\`\`

### Passo 2: Escolher opções

-   Dê um nome ao seu projeto
-   Escolha o framework **React**
-   Se preferir, selecione **React + TypeScript**

### Passo 3: Instalar dependências

\`\`\`bash cd nome-do-projeto npm install \`\`\`

### Passo 4: Rodar o projeto

\`\`\`bash npm run dev \`\`\`
    
------------------------------------------------------------------------

## Estrutura Básica do Projeto

Após a criação, a estrutura será semelhante a:

\`\`\` nome-do-projeto/ ├── index.html ├── package.json ├── src/ │ ├──
App.jsx │ ├── main.jsx │ └── assets/ └── vite.config.js \`\`\`

------------------------------------------------------------------------


