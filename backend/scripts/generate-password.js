/**
 * Script para gerar hash de senha (bcrypt)
 * Uso: node generate-password.js "sua_senha"
 */
import bcrypt from 'bcryptjs';

const password = process.argv[2];

if (!password) {
  console.error('❌ Uso: node generate-password.js "sua_senha"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
console.log('\n✅ Hash gerado:');
console.log(hash);
console.log('\n📝 Use este hash no banco de dados:\n');
console.log(`UPDATE users SET password_hash = '${hash}' WHERE email = 'seu_email@exemplo.com';\n`);

