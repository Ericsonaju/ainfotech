# 📤 Formas Fáceis de Fazer Upload - HostGator

## 🚀 OPÇÃO 1: FTP (MAIS FÁCIL E RÁPIDO) ⭐ RECOMENDADO

### **Usar FileZilla (Grátis e Fácil)**

1. **Baixar FileZilla:**
   - Acesse: https://filezilla-project.org/
   - Baixe o "FileZilla Client" (gratuito)

2. **Conectar ao HostGator:**
   - **Host:** `ftp.seudominio.com.br` ou `sh-pro00172.hostgator.com.br`
   - **Usuário:** Seu usuário do cPanel
   - **Senha:** Sua senha do cPanel
   - **Porta:** 21
   - Clique em "Conectar"

3. **Fazer Upload:**
   - **Lado esquerdo:** Seu computador (navegue até a pasta `dist/`)
   - **Lado direito:** Servidor (navegue até `public_html/`)
   - **Selecione TODOS os arquivos** da pasta `dist/`
   - **Arraste e solte** ou clique com botão direito > "Upload"
   - ✅ Pronto! Todos os arquivos serão enviados de uma vez!

### **Vantagens do FTP:**
- ✅ Upload de múltiplos arquivos de uma vez
- ✅ Arrastar e soltar (drag & drop)
- ✅ Ver progresso de cada arquivo
- ✅ Muito mais rápido
- ✅ Pode fazer upload de pastas inteiras

---

## 🗜️ OPÇÃO 2: Compactar em ZIP (Também Fácil)

### **Passo a Passo:**

1. **No seu computador:**
   - Selecione TODOS os arquivos dentro de `dist/`
   - Clique com botão direito > "Enviar para" > "Pasta compactada (em zip)"
   - Nomeie como `dist.zip`

2. **No cPanel:**
   - Vá em "Gerenciador de arquivos"
   - Entre em `public_html/`
   - Faça upload do arquivo `dist.zip`
   - Clique com botão direito no `dist.zip`
   - Selecione "Extrair"
   - ✅ Todos os arquivos serão extraídos automaticamente!

3. **Limpar:**
   - Delete o arquivo `dist.zip` após extrair

---

## 📁 OPÇÃO 3: Gerenciador de Arquivos (Upload Múltiplo)

### **No cPanel:**

1. **Vá em "Gerenciador de arquivos"**
2. **Entre em `public_html/`**
3. **Clique em "Upload"** (botão no topo)
4. **Na tela de upload:**
   - Clique em "Selecionar arquivo"
   - **Segure CTRL** e clique em múltiplos arquivos
   - OU selecione o primeiro, segure SHIFT e clique no último
   - Clique em "Abrir"
   - ✅ Todos serão enviados de uma vez!

---

## 🎯 RECOMENDAÇÃO: Use FTP (FileZilla)

### **Por quê?**
- ✅ Mais rápido
- ✅ Mais fácil
- ✅ Pode arrastar e soltar
- ✅ Vê progresso em tempo real
- ✅ Pode fazer upload de pastas inteiras
- ✅ Não precisa fazer um por um

### **Credenciais FTP:**
Você encontra no cPanel:
- **cPanel > Contas FTP** ou
- **cPanel > Informações da conta** (no canto superior direito)

**Ou use as mesmas credenciais do cPanel:**
- Host: `ftp.seudominio.com.br`
- Usuário: (mesmo do cPanel)
- Senha: (mesma do cPanel)
- Porta: 21

---

## 📋 Passo a Passo Rápido com FTP:

1. **Instalar FileZilla** (se não tiver)
2. **Conectar ao HostGator:**
   ```
   Host: ftp.seudominio.com.br
   Usuário: seu_usuario
   Senha: sua_senha
   Porta: 21
   ```
3. **Navegar:**
   - Esquerda: `C:\Users\Windows\Desktop\Ainfotech-info-main\dist`
   - Direita: `/public_html`
4. **Selecionar todos os arquivos** (CTRL+A)
5. **Arrastar para a direita** ou botão direito > Upload
6. ✅ Pronto!

---

## 🔧 Para o Backend (API):

**Mesmo processo:**
1. Conecte via FTP
2. Navegue até `public_html/`
3. Crie pasta `api` (se não existir)
4. Entre em `api`
5. Faça upload de TODOS os arquivos de `backend/`
6. ✅ Pronto!

---

## ⚡ Dica Extra:

**Se tiver muitos arquivos pequenos:**
- Use ZIP (Opção 2) - mais rápido
- Extraia no servidor
- Delete o ZIP depois

**Se tiver arquivos grandes:**
- Use FTP (Opção 1) - mais confiável
- Vê progresso em tempo real

---

## 🆘 Problemas?

### **FTP não conecta:**
- Verifique se está usando `ftp.seudominio.com.br`
- Verifique porta 21
- Verifique credenciais no cPanel

### **Upload lento:**
- Use ZIP para arquivos pequenos
- Use FTP para arquivos grandes

### **Arquivos não aparecem:**
- Verifique permissões (644 para arquivos, 755 para pastas)
- Recarregue o Gerenciador de Arquivos

---

## ✅ Resumo:

**MELHOR OPÇÃO:** FTP com FileZilla ⭐
- Download: https://filezilla-project.org/
- Gratuito e fácil de usar
- Upload de múltiplos arquivos de uma vez
- Arrastar e soltar

**SEGUNDA OPÇÃO:** ZIP
- Compactar arquivos
- Upload do ZIP
- Extrair no servidor

**TERCEIRA OPÇÃO:** Upload múltiplo no cPanel
- Segurar CTRL para selecionar vários arquivos

