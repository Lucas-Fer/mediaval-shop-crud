import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/usersInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createNewUser(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;

    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return dataInserted.insertId;
  }
}