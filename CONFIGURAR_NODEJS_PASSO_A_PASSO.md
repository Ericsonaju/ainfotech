# 🚀 CONFIGURAR NODE.JS NO HOSTGATOR - PASSO A PASSO COMPLETO

## 📍 PASSO 1: ENCONTRAR NODE.JS SELECTOR

### **No cPanel:**

1. **Barra de Busca (Mais Fácil):**
   - No topo do cPanel, há uma barra de pesquisa
   - Digite: `node.js` ou `nodejs`
   - Clique no resultado **"Node.js Selector"**

2. **Ou navegue manualmente:**
   - Vá em **"Software"** (seção no cPanel)
   - Procure por **"Node.js Selector"** ou **"Node.js App"**
   - Clique para abrir

---

## 📍 PASSO 2: CRIAR NOVA APLICAÇÃO

### **Após abrir o Node.js Selector:**

1. **Clique em "Create Application" ou "Criar Aplicação"**
   - Botão geralmente no topo ou no centro da tela

2. **Você verá um formulário com os seguintes campos:**

---

## 📋 PASSO 3: PREENCHER O FORMULÁRIO

### **Campos a preencher:**

#### **1. Node.js Version:**
   - **Escolha:** Versão mais recente disponível
   - **Recomendado:** `20.x` ou `18.x`
   - **Exemplo:** `20.11.0` ou `18.19.0`

#### **2. Application Mode:**
   - **Escolha:** `Production`
   - **NÃO escolha:** `Development`

#### **3. Application Root:**
   - **Digite:** `/home/ericso63/public_html/api`
   - **⚠️ IMPORTANTE:** Substitua `ericso63` pelo seu usuário se for diferente
   - **Como descobrir:** Olhe o caminho no File Manager (geralmente `/home1/` ou `/home/`)

#### **4. Application URL:**
   - **Opção 1:** Deixe vazio (usa a raiz)
   - **Opção 2:** Digite `/api` (se quiser acessar via `/api`)

#### **5. Application Startup File:**
   - **Digite:** `server.js`
   - **Este é o arquivo principal do backend**

#### **6. Application Port:**
   - **DEIXE VAZIO** ✅
   - **HostGator define automaticamente**

#### **7. Load App File:**
   - **Deixe como está** (geralmente já vem preenchido)

---

## 📋 PASSO 4: SALVAR E INSTALAR

### **Após preencher:**

1. **Clique em "Create" ou "Criar"**
   - Aguarde alguns segundos

2. **Após criar, você verá a aplicação listada**

3. **Clique na aplicação para abrir**

4. **Execute `npm install`:**
   - Procure por botão **"Run NPM Install"** ou **"npm install"**
   - Clique e aguarde instalar os pacotes
   - Pode levar alguns minutos

5. **Iniciar Aplicação:**
   - Procure por botão **"Restart App"** ou **"Start"**
   - Clique para iniciar

---

## 📋 PASSO 5: VERIFICAR LOGS

### **Se houver erros:**

1. **Clique na aplicação**
2. **Procure por "Logs" ou "View Logs"**
3. **Verifique os erros**

### **Erros comuns:**

#### **Erro: "Cannot find module"**
   - **Solução:** Execute `npm install` novamente

#### **Erro: "Cannot connect to database"**
   - **Solução:** Verifique o arquivo `.env` (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)

#### **Erro: "Port already in use"**
   - **Solução:** Deixe o campo "Port" vazio no cPanel

---

## ✅ CHECKLIST FINAL:

- [ ] Node.js Selector encontrado no cPanel
- [ ] Nova aplicação criada
- [ ] Application Root: `/home/ericso63/public_html/api`
- [ ] Application Startup File: `server.js`
- [ ] `npm install` executado
- [ ] Aplicação iniciada/restartada
- [ ] Logs verificados (sem erros)

---

## 🎯 EXEMPLO DE CONFIGURAÇÃO:

```
Node.js Version: 20.11.0
Application Mode: Production
Application Root: /home/ericso63/public_html/api
Application URL: /api
Application Startup File: server.js
Application Port: (vazio)
```

---

## ⚠️ IMPORTANTE:

### **Verificar caminho correto:**

1. **No File Manager:**
   - Entre em `public_html/api/`
   - Veja o caminho completo na barra de endereço
   - Use esse caminho no "Application Root"

2. **Exemplos de caminhos:**
   - `/home/ericso63/public_html/api`
   - `/home1/ericso63/public_html/api`
   - Verifique qual é o seu!

---

## 🎯 PRÓXIMOS PASSOS:

1. ✅ Encontrar Node.js Selector
2. ✅ Criar aplicação
3. ✅ Configurar caminhos
4. ✅ Executar `npm install`
5. ✅ Iniciar aplicação
6. ✅ Testar site: `https://ainfotechinformatica.com.br`

---

## 📞 SE NÃO ENCONTRAR:

**Entre em contato com o suporte HostGator:**
- Pergunte: "Como acesso o Node.js Selector no meu cPanel?"
- Ou: "Meu plano Plano Turbo inclui Node.js?"

---

## 🎯 RESUMO RÁPIDO:

1. **cPanel → Buscar "node.js"**
2. **Criar aplicação**
3. **Root:** `/home/ericso63/public_html/api`
4. **Startup:** `server.js`
5. **npm install**
6. **Iniciar**
7. **Testar**

Guia completo salvo em: `CONFIGURAR_NODEJS_PASSO_A_PASSO.md`

