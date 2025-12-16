# 🚀 Próximos Passos - Após Upload

## ⚠️ IMPORTANTE: Arquivo .env no Lugar Errado!

Vejo que o `.env` foi enviado para `/public_html/`, mas ele deve estar em `/public_html/api/`!

---

## 🔧 CORRIGIR: Mover .env para o Lugar Correto

### **No FileZilla:**

1. **Lado Direito (Servidor):**
   - Você está em `/public_html/`
   - Você vê o arquivo `.env` lá

2. **Mover o arquivo:**
   - **Clique com botão direito no `.env`**
   - **Selecione "Renomear" ou "Mover"**
   - **OU arraste o arquivo para a pasta `api/`**
   - **Destino:** `/public_html/api/.env`

3. **Verificar:**
   - Entre na pasta `api/`
   - Confirme que o `.env` está lá

### **OU no cPanel:**

1. **cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/`**
3. **Clique no arquivo `.env`**
4. **Clique em "Mover"**
5. **Destino:** `public_html/api/`
6. **Clique em "Mover arquivo(s)"**

---

## ✅ PRÓXIMOS PASSOS:

### **PASSO 1: Verificar Estrutura de Pastas**

Certifique-se que está assim:

```
public_html/
├── index.html          ✅
├── .htaccess          ✅
├── assets/            ✅
└── api/               ✅
    ├── server.js      ✅
    ├── package.json   ✅
    ├── .env           ✅ (mover para cá!)
    ├── config/
    ├── controllers/
    ├── middleware/
    └── routes/
```

---

### **PASSO 2: Instalar Dependências e Configurar Node.js**

#### **No cPanel:**

1. **Procure por "Node.js Selector"** ou **"Node.js"**

2. **Clique em "Create Application"** ou **"Criar Aplicação"**

3. **Configure:**
   - **Node.js version:** 18.x ou superior (escolha a mais recente)
   - **Application root:** `api`
   - **Application URL:** `/api`
   - **Application startup file:** `server.js`
   - **Application mode:** Production
   - **NPM install:** ✅ Marque esta opção (instala dependências automaticamente)

4. **Clique em "Create"** ou **"Criar"**

5. **Aguarde:**
   - Instalação das dependências
   - Inicialização da aplicação

---

### **PASSO 3: Verificar se Está Rodando**

#### **No Node.js Selector:**

1. **Veja a lista de aplicações**
2. **Sua aplicação deve aparecer:**
   - Status: "Running" ou "Rodando"
   - URL: `/api`

3. **Se não estiver rodando:**
   - Clique em "Start" ou "Iniciar"

---

### **PASSO 4: Testar API**

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

### **PASSO 5: Testar Frontend**

#### **No navegador, acesse:**

```
https://ainfotechinformatica.com.br
```

**Deve carregar:**
- Página de login
- Interface do sistema

---

### **PASSO 6: Testar Login**

1. **Acesse o site**
2. **Clique em "Sou Técnico"** ou "Acesso Administrativo"
3. **Email:** `admin@ainfotech.com`
4. **Senha:** (a que você configurou no banco)

**Se fizer login, está tudo funcionando!** ✅

---

## 🆘 Problemas Comuns:

### **API não responde (erro 404 ou 500):**

1. **Verifique se Node.js app está rodando:**
   - Node.js Selector > Veja status
   - Deve estar "Running"

2. **Verifique logs:**
   - Node.js Selector > Clique na aplicação
   - Veja "Logs" ou "View Logs"
   - Procure por erros

3. **Verifique .env:**
   - Confirme que está em `public_html/api/`
   - Confirme que `DB_NAME` está correto
   - Confirme que todas as variáveis estão preenchidas

### **Erro de conexão MySQL:**

1. **Verifique credenciais no .env:**
   - `DB_USER` está correto?
   - `DB_PASSWORD` está correto?
   - `DB_NAME` está correto?

2. **Teste no phpMyAdmin:**
   - Tente fazer login com as mesmas credenciais
   - Se não conectar, as credenciais estão erradas

### **Frontend não carrega:**

1. **Verifique se `.htaccess` foi enviado:**
   - Deve estar em `public_html/`
   - É um arquivo oculto (começa com ponto)

2. **Verifique permissões:**
   - Arquivos: 644
   - Pastas: 755

---

## 📋 Checklist Final:

- [ ] `.env` movido para `public_html/api/`
- [ ] Node.js app criado no cPanel
- [ ] Dependências instaladas
- [ ] Aplicação rodando (status: Running)
- [ ] API testada (`/api/health` retorna OK)
- [ ] Frontend testado (site carrega)
- [ ] Login testado (funciona)

---

## 🎉 Pronto!

Se tudo estiver funcionando:
- ✅ Site no ar
- ✅ API funcionando
- ✅ Banco conectado
- ✅ Login funcionando

**Seu sistema está completo e operacional!** 🚀

---

## 📞 Se Precisar de Ajuda:

1. **Verifique os logs do Node.js** (Node.js Selector > Logs)
2. **Verifique console do navegador** (F12 > Console)
3. **Teste cada endpoint da API**
4. **Confirme credenciais do banco**

