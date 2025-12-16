# 🔧 Resolver Erros 403 e 500 - HostGator

## ❌ Problemas Identificados:

1. **Erro 403 (Acesso Negado):** Site principal não carrega
2. **Erro 500 (Internal Server Error):** API não funciona

---

## 🔧 SOLUÇÃO 1: Corrigir Permissões (Erro 403)

### **No cPanel:**

1. **Gerenciador de arquivos**
2. **Entre em `public_html/`**
3. **Selecione `index.html`**
4. **Clique em "Permissões"**
5. **Configure:**
   - **Numeric Value:** `644`
   - ✅ Marque: Read, Write (Owner)
   - ✅ Marque: Read (Group)
   - ✅ Marque: Read (Public)
6. **Clique em "Alterar permissões"**

7. **Repita para:**
   - `.htaccess` → `644`
   - Todos os arquivos em `assets/` → `644`
   - Pasta `assets/` → `755`

8. **Para a pasta `api/`:**
   - Pasta `api/` → `755`
   - Todos os arquivos dentro → `644`

---

## 🔧 SOLUÇÃO 2: Verificar Node.js App (Erro 500)

### **No cPanel:**

1. **Node.js Selector**
2. **Veja a lista de aplicações**
3. **Verifique:**
   - Status está "Running"?
   - Se não, clique em "Start"

4. **Veja os Logs:**
   - Clique na aplicação
   - Clique em "View Logs" ou "Logs"
   - Veja se há erros

---

## 🔧 SOLUÇÃO 3: Verificar .env

### **Problemas Comuns:**

1. **`.env` não existe:**
   - Crie em `public_html/api/`
   - Veja `DADOS_ENV_COMPLETO.md`

2. **`.env` com dados errados:**
   - Verifique `DB_NAME` (deve ser nome completo)
   - Verifique `DB_USER` (deve ser nome completo)
   - Verifique `DB_PASSWORD` (deve estar correto)

3. **`.env` em lugar errado:**
   - Deve estar em `public_html/api/.env`
   - NÃO em `public_html/.env`

---

## 🔧 SOLUÇÃO 4: Verificar Estrutura

### **Estrutura Correta:**

```
public_html/
├── index.html          ← Deve existir!
├── .htaccess          ← Deve existir!
├── assets/            ← Deve existir!
└── api/               ← Deve existir!
    ├── .env           ← Deve existir!
    ├── server.js
    └── ...
```

### **Verificar:**

1. **No cPanel > Gerenciador de arquivos:**
2. **Entre em `public_html/`**
3. **Confirme que tem:**
   - `index.html` ✅
   - `.htaccess` ✅
   - `assets/` ✅
   - `api/` ✅

4. **Entre em `api/`:**
   - `.env` ✅
   - `server.js` ✅
   - `package.json` ✅

---

## 🔧 SOLUÇÃO 5: Reinstalar Dependências

### **Se Node.js app não funciona:**

1. **Node.js Selector**
2. **Clique na aplicação**
3. **Clique em "NPM Install"** ou **"Reinstall"**
4. **Aguarde instalar**
5. **Reinicie a aplicação**

---

## 📋 CHECKLIST DE CORREÇÃO:

### **Para Erro 403:**
- [ ] Permissões de `index.html` = 644
- [ ] Permissões de `.htaccess` = 644
- [ ] Permissões de `assets/` = 755 (pasta) e 644 (arquivos)
- [ ] Permissões de `api/` = 755 (pasta) e 644 (arquivos)

### **Para Erro 500:**
- [ ] Node.js app está rodando
- [ ] `.env` existe e está correto
- [ ] Dependências instaladas
- [ ] Logs não mostram erros críticos

---

## 🎯 PASSOS RÁPIDOS:

### **1. Corrigir Permissões:**
```
public_html/index.html → 644
public_html/.htaccess → 644
public_html/assets/ → 755 (pasta)
public_html/api/ → 755 (pasta)
public_html/api/.env → 644
public_html/api/server.js → 644
```

### **2. Verificar Node.js:**
- Status: Running
- Logs: Sem erros críticos

### **3. Verificar .env:**
- Existe em `public_html/api/`
- Dados corretos (especialmente DB_NAME)

### **4. Testar Novamente:**
- Site: https://ainfotechinformatica.com.br
- API: https://ainfotechinformatica.com.br/api/health

---

## 🆘 Se Ainda Não Funcionar:

### **Verificar Logs do Node.js:**

1. **Node.js Selector > Logs**
2. **Veja os erros**
3. **Erros comuns:**
   - "Cannot find module" → Dependências não instaladas
   - "Connection refused" → MySQL não conecta
   - "ENOENT" → Arquivo não encontrado

### **Verificar Logs do Apache:**

1. **cPanel > Errors** ou **Error Log**
2. **Veja erros recentes**
3. **Procure por:**
   - Erros de permissão
   - Erros de arquivo não encontrado

---

## ✅ RESUMO:

1. **Corrigir permissões** (644 para arquivos, 755 para pastas)
2. **Verificar Node.js app** (deve estar Running)
3. **Verificar .env** (deve existir e estar correto)
4. **Verificar logs** (para ver erros específicos)
5. **Testar novamente**

---

## 🎯 Ordem de Prioridade:

1. **Primeiro:** Corrigir permissões (resolve 403)
2. **Segundo:** Verificar Node.js app (resolve 500)
3. **Terceiro:** Verificar .env e logs

**Comece corrigindo as permissões!** 🔧

