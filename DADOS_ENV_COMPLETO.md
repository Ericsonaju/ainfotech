# 📋 Coletar Todos os Dados do .env - Guia Completo

## ✅ JWT_SECRET Gerado:

```
685f8e6002a62c2c32cc21f61efb1fa9e202878db2f6686850671bd1e66271709e1174a24b3f4979ea3b34e9d95109eada6a2687a7f61a7d28c2ed606aa5ca38
```

---

## 🔍 ONDE ENCONTRAR CADA DADO:

### **1. DADOS DO BANCO MYSQL**

#### **No cPanel:**

1. **Acesse:** cPanel > **MySQL Databases**

2. **Você verá duas seções:**
   - **"Bancos de dados"** (Databases)
   - **"Usuários"** (Users)

3. **Anote:**
   - **DB_NAME:** Nome do banco (ex: `ericso63_ainfotech_db`)
   - **DB_USER:** Nome do usuário (ex: `ericso63_ainfotech_mysql`)
   - **DB_PASSWORD:** A senha que você criou (você precisa saber)

#### **Se não lembrar a senha:**
- **cPanel > MySQL Databases**
- Clique no usuário
- Você pode **"Alterar senha"**

#### **Verificar no phpMyAdmin:**
1. **cPanel > phpMyAdmin**
2. **Menu lateral esquerdo:** Veja a lista de bancos
3. **O nome completo aparece lá**

---

### **2. JWT_SECRET**

✅ **Já gerado para você:**
```
685f8e6002a62c2c32cc21f61efb1fa9e202878db2f6686850671bd1e66271709e1174a24b3f4979ea3b34e9d95109eada6a2687a7f61a7d28c2ed606aa5ca38
```

**Use este secret gerado!**

---

### **3. CORS_ORIGIN**

**Seu domínio:**
```
https://ainfotechinformatica.com.br
```

**OU se tiver www:**
```
https://www.ainfotechinformatica.com.br
```

---

## 📝 ARQUIVO .env COMPLETO (Use este template):

```env
# Banco de Dados MySQL
DB_HOST=localhost
DB_USER=ericso63_ainfotech_mysql
DB_PASSWORD=610386717Er@mysql
DB_NAME=ericso63_ainfotech_db
DB_PORT=3306

# JWT Secret
JWT_SECRET=685f8e6002a62c2c32cc21f61efb1fa9e202878db2f6686850671bd1e66271709e1174a24b3f4979ea3b34e9d95109eada6a2687a7f61a7d28c2ed606aa5ca38
JWT_EXPIRES_IN=7d

# Servidor
PORT=3001
NODE_ENV=production

# CORS
CORS_ORIGIN=https://ainfotechinformatica.com.br
```

---

## ⚠️ ATENÇÃO - VERIFICAR:

### **1. DB_NAME:**
- Você colocou: `ericso63`
- **Verifique se está correto!**
- No cPanel > MySQL Databases, veja o nome COMPLETO do banco
- Geralmente é: `ericso63_ainfotech_db` ou similar
- **Confirme no phpMyAdmin também!**

### **2. DB_USER:**
- Você colocou: `ericso63_ainfotech_mysql` ✅
- Parece correto!

### **3. DB_PASSWORD:**
- Você colocou: `610386717Er@mysql`
- **Confirme se está correto!**
- Se não tiver certeza, altere no cPanel

---

## ✅ COMO VERIFICAR SE ESTÁ TUDO OK:

### **Passo 1: Verificar no cPanel**

1. **cPanel > MySQL Databases**
2. **Veja a lista de bancos:**
   - Anote o nome COMPLETO
   - Compare com `DB_NAME` no .env

3. **Veja a lista de usuários:**
   - Anote o nome COMPLETO
   - Compare com `DB_USER` no .env

### **Passo 2: Testar no phpMyAdmin**

1. **cPanel > phpMyAdmin**
2. **Tente fazer login:**
   - Usuário: `DB_USER` do .env
   - Senha: `DB_PASSWORD` do .env
3. **Se conectar, está correto!**

### **Passo 3: Verificar Banco**

1. **No phpMyAdmin, veja o menu lateral**
2. **O nome do banco aparece lá**
3. **Use esse nome exato em `DB_NAME`**

---

## 🎯 PASSOS PARA CRIAR O .env:

### **1. No cPanel:**

1. **cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/api/`**
3. **Clique em "+ Arquivo"**
4. **Nome:** `.env`
5. **Clique em "Criar novo arquivo"**

### **2. Editar:**

1. **Clique no `.env`**
2. **Clique em "Editar"**
3. **Cole este conteúdo:**

```env
DB_HOST=localhost
DB_USER=ericso63_ainfotech_mysql
DB_PASSWORD=610386717Er@mysql
DB_NAME=ericso63_ainfotech_db
DB_PORT=3306

JWT_SECRET=685f8e6002a62c2c32cc21f61efb1fa9e202878db2f6686850671bd1e66271709e1174a24b3f4979ea3b34e9d95109eada6a2687a7f61a7d28c2ed606aa5ca38
JWT_EXPIRES_IN=7d

PORT=3001
NODE_ENV=production

CORS_ORIGIN=https://ainfotechinformatica.com.br
```

4. **⚠️ IMPORTANTE: Verifique `DB_NAME`!**
   - Você colocou `ericso63`
   - **Confirme no cPanel se é o nome completo**
   - Pode ser `ericso63_ainfotech_db` ou similar
   - **Use o nome EXATO que aparece no cPanel/phpMyAdmin**

5. **Clique em "Salvar alterações"**

---

## 📋 CHECKLIST FINAL:

Antes de salvar, verifique:

- [ ] `DB_HOST=localhost` ✅
- [ ] `DB_USER=` (nome completo do usuário MySQL) ✅
- [ ] `DB_PASSWORD=` (senha correta) ⚠️ Verifique!
- [ ] `DB_NAME=` (nome COMPLETO do banco) ⚠️ **VERIFIQUE!**
- [ ] `DB_PORT=3306` ✅
- [ ] `JWT_SECRET=` (use o gerado acima) ✅
- [ ] `JWT_EXPIRES_IN=7d` ✅
- [ ] `PORT=3001` ✅
- [ ] `NODE_ENV=production` ✅
- [ ] `CORS_ORIGIN=` (seu domínio completo) ✅

---

## 🆘 Se Tiver Dúvidas:

### **Não sabe o DB_NAME exato?**
1. **cPanel > MySQL Databases** → Veja lista de bancos
2. **phpMyAdmin** → Veja menu lateral
3. **Use o nome EXATO que aparece**

### **Não sabe a senha?**
1. **cPanel > MySQL Databases**
2. **Clique no usuário**
3. **"Alterar senha"**
4. **Anote a nova senha**

---

## ✅ Depois de Salvar:

1. ✅ Verifique se arquivo foi salvo
2. ✅ Confirme que não há espaços extras
3. ✅ Confirme que `DB_NAME` está correto
4. ✅ Pronto para próxima etapa!

---

## 🎉 Próximos Passos:

Depois de configurar o `.env`:
1. Instalar dependências (Node.js Selector)
2. Iniciar aplicação
3. Testar API

