# 🚀 MIGRAÇÃO PARA PHP - GUIA COMPLETO

## ✅ O QUE FOI FEITO:

### **Backend PHP Criado:**
- ✅ `api/index.php` - Roteador principal
- ✅ `api/config/database.php` - Conexão MySQL
- ✅ `api/config/env.php` - Carregamento de variáveis de ambiente
- ✅ `api/middleware/auth.php` - Autenticação JWT
- ✅ `api/controllers/AuthController.php` - Controle de autenticação
- ✅ `api/controllers/TasksController.php` - Controle de tasks
- ✅ `api/.htaccess` - Roteamento e CORS

### **Frontend Atualizado:**
- ✅ `services/api.ts` - Atualizado para usar `/api` (PHP)

---

## 📋 ESTRUTURA DE ARQUIVOS:

```
public_html/
├── dist/              ← Frontend (React)
│   ├── index.html
│   └── assets/
└── api/               ← Backend PHP
    ├── .env
    ├── .htaccess
    ├── index.php
    ├── config/
    │   ├── database.php
    │   └── env.php
    ├── middleware/
    │   └── auth.php
    └── controllers/
        ├── AuthController.php
        └── TasksController.php
```

---

## 🎯 PRÓXIMOS PASSOS PARA DEPLOY:

### **1. REMOVER BACKEND NODE.JS (se existir):**

No HostGator, **delete a pasta `backend/`** se ainda existir:
- `public_html/backend/` ❌ (remover)

---

### **2. UPLOAD DOS ARQUIVOS PHP:**

#### **Via FTP (FileZilla):**

1. **Conectar ao FTP:**
   - Host: `ftp.ainfotechinformatica.com.br`
   - Usuário: `ainfotech@ainfotechinformatica.com.br`
   - Senha: (sua senha FTP)
   - Porta: `21`

2. **Navegar até:**
   - `public_html/api/`

3. **Upload dos arquivos:**
   - Faça upload de TODOS os arquivos da pasta `api/` local
   - Para: `public_html/api/` no servidor

#### **Via cPanel File Manager:**

1. **Entre em `public_html/api/`**
2. **Upload dos arquivos:**
   - `index.php`
   - `config/database.php`
   - `config/env.php`
   - `middleware/auth.php`
   - `controllers/AuthController.php`
   - `controllers/TasksController.php`
   - `.htaccess`

---

### **3. CRIAR/ATUALIZAR `.env` em `public_html/api/`:**

#### **Conteúdo do `.env`:**

```env
# ============================================
# AINFOTECH - CONFIGURAÇÃO HOSTGATOR (PHP)
# ============================================

# Banco de Dados MySQL
DB_HOST=localhost
DB_USER=ericso63_ainfotech_mysql
DB_PASSWORD=610386717Er@_mysql
DB_NAME=ericso63_ainfotech
DB_PORT=3306

# JWT Secret
JWT_SECRET=7462a273bb04a7e9c15402bfe64e9751c407346d00569e1cc6eb51e31ef080dacfbe803ccd57cc8dedbe59cf256f54a485761b5b265e776e4c63beddff4e9ad4

# CORS (URL do seu site)
CORS_ORIGIN=https://ainfotechinformatica.com.br
```

**⚠️ IMPORTANTE:** Use os valores corretos do seu banco!

---

### **4. VERIFICAR PERMISSÕES:**

#### **No cPanel File Manager:**

1. **Selecione a pasta `api/`**
2. **Clique em "Permissões"**
3. **Defina:**
   - Pastas: `755`
   - Arquivos: `644`

---

### **5. TESTAR A API:**

#### **Teste 1: Health Check**

Acesse no navegador:
```
https://ainfotechinformatica.com.br/api/health
```

**Deve retornar:**
```json
{
  "status": "ok",
  "timestamp": "2024-12-16T..."
}
```

#### **Teste 2: Login**

Use Postman ou curl:
```bash
curl -X POST https://ainfotechinformatica.com.br/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"seu_email@exemplo.com","password":"sua_senha"}'
```

**Deve retornar:**
```json
{
  "token": "eyJ...",
  "user": {
    "id": "...",
    "email": "...",
    "name": "...",
    "role": "admin"
  }
}
```

---

### **6. TESTAR O SITE:**

1. **Acesse:** `https://ainfotechinformatica.com.br`
2. **Faça login**
3. **Verifique se tudo funciona**

---

## ⚠️ PROBLEMAS COMUNS:

### **Erro 500 (Internal Server Error):**

**Causas:**
- `.env` não existe ou está incorreto
- Permissões incorretas
- Erro de sintaxe PHP

**Solução:**
1. Verifique o arquivo `.env`
2. Verifique permissões (644 para arquivos, 755 para pastas)
3. Verifique logs de erro do PHP no cPanel

### **Erro 404 (Not Found):**

**Causas:**
- `.htaccess` não está funcionando
- Arquivos não foram enviados corretamente

**Solução:**
1. Verifique se `.htaccess` está em `public_html/api/`
2. Verifique se `index.php` existe
3. Verifique se mod_rewrite está habilitado (geralmente está no HostGator)

### **Erro de Conexão com Banco:**

**Causas:**
- Dados do `.env` incorretos
- Banco não existe

**Solução:**
1. Verifique `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` no `.env`
2. Verifique se o banco existe no cPanel > MySQL Databases

---

## ✅ VANTAGENS DO PHP:

1. ✅ **Funciona em todos os planos HostGator**
2. ✅ **Não precisa de Node.js**
3. ✅ **Não precisa configurar aplicação Node.js**
4. ✅ **Funciona imediatamente após upload**
5. ✅ **Mais simples de manter**

---

## 📋 CHECKLIST FINAL:

- [ ] Backend Node.js removido (se existir)
- [ ] Arquivos PHP enviados para `public_html/api/`
- [ ] `.env` criado e configurado em `public_html/api/`
- [ ] Permissões corretas (644/755)
- [ ] Health check funcionando (`/api/health`)
- [ ] Login funcionando
- [ ] Site funcionando completamente

---

## 🎯 RESUMO:

1. ✅ **Backend PHP criado** (substitui Node.js)
2. ✅ **Frontend atualizado** (usa `/api`)
3. ✅ **Pronto para deploy** no HostGator
4. ✅ **Não precisa de Node.js**

**Agora é só fazer upload e testar!** 🚀

Guia completo salvo em: `MIGRACAO_PHP_COMPLETA.md`

