# 🚀 Configurar Git no HostGator - Passo a Passo

## ✅ Código já está no GitHub!

**Repositório:** https://github.com/Ericsonaju/ainfotech.git

---

## 📋 PRÓXIMOS PASSOS NO HOSTGATOR:

### **PASSO 1: Acessar Git no cPanel**

1. **Acesse o cPanel do HostGator**
2. **Procure por "Git™ Version Control"** ou **"Git"**
3. **Clique para abrir**

---

### **PASSO 2: Criar Repositório Git**

1. **Clique em "Create"** ou **"Criar"**

2. **Preencha os campos:**
   - **Repository Name:** `ainfotech-site`
   - **Repository URL:** `https://github.com/Ericsonaju/ainfotech.git`
   - **Repository Path:** `public_html`
   - **Branch:** `main`
   - **Auto Deploy:** ✅ **Marque esta opção!**
   - **Update Periodically:** ✅ Marque também (opcional)

3. **Clique em "Create"** ou **"Criar"**

---

### **PASSO 3: Configurar Script de Deploy**

O arquivo `.cpanel.yml` já está no repositório e vai:
- ✅ Copiar `dist/` para `public_html/`
- ✅ Copiar `backend/` para `public_html/api/`
- ✅ Ajustar permissões

**O script já está configurado!** 🎉

---

### **PASSO 4: Fazer Primeiro Deploy**

1. **Após criar o repositório Git:**
2. **Clique em "Pull or Deploy"** ou **"Pull"**
3. **Aguarde o deploy terminar**

---

### **PASSO 5: Verificar Estrutura**

Após o deploy, verifique:

1. **No cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/`**
3. **Deve ter:**
   - `index.html`
   - `.htaccess`
   - `assets/`
   - `api/`

4. **Entre em `public_html/api/`**
5. **Deve ter:**
   - `server.js`
   - `package.json`
   - `config/`
   - `controllers/`
   - `middleware/`
   - `routes/`

---

### **PASSO 6: Criar arquivo .env**

O `.env` NÃO foi enviado para o GitHub (por segurança).

1. **No cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/api/`**
3. **Clique em "+ Arquivo"**
4. **Nome:** `.env`
5. **Clique em "Criar novo arquivo"**
6. **Clique no `.env` para editar**
7. **Cole o conteúdo:**

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

8. **⚠️ Verifique `DB_NAME`!** Confirme no cPanel se está correto.
9. **Salve**

---

### **PASSO 7: Instalar Dependências e Iniciar Node.js**

1. **cPanel > Node.js Selector**
2. **Clique em "Create Application"**
3. **Configure:**
   - **Node.js version:** 18.x ou superior
   - **Application root:** `api`
   - **Application URL:** `/api`
   - **Application startup file:** `server.js`
   - **Application mode:** Production
   - **NPM install:** ✅ Marque esta opção
4. **Clique em "Create"**
5. **Aguarde instalar e iniciar**

---

### **PASSO 8: Testar**

1. **API:** `https://ainfotechinformatica.com.br/api/health`
   - Deve retornar: `{"status":"ok"}`

2. **Site:** `https://ainfotechinformatica.com.br`
   - Deve carregar a página

3. **Login:**
   - Email: `admin@ainfotech.com`
   - Senha: (a que você configurou)

---

## ✅ VANTAGENS DO GIT:

### **Atualizações Futuras:**

Quando quiser atualizar o site:

1. **No seu computador:**
   ```bash
   # Fazer alterações
   npm run build
   
   # Commit
   git add .
   git commit -m "Atualização"
   
   # Push
   git push
   ```

2. **No HostGator:**
   - Se Auto Deploy estiver ativo, atualiza automaticamente!
   - OU clique em "Pull or Deploy" no cPanel

---

## 📋 CHECKLIST:

- [ ] Git configurado no HostGator
- [ ] Repositório criado e conectado
- [ ] Auto Deploy ativado
- [ ] Primeiro deploy feito
- [ ] Estrutura verificada (`public_html/` e `public_html/api/`)
- [ ] `.env` criado manualmente
- [ ] Node.js app configurado
- [ ] Dependências instaladas
- [ ] API testada
- [ ] Site testado

---

## 🎉 Pronto!

Agora você tem:
- ✅ Código no GitHub
- ✅ Deploy automático configurado
- ✅ Estrutura sempre correta
- ✅ Fácil de atualizar

**Muito mais fácil que upload manual!** 🚀

---

## 🆘 Se Tiver Problemas:

### **Git não aparece no cPanel:**
- Verifique se seu plano tem Git habilitado
- Plano Turbo geralmente tem

### **Deploy não funciona:**
- Verifique se `.cpanel.yml` está no repositório
- Verifique permissões
- Veja logs no cPanel

### **Estrutura errada:**
- Verifique o script `.cpanel.yml`
- Ajuste os caminhos se necessário

---

## 📝 Próximos Passos:

1. ✅ Configurar Git no HostGator (agora!)
2. ✅ Fazer primeiro deploy
3. ✅ Criar `.env`
4. ✅ Configurar Node.js app
5. ✅ Testar tudo

**Vamos configurar no HostGator agora!** 🚀

