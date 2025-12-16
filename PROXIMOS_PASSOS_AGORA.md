# ✅ ESTRUTURA CORRIGIDA - PRÓXIMOS PASSOS

## ✅ Estrutura Atual (CORRETA):

```
public_html/
├── api/               ← ✅ Backend (Node.js)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   └── scripts/
└── dist/              ← ✅ Frontend (React)
    └── assets/
```

---

## 📋 PRÓXIMOS PASSOS (Ordem Importante):

### **1️⃣ VERIFICAR/CRIAR `.env` em `public_html/api/`**

#### **Passo a Passo:**

1. **No cPanel File Manager:**
   - Entre na pasta `public_html/api/`
   - Verifique se existe arquivo `.env`
   - Se **NÃO existir**, crie:

2. **Criar `.env`:**
   - Clique em **"+ Arquivo"**
   - Nome: `.env`
   - Clique em **"Criar Novo Arquivo"**

3. **Editar `.env`:**
   - Clique no arquivo `.env`
   - Clique em **"Editar"**
   - Cole o conteúdo abaixo:

```env
# ============================================
# AINFOTECH - CONFIGURAÇÃO HOSTGATOR
# ============================================

# Banco de Dados MySQL
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=seu_banco_mysql

# JWT Secret (gere uma senha forte)
JWT_SECRET=sua_chave_secreta_jwt_aqui

# CORS (URL do seu site)
CORS_ORIGIN=https://ainfotechinformatica.com.br

# Porta (HostGator usa porta automática)
PORT=3000
```

4. **Substituir valores:**
   - `DB_USER`: Nome do usuário MySQL (cPanel > MySQL Databases)
   - `DB_PASSWORD`: Senha do MySQL
   - `DB_NAME`: Nome do banco (ex: `ericso63_ainfotech_db`)
   - `JWT_SECRET`: Gere uma senha forte (ex: `minha_chave_secreta_123456`)
   - `CORS_ORIGIN`: URL do seu site (com `https://`)

5. **Salvar:**
   - Clique em **"Salvar alterações"**

---

### **2️⃣ CONFIGURAR NODE.JS APP NO CPANEL**

#### **Passo a Passo:**

1. **No cPanel:**
   - Procure por **"Node.js Selector"** ou **"Node.js App"**
   - Clique para abrir

2. **Criar Nova Aplicação:**
   - Clique em **"Create Application"** ou **"Criar Aplicação"**

3. **Configurar:**
   - **Node.js Version:** Escolha a versão mais recente (ex: `20.x` ou `18.x`)
   - **Application Mode:** `Production`
   - **Application Root:** `/home/ericso63/public_html/api`
   - **Application URL:** `/api` (ou deixe vazio se usar subdomínio)
   - **Application Startup File:** `server.js`
   - **Application Port:** Deixe vazio (HostGator define automaticamente)

4. **Salvar:**
   - Clique em **"Create"** ou **"Criar"**

5. **Instalar Dependências:**
   - Após criar, clique em **"Run NPM Install"** ou **"npm install"**
   - Aguarde instalar os pacotes

6. **Iniciar Aplicação:**
   - Clique em **"Restart App"** ou **"Iniciar"**

---

### **3️⃣ VERIFICAR LOGS (Se houver erro)**

#### **Passo a Passo:**

1. **No Node.js App:**
   - Clique na sua aplicação
   - Procure por **"Logs"** ou **"View Logs"**
   - Verifique se há erros

2. **Erros comuns:**
   - **Erro de conexão MySQL:** Verifique `.env` (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
   - **Erro de porta:** Deixe vazio no cPanel (HostGator define automaticamente)
   - **Erro de módulo não encontrado:** Execute `npm install` novamente

---

### **4️⃣ TESTAR O SITE**

#### **Passo a Passo:**

1. **Abrir site:**
   - Acesse: `https://ainfotechinformatica.com.br`
   - Deve carregar o frontend

2. **Testar API:**
   - Acesse: `https://ainfotechinformatica.com.br/api/health` (se tiver rota de teste)
   - Ou teste login no site

3. **Verificar erros:**
   - Abra o **Console do navegador** (F12)
   - Verifique se há erros de conexão com API

---

## 🎯 CHECKLIST FINAL:

- [ ] `.env` criado em `public_html/api/`
- [ ] `.env` preenchido com dados corretos
- [ ] Node.js App criado no cPanel
- [ ] `npm install` executado
- [ ] Aplicação iniciada/restartada
- [ ] Site carregando (frontend)
- [ ] API respondendo (backend)

---

## ⚠️ PROBLEMAS COMUNS:

### **Erro 500 (Internal Server Error):**
- Verifique logs do Node.js app
- Verifique `.env` (valores corretos)
- Verifique se `npm install` foi executado

### **Erro 403 (Forbidden):**
- Verifique permissões dos arquivos (644 para arquivos, 755 para pastas)
- Verifique se `.htaccess` está em `public_html/`

### **API não conecta:**
- Verifique `CORS_ORIGIN` no `.env`
- Verifique URL da API no frontend
- Verifique se Node.js app está rodando

---

## 📞 PRÓXIMO PASSO IMEDIATO:

**1. Criar/Verificar `.env` em `public_html/api/`**

Depois me avise quando terminar para continuarmos!

