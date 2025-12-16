# 🔧 Corrigir Conexão FTP - HostGator

## ❌ Problema Identificado:

1. **Host incompleto:** Você colocou `nformatica.com.br` mas deveria ser `ftp.ainfotechinformatica.com.br`
2. **Autenticação falhou:** Senha ou usuário incorretos
3. **Conta FTP:** Você está criando uma nova conta, precisa usar as credenciais corretas

---

## ✅ SOLUÇÃO 1: Usar Credenciais da Conta FTP que Você Está Criando

### **No cPanel (onde você está criando a conta):**

1. **Preencha os campos:**
   - **Usuário:** `ainfotech` ✅ (já está correto)
   - **Senha:** Crie uma senha forte (use o gerador se quiser)
   - **Diretório:** Deixe como está ou mude para: `public_html`
   - **Cota:** Ilimitado ✅

2. **Clique em "Criar conta de FTP"**

3. **Depois de criar, use no FileZilla:**
   ```
   Host: ftp.ainfotechinformatica.com.br
   Usuário: ainfotech@ainfotechinformatica.com.br
   Senha: (a senha que você criou)
   Porta: 21
   ```

---

## ✅ SOLUÇÃO 2: Usar Credenciais do cPanel (Mais Simples)

### **Se você já tem uma conta FTP principal:**

1. **No FileZilla, use:**
   ```
   Host: ftp.ainfotechinformatica.com.br
   Usuário: ericso63 (ou seu usuário principal do cPanel)
   Senha: (sua senha do cPanel)
   Porta: 21
   ```

2. **Ou encontre no cPanel:**
   - **cPanel > Informações da conta** (canto superior direito)
   - Lá você encontra o usuário FTP principal

---

## ✅ SOLUÇÃO 3: Corrigir Host no FileZilla

### **O que está errado:**
- Você colocou: `nformatica.com.br` ❌
- Deveria ser: `ftp.ainfotechinformatica.com.br` ✅

### **Como corrigir:**

1. **No FileZilla, no campo "Host":**
   - Apague tudo
   - Digite: `ftp.ainfotechinformatica.com.br`

2. **Usuário:**
   - Se criou conta FTP: `ainfotech@ainfotechinformatica.com.br`
   - Se usar conta principal: `ericso63` (ou seu usuário)

3. **Senha:**
   - A senha que você definiu ao criar a conta FTP
   - OU sua senha do cPanel

4. **Porta:** `21`

5. **Clique em "Conexão rápida"**

---

## 🎯 Passo a Passo Completo:

### **1. Criar Conta FTP no cPanel:**

1. **No cPanel, vá em "Contas FTP"**
2. **Preencha:**
   - **Usuário:** `ainfotech`
   - **Senha:** (crie uma senha forte - anote ela!)
   - **Diretório:** `public_html` (mude para isso!)
   - **Cota:** Ilimitado
3. **Clique em "Criar conta de FTP"**
4. **Anote a senha que você criou!**

### **2. Conectar no FileZilla:**

1. **Abra FileZilla**
2. **Preencha:**
   ```
   Host: ftp.ainfotechinformatica.com.br
   Usuário: ainfotech@ainfotechinformatica.com.br
   Senha: (a senha que você criou)
   Porta: 21
   ```
3. **Clique em "Conexão rápida"**

### **3. Se ainda não conectar:**

**Tente sem TLS/SSL:**
1. No FileZilla, vá em: **Editar > Configurações**
2. **Conexão > FTP**
3. **Tipo de criptografia:** Selecione "Apenas FTP simples (inseguro)"
4. Tente conectar novamente

---

## 🔍 Verificar Credenciais:

### **No cPanel:**

1. **Vá em "Contas FTP"**
2. **Veja a lista de contas criadas**
3. **Lá você vê:**
   - Nome completo do usuário
   - Diretório
   - Status

### **Ou use Informações da Conta:**

1. **cPanel > Informações da conta** (canto superior direito)
2. **Lá você encontra:**
   - Servidor FTP
   - Usuário FTP principal
   - (mas não a senha - você precisa saber)

---

## ⚠️ IMPORTANTE:

### **Diretório da Conta FTP:**

Quando criar a conta FTP, **mude o diretório para:**
```
public_html
```

**NÃO use:** `ainfotechinformatica.com.br/ainfotech`

**USE:** `public_html`

Assim você terá acesso direto à pasta onde o site fica!

---

## 🔧 Se Ainda Não Funcionar:

### **Opção A: Usar Gerenciador de Arquivos do cPanel**

1. **cPanel > Gerenciador de arquivos**
2. **Entre em `public_html/`**
3. **Use a opção ZIP** (compactar no seu PC, fazer upload do ZIP, extrair no servidor)

### **Opção B: Verificar se FTP está habilitado**

1. **cPanel > Contas FTP**
2. **Verifique se há alguma restrição**
3. **Tente criar uma nova conta com nome diferente**

---

## ✅ Resumo Rápido:

1. **Host correto:** `ftp.ainfotechinformatica.com.br` (completo!)
2. **Usuário:** `ainfotech@ainfotechinformatica.com.br` (completo!)
3. **Senha:** A que você criou ao criar a conta
4. **Diretório:** Mude para `public_html` ao criar a conta
5. **Porta:** 21

---

## 🆘 Teste Rápido:

**Tente conectar com:**
```
Host: ftp.ainfotechinformatica.com.br
Usuário: ericso63
Senha: (sua senha do cPanel)
Porta: 21
```

Se funcionar, você pode usar essa conta principal também!

