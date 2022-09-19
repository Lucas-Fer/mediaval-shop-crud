import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
});