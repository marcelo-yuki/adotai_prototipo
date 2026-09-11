# Adota Aí 🐾

App estilo "swipe" (tipo Tinder) para adoção de pets, com painel administrativo para ONGs.

## Estrutura do projeto

```
adota-ai/
├── index.html          # Estrutura HTML (views, modais, formulários)
├── styles/
│   └── style.css       # Estilos customizados (animações de swipe, cards, etc.)
├── scripts/
│   └── app.js          # Toda a lógica da aplicação (auth, swipe, CRUD, filtros, storage)
└── assets/             # (vazio) coloque aqui imagens/ícones locais, se quiser
                         # deixar de depender de imagens externas (unsplash etc.)
```

## Como rodar

Como o projeto usa apenas HTML/CSS/JS puro (sem build step), basta abrir o
`index.html` em um navegador. Para evitar problemas de CORS/localStorage,
o ideal é servir com um servidor local simples, por exemplo:

```bash
# Python
python3 -m http.server 8000

# Node (via npx)
npx serve .
```

Depois acesse `http://localhost:8000`.

## Dependências externas (via CDN)

- [Tailwind CSS](https://cdn.tailwindcss.com) — utilitário de estilos
- [Phosphor Icons](https://unpkg.com/@phosphor-icons/web) — ícones

Ambos continuam sendo carregados via `<script>` no `index.html`, então é
necessário acesso à internet para o visual funcionar corretamente.

## Login de teste (ONG)

```
email: admin@gmail.com
senha: 1234
```

## Observações

- Os dados dos pets e o "banco de dados" de usuários/curtidas/interesses
  são mantidos em `localStorage` do navegador (ver `saveStorage()` /
  `loadStorage()` em `scripts/app.js`).
- Não há backend real: cadastro, login e ações de "adoção" são simulados
  no front-end.
