# 📁 Como Criar Pasta api/ Corretamente

## ❌ Erro Identificado:

Você tentou criar: `public_html/api/` (com caminho completo)

**Isso está ERRADO!** O sistema interpreta `/` como caractere inválido.

---

## ✅ SOLUÇÃO CORRETA:

### **Passo a Passo:**

1. **No cPanel File Manager:**
   - **Entre na pasta `public_html/`** (clique nela primeiro)

2. **Depois de entrar em `public_html/`:**
   - Você verá o conteúdo de `public_html/`
   - Deve ter: `dist/` (pasta)

3. **Criar pasta `api`:**
   - Clique em **"+ Pasta"** (botão no topo)
   - **Nome da nova pasta:** Digite apenas `api` (sem caminho!)
   - **NÃO digite:** `public_html/api/`
   - **Digite apenas:** `api`
   - Clique em **"Create New Folder"**

4. **Verificar:**
   - Agora você deve ver em `public_html/`:
     - `dist/`
     - `api/` ← Nova pasta criada!

---

## 🎯 RESUMO:

### **ERRADO:**
- Nome: `public_html/api/` ❌
- (Sistema não aceita `/` no nome)

### **CORRETO:**
1. **Entre em `public_html/`** primeiro
2. **Crie pasta com nome:** `api` ✅
3. **Resultado:** `public_html/api/` (criada automaticamente)

---

## 📋 DEPOIS DE CRIAR A PASTA:

1. **Entre na pasta `api/`** (que você acabou de criar)
2. **Mova os arquivos de `backend/`:**
   - Vá para `/repositories/ainfotech/backend/`
   - Selecione todos os arquivos
   - Mover para `public_html/api/`

---

## ✅ Estrutura Final:

```
public_html/
├── dist/              ← Já está aqui
└── api/               ← Crie esta pasta (nome: "api")
    ├── .env
    ├── server.js
    └── ...
```

---

## 🎯 Passo a Passo Visual:

1. **Clique em `public_html/`** (no menu lateral ou lista)
2. **Você está DENTRO de `public_html/`**
3. **Clique em "+ Pasta"**
4. **Nome:** `api` (apenas isso!)
5. **Create**
6. ✅ Pronto!

**A pasta será criada como `public_html/api/` automaticamente!**

