#!/usr/bin/env node
'use strict';

const fs = require('fs');

const senha = process.env.SENHA;
if (!senha || String(senha).trim() === '') {
  console.error('::error::Secret SENHA ausente.');
  process.exit(1);
}

const CONFIG = {
  SENHA: String(senha).trim(),
  API_URL: String(process.env.API_URL || '').trim(),
  TOKEN: String(process.env.TOKEN || '').trim(),
  DURACAO_MAXIMA_SEG: 60,
  DURACAO_MINIMA_SEG: 1
};

fs.writeFileSync('config.js', 'window.APP_CONFIG = ' + JSON.stringify(CONFIG, null, 2) + ';\n');
console.log('config.js gerado (' + (CONFIG.API_URL ? 'com API' : 'modo local, sem API') + ').');
