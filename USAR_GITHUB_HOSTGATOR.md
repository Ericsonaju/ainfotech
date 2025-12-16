# 🚀 Usar GitHub com HostGator - Solução Mais Fácil!

## ✅ SIM! HostGator tem Git integrado!

Isso é MUITO mais fácil do que fazer upload manual! 🎉

---

## 🎯 VANTAGENS:

- ✅ **Automático:** Push no GitHub = Deploy automático
- ✅ **Organizado:** Estrutura correta sempre
- ✅ **Fácil:** Sem precisar fazer upload manual
- ✅ **Versionamento:** Controle de versões
- ✅ **Rápido:** Atualizações instantâneas

---

## 📋 PASSO A PASSO:

### **PASSO 1: Preparar Projeto Local**

1. **No seu computador, certifique-se que tem:**
   - ✅ Build do frontend feito (`dist/`)
   - ✅ Backend pronto (`backend/`)
   - ✅ `.env` configurado (mas NÃO commitar no GitHub!)

2. **Criar `.gitignore`** (se não tiver):

```gitignore
# Dependências
node_modules/
**/node_modules/

# Build (não commitar - gerar no servidor)
dist/
build/

# Arquivos de ambiente
.env
.env.local
.env.*.local

# Logs
*.log

# Sistema
.DS_Store
.vscode/
.idea/

# Arquivos temporários
*.tmp
*.temp
```

---

### **PASSO 2: Criar Repositório no GitHub**

1. **Acesse:** https://github.com
2. **Clique em "New repository"**
3. **Configure:**
   - **Name:** `ainfotech-site`
   - **Visibility:** Private (recomendado)
   - **NÃO marque:** "Add README" (se já tiver arquivos)
4. **Clique em "Create repository"**

---

### **PASSO 3: Fazer Push do Código**

No seu computador:

```bash
# Se ainda não inicializou Git
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "Initial commit - AINFOTECH site"

# Adicionar remote do GitHub
git remote add origin https://github.com/SEU_USUARIO/ainfotech-site.git

# Push
git push -u origin main
```

---

### **PASSO 4: Configurar Git no HostGator**

#### **No cPanel:**

1. **Procure por "Git™ Version Control"**
2. **Clique em "Create"**
3. **Configure:**
   - **Repository Name:** `ainfotech-site`
   - **Repository URL:** `https://github.com/SEU_USUARIO/ainfotech-site.git`
   - **Repository Path:** `public_html`
   - **Branch:** `main` (ou `master`)
   - **Auto Deploy:** ✅ Marque esta opção
4. **Clique em "Create"**

---

### **PASSO 5: Configurar Deploy Automático**

#### **Opção A: Auto Deploy (Recomendado)**

1. **No Git do cPanel:**
   - Marque "Auto Deploy"
   - Toda vez que fizer push no GitHub, atualiza automaticamente!

#### **Opção B: Deploy Manual**

1. **No Git do cPanel:**
   - Clique em "Pull or Deploy"
   - Atualiza quando quiser

---

## ⚙️ CONFIGURAR ESTRUTURA CORRETA:

### **Problema:**
O Git vai clonar TUDO do repositório, mas você precisa:
- Frontend em `public_html/`
- Backend em `public_html/api/`

### **Solução: Usar Script de Deploy**

Crie um arquivo `.cpanel.yml` na raiz do projeto:

```yaml
deployment:
  tasks:
    - export DEPLOYPATH=/home1/ericso63/public_html
    - /bin/cp -R dist/* $DEPLOYPATH/
    - /bin/cp -R backend/* $DEPLOYPATH/api/
```

**OU** configure o Git para clonar em pastas específicas.

---

## 🔧 CONFIGURAÇÃO ALTERNATIVA (Mais Simples):

### **Estrutura no GitHub:**

```
projeto/
├── frontend/          ← Build do frontend (dist/)
│   ├── index.html
│   ├── .htaccess
│   └── assets/
│
├── backend/           ← Backend API
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── .cpanel.yml        ← Script de deploy
```

### **Script de Deploy (.cpanel.yml):**

```yaml
deployment:
  tasks:
    - /bin/cp -R frontend/* /home1/ericso63/public_html/
    - /bin/cp -R backend/* /home1/ericso63/public_html/api/
    - /bin/chmod 644 /home1/ericso63/public_html/.htaccess
    - /bin/chmod 755 /home1/ericso63/public_html/api/
```

---

## 📝 ESTRUTURA RECOMENDADA NO GITHUB:

```
ainfotech-site/
├── .gitignore
├── .cpanel.yml          ← Script de deploy
│
├── frontend/            ← Build do frontend
│   ├── index.html
│   ├── .htaccess
│   └── assets/
│
├── backend/             ← Backend API
│   ├── server.js
│   ├── package.json
│   ├── .env.example     ← Template (sem senhas)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   └── routes/
│
└── database/
    └── mysql_schema_auto.sql
```

---

## ⚠️ IMPORTANTE:

### **NÃO commitar no GitHub:**
- ❌ `.env` (tem senhas!)
- ❌ `node_modules/`
- ❌ `dist/` (pode gerar no servidor)

### **Criar `.env` no servidor:**
1. **Após fazer deploy:**
2. **No cPanel > Gerenciador de arquivos**
3. **Entre em `public_html/api/`**
4. **Crie `.env` manualmente**
5. **Cole as configurações**

---

## 🚀 WORKFLOW COMPLETO:

### **1. Desenvolvimento Local:**
```bash
# Fazer alterações
npm run build

# Commit
git add .
git commit -m "Atualização"

# Push
git push
```

### **2. Deploy Automático:**
- ✅ GitHub recebe push
- ✅ HostGator detecta (se Auto Deploy)
- ✅ Executa script de deploy
- ✅ Site atualizado!

### **3. Ou Deploy Manual:**
- ✅ No cPanel > Git
- ✅ Clique em "Pull or Deploy"
- ✅ Site atualizado!

---

## 🎯 VANTAGENS DESTA ABORDAGEM:

1. ✅ **Estrutura sempre correta** (definida no script)
2. ✅ **Sem upload manual** (automático)
3. ✅ **Versionamento** (histórico de mudanças)
4. ✅ **Fácil atualizar** (só fazer push)
5. ✅ **Backup automático** (no GitHub)

---

## 📋 CHECKLIST:

- [ ] Repositório criado no GitHub
- [ ] Código enviado para GitHub
- [ ] Git configurado no HostGator
- [ ] Script de deploy criado (.cpanel.yml)
- [ ] Auto Deploy ativado
- [ ] `.env` criado manualmente no servidor
- [ ] Testado deploy

---

## 🆘 Se Tiver Problemas:

### **Git não aparece no cPanel:**
- Verifique se seu plano tem Git habilitado
- Plano Turbo geralmente tem

### **Deploy não funciona:**
- Verifique permissões das pastas
- Verifique caminhos no script
- Veja logs no cPanel

### **Estrutura errada:**
- Ajuste o script `.cpanel.yml`
- Teste localmente primeiro

---

## ✅ RESUMO:

1. **Criar repositório no GitHub**
2. **Fazer push do código**
3. **Configurar Git no HostGator**
4. **Criar script de deploy**
5. **Ativar Auto Deploy**
6. **Criar `.env` manualmente no servidor**
7. **Pronto!** 🎉

---

## 🎉 Vantagem Final:

**Com GitHub:**
- ✅ Push = Deploy automático
- ✅ Sem FTP
- ✅ Sem upload manual
- ✅ Estrutura sempre correta
- ✅ Fácil de atualizar

**Muito mais fácil!** 🚀

