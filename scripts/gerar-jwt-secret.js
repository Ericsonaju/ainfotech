#!/usr/bin/env node

/**
 * Script para gerar JWT_SECRET aleatória
 * Uso: node scripts/gerar-jwt-secret.js
 */

import crypto from 'crypto';

// Gera uma chave de 64 bytes (128 caracteres em hexadecimal)
const jwtSecret = crypto.randomBytes(64).toString('hex');

console.log('\n🔑 JWT_SECRET GERADA:\n');
console.log('='.repeat(80));
console.log(jwtSecret);
console.log('='.repeat(80));
console.log('\n✅ Copie a chave acima e cole no arquivo .env como:\n');
console.log(`JWT_SECRET=${jwtSecret}\n`);
console.log('⚠️  IMPORTANTE: Guarde essa chave em local seguro!\n');

