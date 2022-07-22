import pg from "pg";
import config from './default.js';
 
const { Pool } = pg;
const database = config.dbUri as string;

export const connection = new Pool({
  connectionString: database,
//   ssl: {
//     rejectUnauthorized: false,
//   },
});