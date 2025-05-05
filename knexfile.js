import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,      // e.g. 'localhost'
    user: process.env.DB_USER,      // e.g. 'root'
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME,
  },
  pool: { min: 0, max: 7 }
});

export default db;
