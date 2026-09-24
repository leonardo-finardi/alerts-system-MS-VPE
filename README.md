# Meus Lembretes (PWA)

Uma tela para a pessoa gravar lembretes por voz. **Padrão: tudo no navegador** — sem planilha, sem Apps Script.

## Arquitetura básica

```
┌─────────────────────────────────────────────┐
│  index.html (GitHub Pages)                  │
│  • senha de entrada                         │
│  • Web Speech API → texto em português      │
│  • regras simples → tarefa + data           │
│  • localStorage (cópia no aparelho)           │
│  • botão → arquivo .ics → Calendário        │
└─────────────────────────────────────────────┘
         │
         ▼
   Calendário do iPhone/Android
   (notificação nativa no dia/hora)
```

**O que NÃO dá para fazer só no HTML publicado:** esconder chaves de OpenAI, enviar e-mail automático da nuvem ou sincronizar entre vários celulares. Para isso, no futuro, use **um** backend (Worker, Vercel, etc.) e preencha `API_URL` + `TOKEN` no `config.js`.

## Configuração

| Campo | Uso |
|--------|-----|
| `SENHA` | Quem abre o site (obrigatório) |
| `API_URL` | Vazio = modo local (recomendado). URL = envia áudio/texto para backend |
| `TOKEN` | Só se usar `API_URL` |

**Local:** copie `config.example.js` → `config.js`.

**GitHub Pages:** secret **`SENHA`** no environment `envs`. `API_URL` e `TOKEN` são opcionais (deixe vazios).

## Publicar

1. Settings → Pages → **GitHub Actions**
2. Push em `main`
3. Abra no **Chrome (Android)** ou **Safari (iPhone)** — reconhecimento de voz funciona melhor aí

## Uso (modo local)

1. Entrar com a senha
2. Toque para gravar → fale → toque para terminar  
   Ex.: *“Me lembra de tomar o remédio amanhã às 8”*
3. Toque em **Colocar no calendário** → abra o `.ics` → **Adicionar ao Calendário**
4. O celular avisa no dia (e 15 min antes, se tiver hora)

Datas que entendemos hoje: **hoje**, **amanhã**, **depois de amanhã**, **segunda… sábado**, **dia 15**.

## Teste sem microfone

`?teste=1` na URL — digite a frase e envie.

## Atalho na tela inicial

Safari → Compartilhar → Adicionar à Tela de Início.  
Chrome → ⋮ → Adicionar à tela inicial.
