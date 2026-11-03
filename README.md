# Meus Lembretes (PWA)

Uma tela pensada para **65+**: letras grandes, poucos passos, voz ou teclado.

## Como funciona

1. **Toque** no botão azul → **fale** o lembrete com dia/hora → **toque de novo** para parar.
2. **Confirme** na tela “Está certo?” (o que fazer, quando, o que foi entendido).
3. O lembrete fica guardado no aparelho. No celular, tentamos abrir o **Outlook** — toque em **Salvar** no evento.
4. **Ver meus lembretes** mostra só o que ainda não passou; **Excluir** pede confirmação.

**Prefere digitar?** Use o link abaixo do botão (importante no iPhone, onde a voz nem sempre funciona).

Sem planilha, sem Apps Script. Dados no `localStorage` do aparelho.

## Config

Só **`SENHA`** (GitHub secret ou `config.js`). Deixe `API_URL` vazio para modo local.

## Publicar

GitHub Pages via Actions, secret `SENHA` no environment `envs`.

## Calendário (Outlook)

- **Mobile:** `ms-outlook://events/new` com `description=` (transcrição) e `title=Alerta - CRM`.
- **Desktop:** [Outlook na Web (live.com)](https://outlook.live.com/calendar) — compose com `deeplink/compose`; use **Abrir Outlook** (nova aba).

## Navegador e microfone

- Use **HTTPS** (GitHub Pages) para o microfone.
- **Chrome (Android)** ou **Safari (iPhone)** para voz; se não ouvir, **digite**.
- Fale devagar, perto do aparelho; a página mostra o que está ouvindo enquanto grava.
