#!/usr/bin/env node

/**
 * Script Automatizado de Setup para HostGator
 * Facilita a configuração inicial
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

console.log('\n🚀 Setup Automatizado - HostGator\n');
console.log('Este script vai:');
console.log('1. ✅ Fazer build do frontend');
console.log('2. ✅ Preparar backend');
console.log('3. ✅ Criar arquivos de configuração');
console.log('4. ✅ Gerar instruções de deploy\n');

async function main() {
  try {
    // 1. Build do Frontend
    console.log('📦 Fazendo build do frontend...');
    const { execSync } = await import('child_process');
    
    try {
      execSync('npm run build', { 
        cwd: rootDir, 
        stdio: 'inherit',
        shell: true 
      });
      console.log('✅ Build concluído!\n');
    } catch (error) {
      console.error('❌ Erro no build. Verifique se todas as dependências estão instaladas.');
      console.error('Execute: npm install\n');
      process.exit(1);
    }

    // 2. Verificar se dist/ existe
    const distPath = path.join(rootDir, 'dist');
    if (!fs.existsSync(distPath)) {
      console.error('❌ Pasta dist/ não encontrada após build!');
      process.exit(1);
    }

    // 3. Verificar .htaccess
    const htaccessSource = path.join(rootDir, 'public', '.htaccess');
    const htaccessDest = path.join(distPath, '.htaccess');
    
    if (fs.existsSync(htaccessSource)) {
      fs.copyFileSync(htaccessSource, htaccessDest);
      console.log('✅ .htaccess copiado para dist/\n');
    } else {
      console.warn('⚠️  .htaccess não encontrado em public/\n');
    }

    // 4. Criar .env.example para backend
    const backendEnvExample = `# Configuração do Banco de Dados MySQL (HostGator)
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=ainfotech_db
DB_PORT=3306

# JWT Secret (GERE UM SECRET FORTE!)
JWT_SECRET=seu_jwt_secret_super_seguro_aqui_altere_isto
JWT_EXPIRES_IN=7d

# Porta do servidor
PORT=3001

# Ambiente
NODE_ENV=production

# CORS (domínios permitidos)
CORS_ORIGIN=https://seudominio.com.br
`;

    const backendEnvPath = path.join(rootDir, 'backend', '.env.example');
    fs.writeFileSync(backendEnvPath, backendEnvExample);
    console.log('✅ .env.example criado em backend/\n');

    // 5. Criar arquivo de instruções
    const instructions = `# 📋 Instruções de Deploy - HostGator

## ✅ Build Concluído!

### Arquivos Prontos:
- ✅ Frontend: pasta dist/
- ✅ Backend: pasta backend/
- ✅ Schema: database/mysql_schema_auto.sql

## 📤 Próximos Passos:

### 1. Criar Banco MySQL (cPanel)
- Acesse: cPanel > MySQL Databases
- Crie banco: ainfotech_db
- Crie usuário e associe ao banco

### 2. Importar Schema (phpMyAdmin)
- Acesse: phpMyAdmin
- Selecione o banco criado
- Importe: database/mysql_schema_auto.sql

### 3. Enviar Frontend
- Upload de dist/ → public_html/
- Certifique-se que .htaccess foi enviado

### 4. Enviar Backend
- Upload de backend/ → public_html/api/
- Crie .env em public_html/api/ (copie de .env.example)
- Configure credenciais MySQL
- Instale dependências: cd api && npm install
- Inicie Node.js app no cPanel

### 5. Configurar Variáveis
- Frontend: VITE_API_URL=https://seudominio.com.br/api
- Backend: Configure .env com credenciais MySQL

## 🔐 Criar Usuário Admin

Execute no phpMyAdmin após importar schema:
\`\`\`sql
-- Gerar hash primeiro:
-- node backend/scripts/generate-password.js "sua_senha"

UPDATE users 
SET password_hash = 'HASH_GERADO' 
WHERE email = 'admin@ainfotech.com';
\`\`\`

## ✅ Pronto!

Acesse seu site e faça login com:
- Email: admin@ainfotech.com
- Senha: (a que você configurou)
`;

    const instructionsPath = path.join(rootDir, 'DEPLOY_INSTRUCOES.txt');
    fs.writeFileSync(instructionsPath, instructions);
    console.log('✅ Instruções salvas em DEPLOY_INSTRUCOES.txt\n');

    // 6. Resumo
    console.log('═══════════════════════════════════════');
    console.log('✅ SETUP CONCLUÍDO!');
    console.log('═══════════════════════════════════════\n');
    console.log('📁 Arquivos prontos:');
    console.log('   - dist/ (frontend build)');
    console.log('   - backend/ (API)');
    console.log('   - database/mysql_schema_auto.sql\n');
    console.log('📋 Próximos passos:');
    console.log('   1. Criar banco MySQL no cPanel');
    console.log('   2. Importar schema no phpMyAdmin');
    console.log('   3. Enviar arquivos para HostGator');
    console.log('   4. Configurar .env do backend\n');
    console.log('📖 Veja: DEPLOY_INSTRUCOES.txt\n');

  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();

