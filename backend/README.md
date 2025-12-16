# 🚀 Backend API - AINFOTECH

API RESTful modular para o sistema AINFOTECH, rodando no HostGator com MySQL.

## 📁 Estrutura

```
backend/
├── server.js              # Servidor principal
├── package.json           # Dependências
├── .env                   # Variáveis de ambiente (criar)
│
├── config/
│   └── database.js        # Configuração MySQL
│
├── controllers/
│   ├── authController.js  # Autenticação
│   └── tasksController.js # Tasks/OS
│
├── middleware/
│   └── auth.js            # JWT middleware
│
└── routes/
    ├── authRoutes.js      # Rotas de autenticação
    └── tasksRoutes.js     # Rotas de tasks
```

## 🚀 Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar variáveis:**
```bash
cp .env.example .env
# Edite .env com suas credenciais
```

3. **Iniciar servidor:**
```bash
npm start
# ou para desenvolvimento:
npm run dev
```

## 🔐 Autenticação

### Login
```bash
POST /api/auth/login
Body: { "email": "admin@ainfotech.com", "password": "senha" }
Response: { "token": "...", "user": {...} }
```

### Verificar Token
```bash
GET /api/auth/verify
Headers: { "Authorization": "Bearer TOKEN" }
```

## 📡 Endpoints

### Tasks
- `GET /api/tasks` - Listar todas
- `GET /api/tasks/os/:osNumber` - Buscar por OS
- `POST /api/tasks` - Criar nova
- `PUT /api/tasks/:id` - Atualizar
- `DELETE /api/tasks/:id` - Deletar

## 🔧 Gerar Hash de Senha

```bash
node scripts/generate-password.js "sua_senha"
```

## 📝 Variáveis de Ambiente

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=ainfotech_db
DB_PORT=3306

JWT_SECRET=seu_secret_super_seguro
JWT_EXPIRES_IN=7d

PORT=3001
NODE_ENV=production
CORS_ORIGIN=https://seudominio.com.br
```

## 🛡️ Segurança

- ✅ JWT Authentication
- ✅ Helmet (headers de segurança)
- ✅ Rate Limiting
- ✅ CORS configurado
- ✅ Validação de dados
- ✅ Bcrypt para senhas

## 📚 Próximos Passos

- [ ] Adicionar controllers para Products
- [ ] Adicionar controllers para Orders
- [ ] Adicionar controllers para Customers
- [ ] Upload de arquivos
- [ ] Logs estruturados
- [ ] Testes automatizados

