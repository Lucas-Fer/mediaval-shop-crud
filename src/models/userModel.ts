import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;  
  }

  public async createUser(userData: IUser): Promise<number> {
    const { username, classe, level, password } = userData;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)', 
      [username, classe, level, password],
    );

    return result.insertId;
  }
}