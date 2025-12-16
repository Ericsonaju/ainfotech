# 🔐 Como Encontrar Credenciais FTP - HostGator

## 📍 Onde Encontrar no cPanel:

### **Método 1: Contas FTP**
1. No cPanel, procure por **"Contas FTP"** ou **"FTP Accounts"**
2. Você verá suas contas FTP listadas
3. Use essas credenciais no FileZilla

### **Método 2: Informações da Conta**
1. No cPanel, no canto superior direito
2. Procure por **"Informações da conta"** ou **"Account Information"**
3. Lá você encontra:
   - **Servidor FTP:** `ftp.seudominio.com.br`
   - **Usuário FTP:** (seu usuário)
   - **Porta:** 21

### **Método 3: Usar Mesmas Credenciais do cPanel**
- **Host:** `ftp.seudominio.com.br` ou `sh-pro00172.hostgator.com.br`
- **Usuário:** Mesmo do cPanel
- **Senha:** Mesma do cPanel
- **Porta:** 21

---

## 🔧 Configuração no FileZilla:

```
Host: ftp.seudominio.com.br
Usuário: seu_usuario_cpanel
Senha: sua_senha_cpanel
Porta: 21
```

---

## ✅ Teste Rápido:

1. Abra FileZilla
2. Cole as credenciais
3. Clique em "Conectar"
4. Se conectar, está tudo certo! ✅

