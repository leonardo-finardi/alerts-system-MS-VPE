# Meus Lembretes (PWA)

Uma tela para gravar lembretes por voz (60+).

## Como funciona

1. Fale o lembrete e a data (“me lembra de tomar remédio amanhã às 8”).
2. O app abre o **Google Agenda** com o evento pronto — a pessoa só toca em **Salvar**.
3. **Ver próximos lembretes** lista o que está guardado no celular e permite **excluir**.

Sem planilha, sem Apps Script. Dados no `localStorage` do aparelho.

## Config

Só **`SENHA`** (GitHub secret ou `config.js`). Deixe `API_URL` vazio.

## Publicar

GitHub Pages via Actions, secret `SENHA` no environment `envs`.

## Calendário

Usamos o link oficial do Google Agenda (`action=TEMPLATE`). No iPhone/Android costuma abrir o app ou o site do Google — **um toque em Salvar** confirma. Se não abrir, use **Abrir calendário de novo** na tela verde.

## Microfone

Use **Chrome no Android** ou **Safari no iPhone**. Fale devagar; toque de novo para terminar.
