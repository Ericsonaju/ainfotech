# 📁 Estrutura de Pastas - Onde Colocar os Arquivos

## 🔍 O que você está vendo:

```
ainfotechinformatica.com.br/
├── ainfotech/          ← Pasta da conta FTP (pode ignorar)
│   └── public_html/    ← NÃO use esta!
├── public_html/        ← ✅ USE ESTA! (a principal)
├── etc/
├── mail/
├── public_ftp/
├── ssl/
└── tmp/
```

---

## ✅ ESTRUTURA CORRETA:

### **Onde colocar os arquivos:**

```
ainfotechinformatica.com.br/
└── public_html/        ← ✅ AQUI!
    ├── index.html
    ├── .htaccess
    ├── assets/
    └── api/            ← ✅ AQUI também!
        ├── server.js
        ├── package.json
        ├── .env
        └── ...
```

---

## 🎯 O QUE FAZER:

### **1. NÃO precisa deletar nada!**
- As pastas `ainfotech`, `etc`, `mail`, etc. são do sistema
- Deixe tudo como está
- Só use a pasta `public_html/` principal

### **2. Use a pasta `public_html/` PRINCIPAL:**
- **NÃO use:** `ainfotech/public_html/`
- **USE:** `public_html/` (a que está no mesmo nível de `ainfotech`)

### **3. Passo a passo:**

#### **No FileZilla ou cPanel:**

1. **Navegue até:**
   ```
   /home1/ericso63/ainfotechinformatica.com.br/public_html/
   ```
   (A pasta `public_html/` principal, não a que está dentro de `ainfotech`)

2. **Faça upload dos arquivos de `dist/` aqui:**
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   └── assets/
   ```

3. **Crie pasta `api` dentro de `public_html/`:**
   ```
   public_html/api/
   ```

4. **Faça upload dos arquivos de `backend/` aqui:**
   ```
   public_html/api/
   ├── server.js
   ├── package.json
   └── ...
   ```

---

## ⚠️ IMPORTANTE:

### **NÃO use:**
- ❌ `ainfotech/public_html/` (pasta da conta FTP)
- ❌ `ainfotech/` (pasta da conta FTP)

### **USE:**
- ✅ `public_html/` (pasta principal do site)
- ✅ `public_html/api/` (pasta da API)

---

## 📋 Resumo:

1. **Deixe todas as pastas como estão** (não delete nada)
2. **Use apenas `public_html/` principal** (não a que está dentro de `ainfotech`)
3. **Faça upload normalmente** seguindo o guia
4. **Tudo vai funcionar!** ✅

---

## 🔍 Como identificar a pasta correta:

### **No cPanel File Manager:**

1. **Clique em `ainfotechinformatica.com.br`** (pasta principal)
2. **Você verá várias pastas:**
   - `ainfotech/` ← Ignore esta
   - `public_html/` ← ✅ **USE ESTA!**
   - `etc/`, `mail/`, etc. ← Ignore estas

3. **Entre em `public_html/`**
4. **Faça upload dos arquivos aqui**

---

## ✅ Estrutura Final Correta:

```
/home1/ericso63/ainfotechinformatica.com.br/
├── ainfotech/              ← Ignore (pasta FTP)
├── public_html/            ← ✅ AQUI!
│   ├── index.html
│   ├── .htaccess
│   ├── assets/
│   └── api/                ← ✅ AQUI!
│       ├── server.js
│       ├── package.json
│       ├── .env
│       └── ...
├── etc/                    ← Ignore
├── mail/                   ← Ignore
└── ...
```

---

## 🎯 Conclusão:

**✅ Pode deixar tudo como está!**
**✅ Só use a pasta `public_html/` principal**
**✅ Não precisa deletar nada**
**✅ Siga o passo a passo normalmente**

Tudo vai funcionar perfeitamente! 🚀

