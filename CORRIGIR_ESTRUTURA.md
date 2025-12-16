# 🔧 Corrigir Estrutura de Pastas

## ⚠️ Problema Identificado:

Vejo que o `.env` está em `/api/`, mas a estrutura correta deve ser:

```
/public_html/api/.env
```

**NÃO:**
```
/api/.env
```

---

## ✅ ESTRUTURA CORRETA:

```
/public_html/              ← Pasta principal do site
├── index.html
├── .htaccess
├── assets/
└── api/                   ← Pasta da API (DENTRO de public_html)
    ├── .env               ← AQUI!
    ├── server.js
    ├── package.json
    ├── config/
    ├── controllers/
    ├── middleware/
    └── routes/
```

---

## 🔧 COMO CORRIGIR:

### **No FileZilla:**

1. **Navegue até a raiz do servidor:**
   - Você está em `/api/`
   - Volte para a raiz: `/`

2. **Verifique a estrutura:**
   - Você deve ver: `public_html/`, `api/`, etc.

3. **Mover arquivos:**
   - Se os arquivos estão em `/api/` (raiz)
   - Eles devem estar em `/public_html/api/`

### **Opção 1: Mover tudo de uma vez**

1. **Navegue até `/api/`** (onde estão os arquivos agora)
2. **Selecione TODOS os arquivos** (CTRL+A)
3. **Arraste para `/public_html/api/`**
4. ✅ Pronto!

### **Opção 2: Verificar primeiro**

1. **Navegue até `/public_html/`**
2. **Veja se já existe pasta `api/` lá**
3. **Se existir:**
   - Entre em `/public_html/api/`
   - Veja o que tem lá
   - Se estiver vazio, mova os arquivos de `/api/` para cá
4. **Se não existir:**
   - Crie a pasta `api` dentro de `public_html/`
   - Mova os arquivos de `/api/` para `/public_html/api/`

---

## 📋 VERIFICAR ESTRUTURA FINAL:

### **No FileZilla, navegue até:**

```
/public_html/
```

**Você deve ver:**
- `index.html`
- `.htaccess`
- `assets/`
- `api/` ← Pasta da API

**Entre em `api/`:**
- `.env` ← Deve estar aqui!
- `server.js`
- `package.json`
- `config/`
- `controllers/`
- `middleware/`
- `routes/`

---

## 🎯 Passo a Passo Rápido:

1. **No FileZilla, vá para `/public_html/`**
2. **Veja se existe pasta `api/`**
3. **Se não existir, crie:**
   - Botão direito > "Criar diretório"
   - Nome: `api`
4. **Entre em `/api/` (raiz)**
5. **Selecione todos os arquivos** (CTRL+A)
6. **Arraste para `/public_html/api/`**
7. **Confirme que tudo foi movido**
8. ✅ Pronto!

---

## ⚠️ IMPORTANTE:

### **Estrutura ERRADA:**
```
/api/              ← Raiz do servidor (ERRADO)
├── .env
└── backend/
```

### **Estrutura CORRETA:**
```
/public_html/      ← Pasta do site (CORRETO)
├── index.html
├── .htaccess
├── assets/
└── api/           ← API dentro de public_html
    ├── .env
    ├── server.js
    └── ...
```

---

## ✅ Depois de Corrigir:

1. ✅ Verifique que `.env` está em `/public_html/api/`
2. ✅ Verifique que todos os arquivos estão em `/public_html/api/`
3. ✅ Continue com configuração do Node.js app
4. ✅ Use `api` como Application root (sem `/public_html/`)

---

## 🎉 Pronto!

Depois de corrigir a estrutura, você pode:
1. Configurar Node.js app no cPanel
2. Application root: `api` (o cPanel já sabe que é dentro de public_html)
3. Testar a API

