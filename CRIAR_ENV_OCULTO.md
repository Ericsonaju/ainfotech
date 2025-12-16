# 🔍 ARQUIVO .env NÃO APARECE - SOLUÇÃO

## ❓ PROBLEMA:

Arquivos que começam com ponto (`.`) são **arquivos ocultos** no Linux/Unix.

O cPanel File Manager pode **ocultar** esses arquivos por padrão.

---

## ✅ SOLUÇÃO 1: Mostrar Arquivos Ocultos

### **Passo a Passo:**

1. **No cPanel File Manager:**
   - Procure por **"Configurações"** ou **"Settings"** (ícone de engrenagem)
   - Clique para abrir

2. **Ativar exibição de arquivos ocultos:**
   - Procure por **"Show Hidden Files"** ou **"Mostrar arquivos ocultos"**
   - Marque a opção ✅
   - Clique em **"Salvar"** ou **"Save"**

3. **Recarregar:**
   - Clique em **"Recarregar"** ou **"Reload"**
   - Agora o arquivo `.env` deve aparecer!

---

## ✅ SOLUÇÃO 2: Criar com Nome Diferente e Renomear

### **Passo a Passo:**

1. **Criar arquivo temporário:**
   - Clique em **"+ Arquivo"**
   - Nome: `env.txt` (ou `config.env`)
   - Clique em **"Criar Novo Arquivo"**

2. **Editar o arquivo:**
   - Clique em `env.txt`
   - Clique em **"Editar"**
   - Cole o conteúdo do `.env`:

```env
# ============================================
# AINFOTECH - CONFIGURAÇÃO HOSTGATOR
# ============================================

# Banco de Dados MySQL
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=seu_banco_mysql

# JWT Secret (gere uma senha forte)
JWT_SECRET=sua_chave_secreta_jwt_aqui

# CORS (URL do seu site)
CORS_ORIGIN=https://ainfotechinformatica.com.br

# Porta (HostGator usa porta automática)
PORT=3000
```

3. **Salvar:**
   - Clique em **"Salvar alterações"**

4. **Renomear:**
   - Clique em `env.txt`
   - Clique em **"Renomear"**
   - Novo nome: `.env`
   - Clique em **"Renomear arquivo"**

5. **Verificar:**
   - O arquivo pode não aparecer (é oculto), mas **está lá!**

---

## ✅ SOLUÇÃO 3: Verificar se o Arquivo Existe (Via Terminal SSH)

### **Se você tiver acesso SSH:**

```bash
cd public_html/api
ls -la
```

Isso mostrará **todos** os arquivos, incluindo ocultos.

---

## ✅ SOLUÇÃO 4: Usar FTP (FileZilla)

### **Passo a Passo:**

1. **Conectar via FTP:**
   - Host: `ftp.ainfotechinformatica.com.br`
   - Usuário: `ainfotech@ainfotechinformatica.com.br`
   - Senha: (sua senha FTP)
   - Porta: `21`

2. **Navegar até:**
   - `public_html/api/`

3. **Criar arquivo:**
   - Clique com botão direito na pasta `api/`
   - **"Criar arquivo"** ou **"Create file"**
   - Nome: `.env`

4. **Editar:**
   - Clique duas vezes no arquivo `.env`
   - Cole o conteúdo
   - Salvar

5. **Verificar:**
   - O arquivo aparecerá no FileZilla (mesmo sendo oculto)

---

## 🎯 RECOMENDAÇÃO:

**Use a SOLUÇÃO 2** (criar `env.txt` e renomear) - é a mais fácil e rápida!

---

## ✅ VERIFICAR SE O ARQUIVO FOI CRIADO:

### **Mesmo não aparecendo, você pode verificar:**

1. **Tentar editar:**
   - No cPanel, tente digitar o caminho manualmente na barra de pesquisa
   - Ou tente criar novamente (se disser que já existe, está criado!)

2. **Testar no Node.js:**
   - Se o Node.js app conseguir ler o `.env`, significa que está lá!

---

## 📋 CONTEÚDO DO `.env` (Cole isso):

```env
# ============================================
# AINFOTECH - CONFIGURAÇÃO HOSTGATOR
# ============================================

# Banco de Dados MySQL
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=seu_banco_mysql

# JWT Secret (gere uma senha forte)
JWT_SECRET=sua_chave_secreta_jwt_aqui

# CORS (URL do seu site)
CORS_ORIGIN=https://ainfotechinformatica.com.br

# Porta (HostGator usa porta automática)
PORT=3000
```

**Lembre-se de substituir os valores!**

---

## 🎯 PRÓXIMO PASSO:

Depois de criar o `.env` (mesmo que não apareça), continue com:
1. Configurar Node.js App no cPanel
2. Testar o site

**O arquivo está lá, mesmo que não apareça!** ✅

