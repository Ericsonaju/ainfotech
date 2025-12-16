# ✅ Solução Final FTP - Passo a Passo

## 🔍 Problemas Identificados:

1. **Usuário incompleto no FileZilla:** Você colocou só `ainfotech`, mas precisa ser `ainfotech@ainfotechinformatica.com.br`
2. **Host pode estar cortado:** Verifique se está completo
3. **Diretório da conta:** Está apontando para subpasta, deveria ser `public_html`

---

## ✅ SOLUÇÃO COMPLETA:

### **PASSO 1: Finalizar Criação da Conta FTP no cPanel**

Na tela onde você está criando a conta:

1. **Usuário:** `ainfotech` ✅ (já está correto)

2. **Senha:** ✅ (já está preenchida e forte)

3. **Senha (novamente):** Preencha novamente a mesma senha

4. **Diretório:** ⚠️ **MUDE ISSO!**
   - **Apague:** `/home1/ericso63/ainfotechinformatica.com.br/ainfotech`
   - **Digite:** `public_html`
   - Isso dá acesso direto à pasta do site!

5. **Cota:** Pode deixar 2000 MB ou Ilimitado

6. **Clique em "Criar conta de FTP"**

7. **ANOTE A SENHA!** (você vai precisar)

---

### **PASSO 2: Corrigir FileZilla**

Depois de criar a conta, no FileZilla:

1. **Host:** 
   ```
   ftp.ainfotechinformatica.com.br
   ```
   (Verifique se está COMPLETO, não cortado!)

2. **Usuário:** 
   ```
   ainfotech@ainfotechinformatica.com.br
   ```
   ⚠️ **COMPLETO COM @ E DOMÍNIO!**

3. **Senha:** 
   ```
   (a senha que você criou ao criar a conta FTP)
   ```

4. **Porta:** 
   ```
   21
   ```

5. **Clique em "Conexão rápida"**

---

### **PASSO 3: Se Ainda Não Conectar - Desabilitar TLS**

1. No FileZilla, vá em: **Editar > Configurações**

2. **Conexão > FTP**

3. **Tipo de criptografia:** Selecione **"Apenas FTP simples (inseguro)"**

4. Clique em **OK**

5. Tente conectar novamente

---

## 🎯 Passo a Passo Visual:

### **No cPanel (Criar Conta):**

```
Usuário: ainfotech
Senha: [sua senha forte]
Senha (novamente): [mesma senha]
Diretório: public_html  ← MUDE PARA ISSO!
Cota: 2000 MB ou Ilimitado
[Clique em "Criar conta de FTP"]
```

### **No FileZilla (Conectar):**

```
Host: ftp.ainfotechinformatica.com.br
Usuário: ainfotech@ainfotechinformatica.com.br  ← COMPLETO!
Senha: [senha que você criou]
Porta: 21
[Conexão rápida]
```

---

## ⚠️ ERROS COMUNS:

### ❌ ERRADO:
- Usuário: `ainfotech` (sem @ e domínio)
- Host: `ftp.ainfotechinform` (cortado)
- Diretório: `/home1/ericso63/ainfotechinformatica.com.br/ainfotech`

### ✅ CORRETO:
- Usuário: `ainfotech@ainfotechinformatica.com.br` (completo!)
- Host: `ftp.ainfotechinformatica.com.br` (completo!)
- Diretório: `public_html`

---

## 🔧 Alternativa: Usar Conta Principal

Se ainda não funcionar, tente usar sua conta principal do cPanel:

### **No FileZilla:**

```
Host: ftp.ainfotechinformatica.com.br
Usuário: ericso63 (ou seu usuário principal)
Senha: (sua senha do cPanel)
Porta: 21
```

**Para encontrar seu usuário principal:**
- cPanel > Informações da conta (canto superior direito)
- Lá você vê o usuário FTP principal

---

## 📋 Checklist:

- [ ] Conta FTP criada no cPanel
- [ ] Diretório mudado para `public_html`
- [ ] Senha anotada
- [ ] FileZilla com usuário completo: `ainfotech@ainfotechinformatica.com.br`
- [ ] FileZilla com host completo: `ftp.ainfotechinformatica.com.br`
- [ ] Porta: 21
- [ ] TLS desabilitado (se necessário)

---

## 🆘 Se Ainda Não Funcionar:

### **Opção 1: Verificar Credenciais no cPanel**

1. **cPanel > Contas FTP**
2. **Veja a lista de contas criadas**
3. **Clique na conta `ainfotech`**
4. **Lá você vê:**
   - Nome completo do usuário
   - Pode alterar senha se necessário
   - Pode ver o diretório

### **Opção 2: Usar ZIP (Mais Simples)**

Se FTP continuar dando problema:

1. **Compacte os arquivos de `dist/` em ZIP**
2. **No cPanel > Gerenciador de arquivos**
3. **Entre em `public_html/`**
4. **Faça upload do ZIP**
5. **Clique com botão direito > Extrair**
6. ✅ Pronto!

---

## ✅ Resumo Rápido:

1. **Criar conta FTP** com diretório `public_html`
2. **No FileZilla:** Usuário COMPLETO `ainfotech@ainfotechinformatica.com.br`
3. **Host COMPLETO:** `ftp.ainfotechinformatica.com.br`
4. **Desabilitar TLS** se necessário
5. **Conectar!**

---

## 🎯 O Mais Importante:

**O usuário no FileZilla DEVE ser:**
```
ainfotech@ainfotechinformatica.com.br
```

**NÃO apenas:**
```
ainfotech
```

Isso é o que está causando o erro "530 Login authentication failed"!

