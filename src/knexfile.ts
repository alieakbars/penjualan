/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import env from "./config/env.config";

const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASSWORD } = env.env();

export = {
  development: {
    client: process.env.DB_CLIENT || 'mysql2',
    connection: {
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    },
    pool: { min: 0, max: 7 }
  },
};

