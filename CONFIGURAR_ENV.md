# ⚙️ Configurar arquivo .env - Passo a Passo Completo

## 📋 Onde Encontrar Cada Dado:

---

## 1️⃣ DADOS DO BANCO MYSQL

### **No cPanel:**

1. **Acesse:** cPanel > **MySQL Databases**

2. **Você verá uma lista de bancos e usuários**

3. **Encontre:**
   - **DB_NAME:** Nome do banco que você criou (ex: `ericso63_ainfotech_db`)
   - **DB_USER:** Nome do usuário MySQL (ex: `ericso63_ainfotech_mysql`)
   - **DB_PASSWORD:** A senha que você criou para o usuário MySQL

### **Se não lembrar a senha:**
- **cPanel > MySQL Databases**
- Clique no usuário
- Você pode alterar a senha ou ver os detalhes

### **Exemplo do que você deve ter:**
```
DB_HOST=localhost
DB_USER=ericso63_ainfotech_mysql
DB_PASSWORD=610386717Er@mysql
DB_NAME=ericso63_ainfotech_db
DB_PORT=3306
```

⚠️ **IMPORTANTE:** 
- `DB_NAME` deve ser o nome COMPLETO do banco (geralmente começa com seu usuário)
- `DB_USER` deve ser o nome COMPLETO do usuário MySQL

---

## 2️⃣ JWT_SECRET (Gerar)

### **No seu computador, execute:**

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### **Ou use o script:**
```bash
cd backend
node scripts/generate-password.js "qualquer_coisa"
```
(Isso gera um hash, mas você pode usar para gerar um secret também)

### **Ou gere manualmente:**
- Use qualquer gerador de string aleatória
- Mínimo 32 caracteres
- Exemplo: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`

---

## 3️⃣ CORS_ORIGIN (Seu Domínio)

### **Use seu domínio completo:**
```
CORS_ORIGIN=https://ainfotechinformatica.com.br
```

**OU se tiver www:**
```
CORS_ORIGIN=https://www.ainfotechinformatica.com.br
```

---

## 4️⃣ PORT (Porta do Servidor)

### **Deixe como está:**
```
PORT=3001
```

---

## 5️⃣ NODE_ENV (Ambiente)

### **Deixe como está:**
```
NODE_ENV=production
```

---

## ✅ ARQUIVO .env COMPLETO (Exemplo):

```env
# Banco de Dados MySQL
DB_HOST=localhost
DB_USER=ericso63_ainfotech_mysql
DB_PASSWORD=610386717Er@mysql
DB_NAME=ericso63_ainfotech_db
DB_PORT=3306

# JWT Secret (GERE UM NOVO!)
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
JWT_EXPIRES_IN=7d

# Servidor
PORT=3001
NODE_ENV=production

# CORS
CORS_ORIGIN=https://ainfotechinformatica.com.br
```

---

## 🔍 COMO VERIFICAR SE ESTÁ CORRETO:

### **1. Verificar Banco MySQL:**

No cPanel:
1. **cPanel > MySQL Databases**
2. **Veja a lista:**
   - Nome do banco → `DB_NAME`
   - Nome do usuário → `DB_USER`
   - (Senha você precisa saber)

### **2. Testar Conexão (Opcional):**

No phpMyAdmin:
1. **cPanel > phpMyAdmin**
2. **Tente fazer login com:**
   - Usuário: `DB_USER`
   - Senha: `DB_PASSWORD`
3. **Se conectar, está correto!**

### **3. Verificar Nome do Banco:**

No phpMyAdmin:
1. **cPanel > phpMyAdmin**
2. **Veja a lista de bancos no lado esquerdo**
3. **O nome completo aparece lá**
4. **Use esse nome em `DB_NAME`**

---

## 📝 CHECKLIST ANTES DE SALVAR:

- [ ] `DB_HOST=localhost` ✅ (sempre é localhost)
- [ ] `DB_USER=` (nome completo do usuário MySQL)
- [ ] `DB_PASSWORD=` (senha do usuário MySQL)
- [ ] `DB_NAME=` (nome completo do banco)
- [ ] `DB_PORT=3306` ✅ (sempre é 3306)
- [ ] `JWT_SECRET=` (gerado - mínimo 32 caracteres)
- [ ] `JWT_EXPIRES_IN=7d` ✅ (pode deixar assim)
- [ ] `PORT=3001` ✅ (pode deixar assim)
- [ ] `NODE_ENV=production` ✅ (pode deixar assim)
- [ ] `CORS_ORIGIN=` (seu domínio completo com https://)

---

## 🎯 PASSOS PARA CRIAR O .env:

### **1. No cPanel:**

1. **cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/api/`**
3. **Clique em "+ Arquivo"** (botão no topo)
4. **Nome:** `.env`
5. **Clique em "Criar novo arquivo"**

### **2. Editar o arquivo:**

1. **Clique no arquivo `.env`**
2. **Clique em "Editar"** (botão no topo)
3. **Cole o conteúdo completo:**
   ```env
   DB_HOST=localhost
   DB_USER=ericso63_ainfotech_mysql
   DB_PASSWORD=610386717Er@mysql
   DB_NAME=ericso63_ainfotech_db
   DB_PORT=3306

   JWT_SECRET=SEU_SECRET_GERADO_AQUI
   JWT_EXPIRES_IN=7d

   PORT=3001
   NODE_ENV=production

   CORS_ORIGIN=https://ainfotechinformatica.com.br
   ```

4. **Substitua:**
   - `DB_NAME` pelo nome completo do seu banco
   - `DB_USER` pelo nome completo do seu usuário
   - `DB_PASSWORD` pela senha correta
   - `JWT_SECRET` pelo secret gerado
   - `CORS_ORIGIN` pelo seu domínio

5. **Clique em "Salvar alterações"**

---

## ⚠️ IMPORTANTE:

### **Nomes Completos:**
- No HostGator, os nomes geralmente começam com seu usuário
- Exemplo: `ericso63_ainfotech_db` (não apenas `ainfotech_db`)
- Verifique no cPanel para ter certeza!

### **Senha:**
- Se não lembrar, pode alterar no cPanel
- **cPanel > MySQL Databases > Alterar senha**

### **JWT_SECRET:**
- Gere um novo (não use o exemplo!)
- Deve ser uma string aleatória longa
- Mínimo 32 caracteres

---

## ✅ DEPOIS DE SALVAR:

1. **Verifique se o arquivo foi salvo**
2. **Confirme que todas as variáveis estão preenchidas**
3. **Não deixe espaços extras**
4. **Não use aspas nas variáveis**

---

## 🆘 Se Tiver Dúvidas:

### **Não sabe o nome do banco?**
- **cPanel > MySQL Databases** → Veja a lista
- **phpMyAdmin** → Veja no menu lateral

### **Não sabe o usuário?**
- **cPanel > MySQL Databases** → Veja a lista de usuários

### **Não sabe a senha?**
- **cPanel > MySQL Databases** → Clique no usuário → Alterar senha

---

## 🎉 Pronto!

Depois de configurar o `.env`, você pode:
1. Instalar dependências
2. Iniciar o Node.js app
3. Testar a API

