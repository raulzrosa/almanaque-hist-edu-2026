# 📜 Almanaque • História da Educação

Bem-vindo ao repositório do **Almanaque • História da Educação**!  
Este projeto é uma aplicação web interativa desenvolvida com **React** e **Vite**, contendo conteúdos temáticos, textos históricos e passatempos educativos (como palavras cruzadas).

Este guia foi feito pensando em quem **não é da área de programação** ou está tendo o primeiro contato com desenvolvimento web. Siga as instruções abaixo para colocar o projeto para rodar no seu próprio computador.

---

## 📋 Sumário

- [Opção 1: Rodando direto no computador com Node.js (Recomendado)](#-opção-1-rodando-direto-no-computador-com-nodejs-recomendado)
  - [1. O que você precisa ter instalado](#1-o-que-você-precisa-ter-instalado)
  - [2. Passo a passo para rodar](#2-passo-a-passo-para-rodar)
  - [3. Como parar o projeto](#3-como-parar-o-projeto)
- [Opção 2: Rodando com Docker (Alternativa)](#-opção-2-rodando-com-docker-alternativa)
- [🛠️ Resumo de Comandos Úteis](#️-resumo-de-comandos-úteis)
- [❓ Resolução de Dúvidas e Problemas Comuns](#-resolução-de-dúvidas-e-problemas-comuns)

---

## 🚀 Opção 1: Rodando direto no computador com Node.js (Recomendado)

Esta é a maneira mais simples e direta de executar o projeto.

### 1. O que você precisa ter instalado

Você só precisa de um programa chamado **Node.js**:

1. Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Baixe a versão marcada como **LTS** (versão estável e recomendada para a maioria das pessoas).
3. Instale o arquivo baixado normalmente (no Windows/Mac basta avançar as telas padrão de instalação).
4. Para confirmar que a instalação deu certo, abra o terminal do seu computador (Prompt de Comando ou PowerShell no Windows, Terminal no Mac/Linux) e digite:
   ```bash
   node -v
   npm -v
   ```
   Se ambos mostrarem números de versão (por exemplo, `v20.x.x` ou superior), está tudo pronto!

---

### 2. Passo a passo para rodar

#### Passo A: Abrir o terminal na pasta do projeto
- **No Windows:** Abra a pasta do projeto no Explorador de Arquivos, clique na barra de endereço no topo, digite `cmd` e aperte `Enter`.
- **No VS Code:** Se você utiliza o editor Visual Studio Code, abra a pasta do projeto nele e acesse o menu superior **Terminal > Novo Terminal**.
- **No Linux/Mac:** Abra o Terminal e navegue até a pasta usando `cd caminho/da/pasta`.

#### Passo B: Baixar os pacotes e dependências (Apenas na 1ª vez)
Digite o comando abaixo e aperte `Enter`:

```bash
npm install
```

> 💡 **O que isso faz?** Esse comando lê a lista de bibliotecas necessárias e faz o download automático de todas elas para uma pasta chamada `node_modules`. Esse processo pode demorar 1 a 2 minutos dependendo da sua internet.

#### Passo C: Iniciar o servidor local
Após o término da instalação, execute:

```bash
npm run dev
```

Você verá uma mensagem parecida com esta no terminal:

```text
  VITE v8.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### Passo D: Acessar no seu navegador
Segure a tecla `Ctrl` e clique no link exibido no terminal, ou simplesmente abra o seu navegador de internet (Google Chrome, Firefox, Edge, etc.) e digite na barra de endereços:

👉 **[http://localhost:5173](http://localhost:5173)**

Pronto! A página do Almanaque estará funcionando no seu computador.

---

### 3. Como parar o projeto

Quando quiser desligar o servidor:
- Volte na janela do terminal onde o comando está rodando;
- Pressione as teclas **`Ctrl` + `C`** juntas no teclado;
- Se perguntar se deseja finalizar o processo (`S/N`), digite `S` e tecle `Enter`.

---

## 🐳 Opção 2: Rodando com Docker (Alternativa)

Se você já possui o **Docker** e o **Docker Desktop** instalados e prefere rodar tudo dentro de contêineres sem precisar instalar o Node.js na sua máquina, siga uma das opções abaixo:

### Modo Desenvolvimento (para testar e editar o código)
Permite alterar os arquivos e ver as mudanças atualizadas na hora:

```bash
docker compose -f docker-compose.dev.yml up
```
Acesse no navegador: **[http://localhost:5173](http://localhost:5173)**.

### Modo Produção (servidor Nginx otimizado)
Gera os arquivos finais compilados e roda sob um servidor web Nginx:

```bash
docker compose up -d
```
Acesse no navegador: **[http://localhost](http://localhost)** (porta 80 padrão).

Para encerrar os contêineres do Docker:
```bash
docker compose down
```

---

## 🛠️ Resumo de Comandos Úteis

| Comando | Para que serve? |
| :--- | :--- |
| `npm install` | Baixa todas as bibliotecas necessárias para rodar o projeto. |
| `npm run dev` | Inicia o site no modo de desenvolvimento (`http://localhost:5173`). |
| `npm run build` | Compila o projeto e gera a pasta final `dist` otimizada para publicação. |
| `npm run preview` | Testa localmente os arquivos gerados pela compilação (`build`). |
| `npm run lint` | Analisa os arquivos de código em busca de erros de sintaxe ou formatação. |

---

## ❓ Resolução de Dúvidas e Problemas Comuns

- **"Comando 'npm' não é reconhecido":**  
  Isso significa que o Node.js não foi instalado corretamente ou que o terminal foi aberto antes da instalação terminar. Feche todas as janelas do terminal e abra novamente após instalar o Node.js.

- **"A porta 5173 já está em uso":**  
  O Vite tentará abrir automaticamente na porta seguinte (ex: `http://localhost:5174`). Basta conferir o endereço exato que aparece no terminal e colar no navegador.

- **"Fiz uma alteração nos arquivos, preciso reiniciar o servidor?":**  
  Não! O Vite possui recarregamento automático em tempo real (*Hot Module Replacement*). Assim que você salvar o arquivo modificado, a página do navegador atualizará sozinha.

---

✨ *Desenvolvido com carinho para preservar e divulgar a História da Educação.*
