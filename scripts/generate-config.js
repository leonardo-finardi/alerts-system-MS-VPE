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
  console.error('  • Repository secrets, ou');
  console.error('  • Environment secrets no environment usado no job "build"');
  console.error('    (no pages.yml está "envs" — tem que ser o mesmo nome do GitHub).');
  console.error('');
  console.error('Secrets em "envs" NÃO aparecem no job "deploy" (github-pages).');
  console.error('Por isso o config.js é gerado só no job build.');
  console.error('');
  console.error('Variables com os mesmos nomes também funcionam (vars.*).');
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
