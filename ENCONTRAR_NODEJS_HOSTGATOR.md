# 🔍 COMO ENCONTRAR NODE.JS NO HOSTGATOR

## 📍 ONDE ENCONTRAR:

### **No cPanel:**

1. **Procure por "Node.js" na barra de busca:**
   - No topo do cPanel, há uma barra de pesquisa
   - Digite: `node.js` ou `nodejs`
   - Clique no resultado

2. **Ou procure nas seções:**
   - **"Software"** ou **"Software/Apps"**
   - **"Node.js Selector"** ou **"Node.js App"**
   - **"Setup Node.js App"**

3. **Nomes possíveis:**
   - `Node.js Selector`
   - `Node.js App`
   - `Setup Node.js App`
   - `Node.js Version Manager`

---

## 🎯 PASSO A PASSO VISUAL:

### **1. Entrar no cPanel:**
   - Acesse: `https://ainfotechinformatica.com.br:2083`
   - Faça login

### **2. Procurar Node.js:**
   - **Opção A:** Use a barra de busca (topo) → Digite `node.js`
   - **Opção B:** Vá em **"Software"** → Procure por **"Node.js Selector"**

### **3. Abrir Node.js Selector:**
   - Clique em **"Node.js Selector"** ou **"Node.js App"**

---

## ⚠️ SE NÃO ENCONTRAR:

### **Possíveis motivos:**

1. **Plano não inclui Node.js:**
   - Verifique se seu plano (Plano Turbo) inclui Node.js
   - Entre em contato com o suporte HostGator

2. **Node.js não está habilitado:**
   - Alguns planos precisam ativar manualmente
   - Entre em contato com o suporte

3. **Interface diferente:**
   - Alguns cPanels têm nomes diferentes
   - Procure por **"Setup Node.js App"** ou **"Node.js Version Manager"**

---

## ✅ DEPOIS DE ENCONTRAR:

### **Configurar a Aplicação:**

1. **Criar Nova Aplicação:**
   - Clique em **"Create Application"** ou **"Criar Aplicação"**

2. **Preencher os campos:**
   - **Node.js Version:** Escolha a versão mais recente (ex: `20.x` ou `18.x`)
   - **Application Mode:** `Production`
   - **Application Root:** `/home/ericso63/public_html/api`
   - **Application URL:** `/api` (ou deixe vazio)
   - **Application Startup File:** `server.js`
   - **Application Port:** Deixe vazio (HostGator define automaticamente)

3. **Salvar:**
   - Clique em **"Create"** ou **"Criar"**

4. **Instalar Dependências:**
   - Após criar, clique em **"Run NPM Install"** ou **"npm install"**
   - Aguarde instalar os pacotes

5. **Iniciar Aplicação:**
   - Clique em **"Restart App"** ou **"Iniciar"**

---

## 📋 CONFIGURAÇÃO COMPLETA:

### **Campos do Node.js App:**

```
Node.js Version: 20.x (ou 18.x)
Application Mode: Production
Application Root: /home/ericso63/public_html/api
Application URL: /api
Application Startup File: server.js
Application Port: (deixe vazio)
```

---

## 🎯 PRÓXIMOS PASSOS:

1. ✅ Encontrar Node.js Selector no cPanel
2. ✅ Criar aplicação Node.js
3. ✅ Configurar caminhos
4. ✅ Executar `npm install`
5. ✅ Iniciar aplicação
6. ✅ Testar o site

---

## ⚠️ DICA:

Se não encontrar, **entre em contato com o suporte HostGator** e pergunte:
- "Como acesso o Node.js Selector no meu cPanel?"
- "Meu plano inclui Node.js?"

---

## 📞 ALTERNATIVA:

Se o Node.js não estiver disponível, você pode:
- Usar **PHP** como backend (precisa refatorar)
- Ou **upgrade do plano** para incluir Node.js

---

## 🎯 RESUMO:

1. **Procure por "Node.js" na barra de busca do cPanel**
2. **Ou vá em "Software" → "Node.js Selector"**
3. **Crie uma nova aplicação**
4. **Configure os caminhos**
5. **Execute `npm install`**
6. **Inicie a aplicação**

Guia completo salvo em: `ENCONTRAR_NODEJS_HOSTGATOR.md`

