# 💍 Curso Aliança - Plataforma de Aulas em Vídeo

Este projeto é uma plataforma educacional com foco no casamento como uma aliança. Desenvolvido com **React**, **Styled Components** e **Firebase**, ele apresenta uma interface moderna, responsiva e dinâmica, permitindo o acesso progressivo aos vídeos conforme a data de liberação e gerenciamento dos dados via Firestore.

---

## 📸 Capturas de Tela

### 💻 Layout - Desktop

![Layout Desktop](./src/assets/desktop.png)

### 📱 Layout - Mobile

![Layout Mobile](./src/assets/mobile.png)

---

## 🚀 Funcionalidades

- ✅ Visualização do vídeo principal com player do Vimeo.
- 🔒 Liberação de aulas com base na data (`dateAula`).
- 🧩 Design responsivo para dispositivos móveis.
- 🎥 Miniaturas e descrições para cada aula.
- 🔁 Troca dinâmica de vídeo com destaque do selecionado.
- 💅 Interface moderna com Styled Components.

---

## 🛠️ Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vimeo Player Embed](https://developer.vimeo.com/player/embedding)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Firebase](https://firebase.google.com/) (Firestore para armazenamento dos vídeos)

---

## 📂 Estrutura de Pastas

```
curso-alianca/
├── public/
├── src/
│   ├── assets/             # Imagens e ícones do projeto
│   ├── components/         # Componentes reutilizáveis (Header, Sidebar, etc.)
│   ├── styles/             # Estilos globais e styled-components
│   ├── db/                # Configuração do Firebase
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada do React
│   └── .env               # Variáveis de ambiente do projeto
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/curso-alianca.git

# Acesse a pasta
cd curso-alianca

# Instale as dependências
npm install

# Crie um arquivo .env com as variáveis do Firebase
touch .env
```

Exemplo de conteúdo para o `.env`:

```env
VITE_API_KEY="sua-chave-api"
VITE_DOMAIN="seu-dominio.firebaseapp.com"
VITE_PROJECT_ID="seu-project-id"
```

```bash
# Execute o projeto
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Lógica do Projeto (Resumo)

### 🎬 MainVideo.jsx

Renderiza:

- Ícone de play + thumbnail inicialmente.
- Ao clicar: exibe `<iframe>` com o vídeo do Vimeo.
- Usa `useState` para alternar entre imagem e player.

### 📑 Sidebar.jsx

- Lista os vídeos com título e descrição.
- Bloqueia os que ainda não chegaram na `dateAula`.
- Ícone de cadeado em vídeos bloqueados.
- Vídeo clicado é exibido no player principal.

### 🧾 Videos/index.js

- Cada aula tem:

  - `id`, `title`, `description`
  - `url`, `thumbnail`, `dateAula`

---

## 💾 Integração com Firebase

- O projeto utiliza o **Firebase Firestore** para armazenar e recuperar a lista de vídeos.
- As credenciais do Firebase devem ser configuradas no arquivo `.env`.
- O arquivo `src/db/Index.js` faz a inicialização do Firebase.
- As regras do Firestore devem permitir leitura dos dados para o funcionamento correto.

---

## 💄 Estilização

- Utiliza `Styled Components` com estrutura clara e separada.
- Responsivo com `@media (max-width: 768px)`:

  - Sidebar vira carrossel horizontal.
  - Itens se adaptam ao toque.

---

## 👨‍💻 Autor

Desenvolvido por **\[Gabriel - Pedra Viva]** 💡
