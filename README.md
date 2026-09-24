# Meus Lembretes (PWA)

Página simples para gravar lembretes por voz e enviar para o Google Apps Script (transcrição + agendamento).

## Configurar API e token

Abra `index.html` e edite o objeto no início do `<script>`:

```js
const CONFIG = {
  API_URL: 'https://script.google.com/macros/s/SEU_ID/exec',
  TOKEN: 'SEU_TOKEN_SECRETO',
  DURACAO_MAXIMA_SEG: 60,
  DURACAO_MINIMA_SEG: 1
};
```

Salve o arquivo antes de publicar.

## Publicar no GitHub Pages

1. Envie este repositório para o GitHub (branch `main` ou `master`).
2. No repositório: **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Branch: `main` (ou `master`), pasta **/ (root)**.
5. Salve. Em alguns minutos o site ficará em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

Use sempre **HTTPS** (GitHub Pages já fornece). O microfone só funciona em contexto seguro.

## Adicionar à tela inicial

### iPhone (Safari)

1. Abra o link da página no **Safari**.
2. Toque em **Compartilhar** (ícone de quadrado com seta).
3. Role e toque em **Adicionar à Tela de Início**.
4. Confirme o nome **Lembretes** e toque em **Adicionar**.

### Android (Chrome)

1. Abra o link no **Chrome**.
2. Toque no menu **⋮** (três pontos).
3. Toque em **Adicionar à tela inicial** ou **Instalar app**.
4. Confirme.

## Testar sem microfone

Abra a página com `?teste=1` na URL, por exemplo:

`https://SEU_USUARIO.github.io/NOME_DO_REPO/?teste=1`

Digite um texto e use **Enviar texto de teste** (o backend recebe `{ token, texto }` em vez de áudio).

## Arquivos

| Arquivo | Função |
|---------|--------|
| `index.html` | App completo (HTML, CSS, JS) |
| `manifest.webmanifest` | Atalho PWA “standalone” |
| `icons/` | Ícones SVG e PNG para instalação |

Não é necessário service worker para uso como atalho na tela inicial.
