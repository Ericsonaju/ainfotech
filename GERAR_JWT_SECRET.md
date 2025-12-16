# 🔑 COMO GERAR JWT_SECRET - GUIA RÁPIDO

## ❓ O QUE É JWT_SECRET?

A `JWT_SECRET` é uma **chave secreta** que **VOCÊ MESMO** deve gerar.

**NÃO existe um lugar para "pegar" essa chave** - você precisa **criar uma senha forte e aleatória**.

---

## ✅ MÉTODO 1: Gerador Online (MAIS FÁCIL)

### **Passo a Passo:**

1. **Acesse o site:**
   - https://randomkeygen.com/
   - Ou: https://www.lastpass.com/pt/features/password-generator

2. **Gerar chave:**
   - No randomkeygen.com: Use **"CodeIgniter Encryption Keys"**
   - Copie uma chave de **64 caracteres**
   - Exemplo: `aB3dE5fG7hI9jK1lM3nO5pQ7rS9tU1vW3xY5zA7bC9dE1fG3hI5jK7lM9nO1pQ3`

3. **Cole no `.env`:**
   ```
   JWT_SECRET=aB3dE5fG7hI9jK1lM3nO5pQ7rS9tU1vW3xY5zA7bC9dE1fG3hI5jK7lM9nO1pQ3
   ```

---

## ✅ MÉTODO 2: Criar Manualmente

### **Regras:**
- Mínimo **32 caracteres** (recomendado: **64 caracteres**)
- Use letras (maiúsculas e minúsculas), números e símbolos
- Não use espaços

### **Exemplo:**
```
JWT_SECRET=A1nF0t3ch_2024_S3cr3t_K3y_JWT_!@#$%^&*()_+_Secure_Key_123456789
```

---

## ✅ MÉTODO 3: Usar Node.js (Local)

### **Se você tiver Node.js instalado localmente:**

1. **Abra o terminal:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

2. **Copie a chave gerada**

3. **Cole no `.env`:**
   ```
   JWT_SECRET=[chave gerada]
   ```

---

## ✅ MÉTODO 4: Usar PowerShell (Windows)

### **No PowerShell:**

```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 64 | % {[char]$_})
```

Isso gera uma chave de 64 caracteres aleatórios.

---

## 🎯 RECOMENDAÇÃO:

**Use o MÉTODO 1** (randomkeygen.com) - é o mais fácil e rápido!

---

## ✅ SEU `.env` CORRIGIDO:

```env
# ============================================
# AINFOTECH - CONFIGURAÇÃO HOSTGATOR
# ============================================

# Banco de Dados MySQL
DB_HOST=localhost
DB_USER=ericso63_ainfotech_mysql
DB_PASSWORD=610386717Er@_mysql
DB_NAME=ericso63_ainfotech

# JWT Secret (gere uma senha forte)
JWT_SECRET=[COLE_AQUI_A_CHAVE_GERADA]

# CORS (URL do seu site)
CORS_ORIGIN=https://ainfotechinformatica.com.br

# Porta (HostGator usa porta automática)
PORT=3000
```

**Substitua `[COLE_AQUI_A_CHAVE_GERADA]` pela chave que você gerar!**

---

## ⚠️ IMPORTANTE:

1. **Guarde essa chave em local seguro**
2. **NÃO compartilhe publicamente**
3. **Use a mesma chave sempre** (não mude depois de criar)

---

## 🎯 PRÓXIMO PASSO:

1. **Gerar a chave** (use randomkeygen.com)
2. **Atualizar o `.env`** com a chave gerada
3. **Salvar o arquivo**
4. **Configurar Node.js App no cPanel**

---

## 📋 EXEMPLO COMPLETO:

```env
JWT_SECRET=aB3dE5fG7hI9jK1lM3nO5pQ7rS9tU1vW3xY5zA7bC9dE1fG3hI5jK7lM9nO1pQ3
```

**Isso é apenas um exemplo - gere a sua própria chave única!**

