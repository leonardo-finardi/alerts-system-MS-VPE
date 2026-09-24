# Meus Lembretes (PWA)

Uma tela para gravar lembretes por voz (60+).

## Como funciona

1. Fale o lembrete e a data (“me lembra de tomar remédio amanhã às 8”).
2. O app tenta abrir o **Outlook** no celular com o evento — toque em **Salvar**. Se o app não existir, você continua nesta página (lembrete já salvo na lista).
3. **Ver próximos lembretes** lista o que está guardado no celular e permite **excluir**.

Sem planilha, sem Apps Script. Dados no `localStorage` do aparelho.

## Config

Só **`SENHA`** (GitHub secret ou `config.js`). Deixe `API_URL` vazio.

## Publicar

GitHub Pages via Actions, secret `SENHA` no environment `envs`.

## Calendário (Outlook)

Deep link `ms-outlook://events/new` (no Android, intent do pacote Outlook). Se não abrir o app, a página **não** redireciona para outro site — use **Ver próximos lembretes** ou **Abrir Outlook de novo**.

## Microfone

Use **Chrome no Android** ou **Safari no iPhone**. Fale devagar; toque de novo para terminar.
