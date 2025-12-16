# 📤 Fazer Upload dos Arquivos - Passo a Passo

## ✅ FTP Conectado com Sucesso!

Agora vamos fazer upload dos arquivos.

---

## 📁 PASSO 1: Upload do Frontend (dist/)

### **No FileZilla:**

1. **Lado Esquerdo (Seu Computador):**
   - Navegue até: `C:\Users\Windows\Desktop\Ainfotech-info-main\dist`
   - Você verá os arquivos: `index.html`, `.htaccess`, `assets/`

2. **Lado Direito (Servidor):**
   - Navegue até: `/public_html`
   - Se não existir, crie a pasta (botão direito > Criar diretório)

3. **Fazer Upload:**
   - **Selecione TODOS os arquivos** da pasta `dist/` (CTRL+A)
   - **Arraste e solte** para o lado direito (public_html)
   - OU clique com botão direito > "Upload"
   - ✅ Aguarde todos os arquivos serem enviados

### **Resultado em public_html/:**
```
public_html/
├── index.html
├── .htaccess
└── assets/
    └── index-xxxxx.js
```

---

## 📁 PASSO 2: Upload do Backend (API)

### **No FileZilla:**

1. **Lado Esquerdo (Seu Computador):**
   - Navegue até: `C:\Users\Windows\Desktop\Ainfotech-info-main\backend`
   - Você verá: `server.js`, `package.json`, `config/`, `controllers/`, etc.

2. **Lado Direito (Servidor):**
   - Navegue até: `/public_html`
   - **Crie pasta `api`** (se não existir):
     - Botão direito > "Criar diretório"
     - Nome: `api`
   - Entre na pasta `api`

3. **Fazer Upload:**
   - **Selecione TODOS os arquivos e pastas** de `backend/` (CTRL+A)
   - **Arraste e solte** para o lado direito (public_html/api)
   - ✅ Aguarde todos serem enviados

### **Resultado em public_html/api/:**
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

## ⚙️ PASSO 3: Criar arquivo .env do Backend

### **No FileZilla:**

1. **Lado Direito (Servidor):**
   - Certifique-se que está em `/public_html/api/`

2. **Criar arquivo .env:**
   - Botão direito no espaço vazio > "Criar arquivo"
   - Nome: `.env`
   - OU use o Gerenciador de Arquivos do cPanel (mais fácil)

### **No cPanel (Mais Fácil):**

1. **cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/api/`**
3. **Clique em "Novo arquivo"** (botão no topo)
4. **Nome:** `.env`
5. **Clique em "Criar novo arquivo"**
6. **Clique no arquivo `.env` para editar**
7. **Cole este conteúdo e PREENCHA:**

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

CORS_ORIGIN=https://ainfotechinformatica.com.br
```

### **Onde encontrar:**
- **DB_USER e DB_PASSWORD:** cPanel > MySQL Databases
- **DB_NAME:** Nome do banco que você criou
- **JWT_SECRET:** Gere com: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`
- **CORS_ORIGIN:** Seu domínio completo

8. **Salve o arquivo**

---

## 📦 PASSO 4: Instalar Dependências do Backend

### **No cPanel:**

1. **Procure por "Terminal"** ou **"Node.js Selector"**

2. **Opção A: Node.js Selector (Mais Fácil):**
   - **cPanel > Node.js Selector**
   - **Clique em "Create Application"**
   - **Configure:**
     - **Node.js version:** 18.x ou superior
     - **Application root:** `api`
     - **Application URL:** `/api`
     - **Application startup file:** `server.js`
     - **Application mode:** Production
   - **Clique em "Create"**
   - ✅ Isso vai instalar dependências automaticamente!

3. **Opção B: Terminal (Se disponível):**
   ```bash
   cd public_html/api
   npm install --production
   ```

---

## 🚀 PASSO 5: Iniciar Node.js App

### **Se usou Node.js Selector:**
- O app já deve estar rodando automaticamente
- Verifique o status no "Node.js Selector"

### **Se não usou:**
1. **cPanel > Node.js Selector**
2. **Crie a aplicação** (veja PASSO 4)
3. **Inicie a aplicação**

---

## ✅ PASSO 6: Testar

### **1. Testar API:**
Acesse no navegador:
```
https://ainfotechinformatica.com.br/api/health
```
Deve retornar: `{"status":"ok"}`

### **2. Testar Frontend:**
Acesse:
```
https://ainfotechinformatica.com.br
```
Deve carregar a página de login.

### **3. Testar Login:**
- Email: `admin@ainfotech.com`
- Senha: (a que você configurou no banco)

---

## 📋 Checklist Final:

- [ ] Frontend enviado para `public_html/`
- [ ] `.htaccess` enviado (arquivo oculto)
- [ ] Backend enviado para `public_html/api/`
- [ ] `.env` criado e configurado
- [ ] Dependências instaladas
- [ ] Node.js app criado e iniciado
- [ ] API testada (`/api/health`)
- [ ] Frontend testado (site carrega)
- [ ] Login funcionando

---

## 🆘 Problemas Comuns:

### **API não responde:**
- Verifique se Node.js app está rodando
- Verifique logs no "Node.js Selector"
- Verifique se `.env` está correto

### **Frontend não carrega:**
- Verifique se `.htaccess` foi enviado
- Verifique permissões (644 para arquivos)

### **Erro de CORS:**
- Verifique `CORS_ORIGIN` no `.env`
- Deve ser o domínio completo com `https://`

---

## 🎉 Pronto!

Se tudo estiver funcionando, seu site está no ar! 🚀

