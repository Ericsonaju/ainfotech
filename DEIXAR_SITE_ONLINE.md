# 🌐 Deixar Site Online - Passo a Passo Final

## ✅ Git Configurado com Sucesso!

Agora vamos finalizar para deixar o site funcionando.

---

## 📋 PRÓXIMOS PASSOS:

### **PASSO 1: Verificar Estrutura Após Deploy**

1. **No cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/`**
3. **Verifique se tem:**
   - `index.html` ✅
   - `.htaccess` ✅
   - `assets/` ✅
   - `api/` ✅

4. **Entre em `public_html/api/`**
5. **Verifique se tem:**
   - `server.js` ✅
   - `package.json` ✅
   - `config/` ✅
   - `controllers/` ✅
   - `middleware/` ✅
   - `routes/` ✅

---

### **PASSO 2: Criar arquivo .env**

O `.env` NÃO foi enviado para o GitHub (por segurança).

1. **cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/api/`**
3. **Clique em "+ Arquivo"** (botão no topo)
4. **Nome:** `.env`
5. **Clique em "Criar novo arquivo"**
6. **Clique no `.env` para editar**
7. **Cole este conteúdo:**

```env
DB_HOST=localhost
DB_USER=ericso63_ainfotech_mysql
DB_PASSWORD=610386717Er@mysql
DB_NAME=ericso63_ainfotech
DB_PORT=3306

JWT_SECRET=685f8e6002a62c2c32cc21f61efb1fa9e202878db2f6686850671bd1e66271709e1174a24b3f4979ea3b34e9d95109eada6a2687a7f61a7d28c2ed606aa5ca38
JWT_EXPIRES_IN=7d

PORT=3001
NODE_ENV=production

CORS_ORIGIN=https://ainfotechinformatica.com.br
```

8. **⚠️ IMPORTANTE:** Verifique `DB_NAME` no cPanel > MySQL Databases
9. **Clique em "Salvar alterações"**

---

### **PASSO 3: Configurar Node.js App**

1. **No cPanel, procure por "Node.js Selector"** ou **"Node.js"**

2. **Clique em "Create Application"** ou **"Criar Aplicação"**

3. **Configure:**
   - **Node.js version:** 18.x ou superior (escolha a mais recente)
   - **Application root:** `api`
   - **Application URL:** `/api`
   - **Application startup file:** `server.js`
   - **Application mode:** Production
   - **NPM install:** ✅ **Marque esta opção!** (instala dependências)

4. **Clique em "Create"** ou **"Criar"**

5. **Aguarde:**
   - Instalação das dependências
   - Inicialização da aplicação

---

### **PASSO 4: Verificar se Está Rodando**

1. **No Node.js Selector:**
2. **Veja a lista de aplicações**
3. **Sua aplicação deve aparecer:**
   - **Status:** "Running" ou "Rodando" ✅
   - **URL:** `/api`

4. **Se não estiver rodando:**
   - Clique em **"Start"** ou **"Iniciar"**

---

### **PASSO 5: Testar API**

#### **No navegador, acesse:**

```
https://ainfotechinformatica.com.br/api/health
```

**Deve retornar:**
```json
{"status":"ok","timestamp":"2025-12-16T..."}
```

**Se retornar isso, a API está funcionando!** ✅

---

### **PASSO 6: Acessar o Site**

#### **No navegador, acesse:**

```
https://ainfotechinformatica.com.br
```

**OU**

```
https://www.ainfotechinformatica.com.br
```

**Deve carregar:**
- ✅ Página de login
- ✅ Interface do sistema
- ✅ Tudo funcionando!

---

### **PASSO 7: Testar Login**

1. **Acesse o site**
2. **Clique em "Sou Técnico"** ou **"Acesso Administrativo"**
3. **Email:** `admin@ainfotech.com`
4. **Senha:** (a que você configurou no banco de dados)

**Se fizer login, está tudo funcionando!** ✅

---

## 🎯 ONDE ACESSAR O SITE:

### **URL Principal:**
```
https://ainfotechinformatica.com.br
```

### **OU com www:**
```
https://www.ainfotechinformatica.com.br
```

### **API:**
```
https://ainfotechinformatica.com.br/api/health
```

---

## 📋 CHECKLIST FINAL:

- [ ] Estrutura verificada (`public_html/` e `public_html/api/`)
- [ ] `.env` criado e configurado
- [ ] Node.js app criado
- [ ] Dependências instaladas
- [ ] Aplicação rodando (status: Running)
- [ ] API testada (`/api/health` retorna OK)
- [ ] Site testado (carrega corretamente)
- [ ] Login testado (funciona)

---

## 🆘 Problemas Comuns:

### **Site não carrega (erro 404):**
- Verifique se `index.html` está em `public_html/`
- Verifique se `.htaccess` está em `public_html/`
- Verifique permissões (644 para arquivos)

### **API não responde:**
- Verifique se Node.js app está rodando
- Verifique logs no Node.js Selector
- Verifique se `.env` está correto

### **Erro de conexão MySQL:**
- Verifique credenciais no `.env`
- Teste no phpMyAdmin com as mesmas credenciais

### **Login não funciona:**
- Verifique se usuário admin existe no banco
- Verifique hash da senha
- Veja console do navegador (F12)

---

## 🎉 PRONTO!

Se tudo estiver funcionando:

- ✅ **Site:** https://ainfotechinformatica.com.br
- ✅ **API:** https://ainfotechinformatica.com.br/api/health
- ✅ **Login:** Funcionando
- ✅ **Tudo online!** 🚀

---

## 📝 Resumo Rápido:

1. ✅ Verificar estrutura
2. ✅ Criar `.env`
3. ✅ Configurar Node.js app
4. ✅ Testar API
5. ✅ Acessar site
6. ✅ Testar login

**Seu site está online!** 🎉

---

## 🔄 Atualizações Futuras:

Quando quiser atualizar:

1. **No seu computador:**
   ```bash
   npm run build
   git add .
   git commit -m "Atualização"
   git push
   ```

2. **No HostGator:**
   - Se Auto Deploy estiver ativo, atualiza automaticamente!
   - OU: cPanel > Git > Pull or Deploy

**Muito fácil!** 🚀

