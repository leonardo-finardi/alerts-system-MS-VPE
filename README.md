# Meus Lembretes (PWA)

Página simples para gravar lembretes por voz e enviar para o Google Apps Script (transcrição + agendamento).

## Senha, API e token (repositório público)

Os segredos **não** ficam no Git. Eles vão em `config.js`, que está no `.gitignore`.

1. **Local:** copie o exemplo e preencha:

   ```bash
   cp config.example.js config.js
   ```

   Edite `config.js`:

   ```js
   const CONFIG = {
     API_URL: 'https://script.google.com/macros/s/SEU_ID/exec',
     TOKEN: 'SEU_TOKEN_SECRETO',
     SENHA: 'SUA_SENHA_DE_ACESSO',
     DURACAO_MAXIMA_SEG: 60,
     DURACAO_MINIMA_SEG: 1
   };
   ```

2. **GitHub Pages (Actions):** em **Settings → Secrets and variables → Actions**, aba **Secrets** (recomendado), crie:

   | Nome      | Conteúdo                          |
   |-----------|-----------------------------------|
   | `API_URL` | URL do Apps Script                |
   | `TOKEN`   | Token do backend                  |
   | `SENHA`   | Senha para abrir a página no celular |

   Use exatamente esses nomes (maiúsculas).

   **Onde colocar:** pode ser **Repository secrets** ou **Environment secrets**. Se usar environment (como o `envs` do print), o nome tem que ser o mesmo do job `build` em `.github/workflows/pages.yml` (`environment: envs`). Secrets do `envs` **não** são visíveis no environment `github-pages` — por isso o workflow gera o `config.js` no job `build` e só publica no `deploy`.

   Se o deploy falhar com “Valores ausentes”, confira o environment ou crie os três como **Repository secrets**.

   O workflow `.github/workflows/pages.yml` gera `config.js` no job **build**.

3. **Pages:** em **Settings → Pages**, em **Build and deployment**, escolha **GitHub Actions** (não “Deploy from a branch”).

Quem abrir o site precisa digitar a **SENHA** uma vez por aba (fica lembrada na sessão do navegador). A senha impede curiosos de usar o link; quem souber inspecionar o site ainda vê o `config.js` — a proteção forte continua sendo o `TOKEN` no Apps Script.

## Publicar no GitHub Pages

1. Envie o repositório para o GitHub (pode ser **público**).
2. Configure os três secrets acima.
3. Ative Pages com **GitHub Actions**.
4. A cada push em `main` (ou `master`), o workflow publica o site.

Use sempre **HTTPS**. O microfone só funciona em contexto seguro.

## Adicionar à tela inicial

### iPhone (Safari)

1. Abra o link no **Safari** e digite a senha.
2. **Compartilhar** → **Adicionar à Tela de Início** → confirme **Lembretes**.

### Android (Chrome)

1. Abra o link no **Chrome** e digite a senha.
2. Menu **⋮** → **Adicionar à tela inicial** (ou **Instalar app**).

## Testar sem microfone

`https://SEU_USUARIO.github.io/NOME_DO_REPO/?teste=1` (após entrar com a senha).

## Arquivos

| Arquivo | Função |
|---------|--------|
| `index.html` | App (HTML, CSS, JS) |
| `config.example.js` | Modelo de configuração (versionado) |
| `config.js` | Segredos locais (**não** commitar) |
| `manifest.webmanifest` | Atalho PWA |
| `icons/` | Ícones |
| `.github/workflows/pages.yml` | Deploy com secrets |
