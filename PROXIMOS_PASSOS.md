# 🚀 Próximos Passos - Deploy HostGator

## ✅ PASSO 1: SQL Executado com Sucesso!

---

## 📤 PASSO 2: Enviar Frontend (dist/)

### **No cPanel:**

1. **Clique em "Gerenciador de arquivos"** (File Manager)
2. **Entre na pasta `public_html`**
3. **Faça upload de TODOS os arquivos da pasta `dist/`**
   - Selecione todos os arquivos dentro de `dist/`
   - NÃO envie a pasta `dist` em si, apenas o conteúdo
   - Certifique-se que o `.htaccess` foi enviado (arquivo oculto)

### **Estrutura em `public_html/`:**
```
public_html/
├── index.html
├── .htaccess          ← IMPORTANTE!
└── assets/
    └── index-xxxxx.js
```

---

## 📤 PASSO 3: Enviar Backend (API)

### **No cPanel:**

1. **No "Gerenciador de arquivos"**, dentro de `public_html/`
2. **Crie uma pasta chamada `api`**
3. **Entre na pasta `api`**
4. **Faça upload de TODOS os arquivos da pasta `backend/`**
   - Todos os arquivos e pastas de `backend/`
   - Mantenha a estrutura de pastas

### **Estrutura em `public_html/api/`:**
```
public_html/api/
├── server.js
├── package.json
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   └── tasksController.js
├── middleware/
│   └── auth.js
└── routes/
    ├── authRoutes.js
    └── tasksRoutes.js
```

---

## ⚙️ PASSO 4: Configurar Backend (.env)

### **No cPanel:**

1. **No "Gerenciador de arquivos"**, dentro de `public_html/api/`
2. **Crie um arquivo chamado `.env`**
3. **Cole o seguinte conteúdo e preencha:**

```env
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=nome_do_banco
DB_PORT=3306

JWT_SECRET=seu_secret_super_seguro_aqui
JWT_EXPIRES_IN=7d

PORT=3001
NODE_ENV=production

CORS_ORIGIN=https://seudominio.com.br
```

### **Onde encontrar as credenciais:**
- **DB_USER e DB_PASSWORD:** cPanel > MySQL Databases > (veja o usuário criado)
- **DB_NAME:** Nome do banco que você criou
- **JWT_SECRET:** Gere um secret forte (veja abaixo)
- **CORS_ORIGIN:** Seu domínio completo (ex: https://seudominio.com.br)

### **Gerar JWT_SECRET:**
No terminal do seu computador:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
Copie o resultado e cole no `.env`

---

## 📦 PASSO 5: Instalar Dependências do Backend

### **No cPanel:**

1. **Vá em "Terminal"** (ou use SSH se disponível)
2. **Navegue até a pasta da API:**
   ```bash
   cd public_html/api
   ```
3. **Instale as dependências:**
   ```bash
   npm install --production
   ```

**OU** use o "Node.js Selector" no cPanel (mais fácil):

1. **No cPanel, procure por "Node.js Selector"**
2. **Clique em "Create Application"**
3. **Configure:**
   - **Node.js version:** 18.x ou superior
   - **Application root:** `api`
   - **Application URL:** `/api`
   - **Application startup file:** `server.js`
   - **Application mode:** Production
4. **Clique em "Create"**
5. **Aguarde instalar as dependências automaticamente**

---

## 🔐 PASSO 6: Criar Usuário Admin

### **No phpMyAdmin:**

1. **Acesse phpMyAdmin** (cPanel > phpMyAdmin)
2. **Selecione seu banco**
3. **Vá na aba "SQL"**
4. **Execute este comando** (substitua o hash):

```sql
-- Primeiro, gere o hash da senha no seu computador:
-- node backend/scripts/generate-password.js "sua_senha_aqui"

-- Depois atualize no phpMyAdmin:
UPDATE users 
SET password_hash = 'HASH_GERADO_AQUI' 
WHERE email = 'admin@ainfotech.com';
```

### **Gerar Hash da Senha:**
No terminal do seu computador:
```bash
cd backend
node scripts/generate-password.js "sua_senha_aqui"
```
Copie o hash gerado e use no SQL acima.

---

## 🚀 PASSO 7: Iniciar Node.js App

### **Se usou Node.js Selector:**
- O app já deve estar rodando automaticamente
- Verifique o status no "Node.js Selector"

### **Se não usou Node.js Selector:**
1. **No cPanel, procure por "Node.js Selector"**
2. **Crie a aplicação** (veja PASSO 5)
3. **Inicie a aplicação**

---

## ✅ PASSO 8: Testar

### **1. Testar API:**
Acesse no navegador:
```
https://seudominio.com.br/api/health
```
Deve retornar: `{"status":"ok"}`

### **2. Testar Frontend:**
Acesse:
```
https://seudominio.com.br
```
Deve carregar a página de login.

### **3. Testar Login:**
- Email: `admin@ainfotech.com`
- Senha: (a que você configurou no PASSO 6)

---

## 🔧 Configurar Variáveis do Frontend (se necessário)

Se o frontend não conectar com a API, você precisa fazer build novamente com a URL correta:

1. **No seu computador, edite `.env.local`:**
```env
VITE_API_URL=https://seudominio.com.br/api
GEMINI_API_KEY=sua_chave_gemini
```

2. **Faça build novamente:**
```bash
npm run build
```

3. **Envie os arquivos de `dist/` novamente para `public_html/`**

---

## 📋 Checklist Final

- [ ] Frontend enviado para `public_html/`
- [ ] `.htaccess` enviado (arquivo oculto)
- [ ] Backend enviado para `public_html/api/`
- [ ] `.env` criado e configurado
- [ ] Dependências instaladas (npm install)
- [ ] Node.js app criado e iniciado
- [ ] Usuário admin criado no banco
- [ ] API testada (`/api/health`)
- [ ] Frontend testado (site carrega)
- [ ] Login funcionando

---

## 🆘 Problemas Comuns

### **API não responde:**
- Verifique se Node.js app está rodando
- Verifique logs no "Node.js Selector"
- Verifique se `.env` está correto

### **Frontend não carrega:**
- Verifique se `.htaccess` foi enviado
- Verifique permissões dos arquivos (644)

### **Erro de CORS:**
- Verifique `CORS_ORIGIN` no `.env`
- Deve ser o domínio completo com `https://`

### **Login não funciona:**
- Verifique se hash da senha está correto
- Verifique se usuário existe no banco
- Verifique console do navegador (F12)

---

## 🎉 Pronto!

Se tudo estiver funcionando, seu site está no ar! 🚀

