# 🚀 DEPLOY PHP NO HOSTGATOR - PASSO A PASSO

## ✅ MIGRAÇÃO CONCLUÍDA!

O backend foi **completamente migrado de Node.js para PHP**.

---

## 📋 ESTRUTURA FINAL:

```
public_html/
├── dist/              ← Frontend (React) - JÁ ESTÁ LÁ
│   ├── index.html
│   └── assets/
└── api/               ← Backend PHP - UPLOAD AGORA
    ├── .env           ← Criar/atualizar
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

## 🎯 PASSO 1: REMOVER BACKEND NODE.JS (se existir)

### **No cPanel File Manager:**

1. **Entre em `public_html/`**
2. **Se existir pasta `backend/`**, delete-a
3. **Mantenha apenas `dist/` e `api/`**

---

## 🎯 PASSO 2: UPLOAD DOS ARQUIVOS PHP

### **Opção A: Via FTP (FileZilla) - RECOMENDADO**

1. **Conectar:**
   - Host: `ftp.ainfotechinformatica.com.br`
   - Usuário: `ainfotech@ainfotechinformatica.com.br`
   - Senha: (sua senha FTP)
   - Porta: `21`

2. **Navegar até:**
   - `public_html/api/`

3. **Upload:**
   - Faça upload de TODOS os arquivos da pasta `api/` local
   - Para: `public_html/api/` no servidor

### **Opção B: Via cPanel File Manager**

1. **Entre em `public_html/api/`**
2. **Upload arquivo por arquivo:**
   - `index.php`
   - `config/database.php`
   - `config/env.php`
   - `middleware/auth.php`
   - `controllers/AuthController.php`
   - `controllers/TasksController.php`
   - `.htaccess`

---

## 🎯 PASSO 3: CRIAR/ATUALIZAR `.env`

### **No cPanel File Manager:**

1. **Entre em `public_html/api/`**
2. **Criar arquivo `.env`** (ou editar se já existir)
3. **Cole este conteúdo:**

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

**⚠️ IMPORTANTE:** Verifique se os valores estão corretos!

---

## 🎯 PASSO 4: VERIFICAR PERMISSÕES

### **No cPanel File Manager:**

1. **Selecione a pasta `api/`**
2. **Clique em "Permissões"**
3. **Defina:**
   - Pastas: `755`
   - Arquivos: `644`

---

## 🎯 PASSO 5: TESTAR

### **Teste 1: Health Check**

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

### **Teste 2: Site Completo**

1. **Acesse:** `https://ainfotechinformatica.com.br`
2. **Faça login**
3. **Verifique se tudo funciona**

---

## ⚠️ PROBLEMAS COMUNS:

### **Erro 500:**

**Solução:**
- Verifique `.env` (valores corretos)
- Verifique permissões (644/755)
- Verifique logs de erro PHP no cPanel

### **Erro 404:**

**Solução:**
- Verifique se `.htaccess` está em `public_html/api/`
- Verifique se `index.php` existe

### **Erro de Conexão:**

**Solução:**
- Verifique dados do `.env`
- Verifique se banco existe no cPanel

---

## ✅ VANTAGENS DO PHP:

1. ✅ **Funciona em todos os planos HostGator**
2. ✅ **Não precisa de Node.js**
3. ✅ **Funciona imediatamente**
4. ✅ **Mais simples de manter**

---

## 📋 CHECKLIST:

- [ ] Backend Node.js removido (se existir)
- [ ] Arquivos PHP enviados
- [ ] `.env` criado e configurado
- [ ] Permissões corretas
- [ ] Health check funcionando
- [ ] Site funcionando

---

## 🎯 PRONTO!

**Agora é só fazer upload e testar!** 🚀

Guia completo salvo em: `DEPLOY_PHP_HOSTGATOR.md`

