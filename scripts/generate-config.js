#!/usr/bin/env node
'use strict';

const fs = require('fs');

const keys = ['API_URL', 'TOKEN', 'SENHA'];
const missing = keys.filter(function (k) {
  const v = process.env[k];
  return v === undefined || String(v).trim() === '';
});

if (missing.length) {
  console.error('::error::Valores ausentes para: ' + missing.join(', '));
  console.error('');
  console.error('O workflow espera API_URL, TOKEN e SENHA em:');
  console.error('  Settings → Secrets and variables → Actions → Secrets');
  console.error('(ou secrets do environment github-pages).');
  console.error('');
  console.error('Se você criou em "Variables", renomeie para Secrets ou');
  console.error('use Variables com os mesmos nomes — o workflow também lê vars.*.');
  process.exit(1);
}

const CONFIG = {
  API_URL: process.env.API_URL.trim(),
  TOKEN: process.env.TOKEN.trim(),
  SENHA: process.env.SENHA.trim(),
  DURACAO_MAXIMA_SEG: 60,
  DURACAO_MINIMA_SEG: 1
};

fs.writeFileSync('config.js', 'const CONFIG = ' + JSON.stringify(CONFIG, null, 2) + ';\n');
console.log('config.js gerado com sucesso.');
