import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Pool de conexões MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'ainfotech_db',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Testar conexão
pool.getConnection()
  .then(connection => {
    console.log('✅ Conectado ao MySQL');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Erro ao conectar MySQL:', err.message);
  });

export default pool;

