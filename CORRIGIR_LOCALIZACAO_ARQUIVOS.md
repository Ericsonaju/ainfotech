# ⚠️ CORREÇÃO URGENTE - Arquivos no Lugar Errado!

## ❌ PROBLEMA IDENTIFICADO:

Vejo que você está em `/repositories/ainfotech/`, mas os arquivos devem estar em `public_html/`!

**O Git clonou no lugar errado!**

---

## ✅ SOLUÇÃO: Mover Arquivos para public_html/

### **OPÇÃO 1: Mover Manualmente (Mais Rápido)**

#### **No cPanel File Manager:**

1. **Navegue até `/repositories/ainfotech/`** (onde estão os arquivos agora)

2. **Mover arquivos do frontend:**
   - Selecione a pasta `dist/`
   - Clique em "Mover"
   - Destino: `public_html/`
   - Clique em "Mover arquivo(s)"
   - **OU** entre em `dist/`, selecione todos os arquivos e mova para `public_html/`

3. **Mover arquivos do backend:**
   - Selecione a pasta `backend/`
   - Clique em "Mover"
   - Destino: `public_html/api/`
   - Clique em "Mover arquivo(s)"

4. **Verificar estrutura:**
   - `public_html/` deve ter: `index.html`, `.htaccess`, `assets/`
   - `public_html/api/` deve ter: `server.js`, `package.json`, `config/`, etc.

---

### **OPÇÃO 2: Reconfigurar Git (Mais Organizado)**

#### **No cPanel:**

1. **Git Version Control**
2. **Delete o repositório atual** (se quiser)
3. **Crie novo repositório:**
   - **Repository URL:** `https://github.com/Ericsonaju/ainfotech.git`
   - **Repository Path:** `public_html` ← **MUDE PARA ISSO!**
   - **Branch:** `main`
   - **Auto Deploy:** ✅
4. **Create**

5. **O script `.cpanel.yml` vai organizar automaticamente!**

---

## 🎯 ESTRUTURA CORRETA:

### **Onde os arquivos DEVEM estar:**

```
public_html/                    ← ✅ AQUI!
├── index.html
├── .htaccess
├── assets/
└── api/
    ├── .env
    ├── server.js
    └── ...
```

### **Onde os arquivos ESTÃO (ERRADO):**

```
repositories/ainfotech/          ← ❌ ERRADO!
├── dist/
├── backend/
└── ...
```

---

## 📋 PASSOS PARA CORRIGIR:

### **Método Rápido (Mover Manualmente):**

1. **No cPanel File Manager:**
2. **Entre em `/repositories/ainfotech/dist/`**
3. **Selecione TODOS os arquivos** (CTRL+A ou "Selecionar tudo")
4. **Clique em "Mover"**
5. **Destino:** `public_html/`
6. **Mover arquivo(s)**

7. **Entre em `/repositories/ainfotech/backend/`**
8. **Selecione TODOS os arquivos**
9. **Clique em "Mover"**
10. **Destino:** `public_html/api/`
11. **Mover arquivo(s)**

12. **Verificar:**
    - `public_html/` tem os arquivos do frontend?
    - `public_html/api/` tem os arquivos do backend?

---

## ⚠️ IMPORTANTE:

### **Se usar o script .cpanel.yml:**

O script precisa ser ajustado para funcionar com o Git clonado em `repositories/`.

**OU** reconfigurar Git para clonar direto em `public_html/`.

---

## 🔧 RECONFIGURAR GIT (Recomendado):

### **No cPanel:**

1. **Git Version Control**
2. **Delete o repositório atual** (opcional)
3. **Create Repository:**
   - **Repository URL:** `https://github.com/Ericsonaju/ainfotech.git`
   - **Repository Path:** `public_html` ← **MUDE!**
   - **Branch:** `main`
   - **Auto Deploy:** ✅
4. **Create**

5. **Ajustar script `.cpanel.yml`:**

O script atual espera `dist/` e `backend/` na raiz. Se o Git clonar em `public_html/`, precisa ajustar.

---

## ✅ SOLUÇÃO MAIS SIMPLES:

### **Mover Arquivos Manualmente Agora:**

1. **Mover `dist/` → `public_html/`**
2. **Mover `backend/` → `public_html/api/`**
3. **Criar `.env` em `public_html/api/`**
4. **Configurar Node.js app**
5. **Testar**

**Isso resolve imediatamente!** ✅

---

## 📋 CHECKLIST:

- [ ] Arquivos de `dist/` movidos para `public_html/`
- [ ] Arquivos de `backend/` movidos para `public_html/api/`
- [ ] `.env` criado em `public_html/api/`
- [ ] Permissões corrigidas (644/755)
- [ ] Node.js app configurado
- [ ] Site testado

---

## 🎯 RESUMO:

**Problema:** Arquivos em `/repositories/ainfotech/` (errado)  
**Solução:** Mover para `public_html/` (correto)

**Mova os arquivos agora e teste!** 🚀

