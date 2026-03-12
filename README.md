# DEVS 40+

Site da comunidade **DEVS 40+** — espaço de networking, troca de experiências e valorização da maturidade profissional no mercado tech.

🌐 **https://www.devs40mais.com.br**

---

## Stack

- React 18 + Vite
- CSS global (sem framework)
- Deploy: Vercel

## Branches

| Branch | Descrição |
|--------|-----------|
| `main` | Site estático original (`index.html` monolítico) |
| `v2`   | App React componentizado com Vite ✅ |

## Estrutura (branch v2)

```
src/
  components/    # Header, Hero, About, Features, Retrospective, Podcast, Contact, Footer
  data/          # podcasts.js, features.js
  App.jsx
  main.jsx
  index.css
public/
  img/logo.png
```

## Rodar localmente

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Deploy

O deploy é feito automaticamente pela Vercel ao fazer push no branch `v2`.

```bash
# Deploy manual
vercel --prod
```
