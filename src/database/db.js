import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const db = new Pool({
 /*  connectionString: process.env.DATABASE_URL, */
 host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'copadomundo2306',
  database: 'Linkr'
});

console.log('DB connected');

export default db;
