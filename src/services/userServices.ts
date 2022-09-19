import jwt from 'jsonwebtoken';
import IUser from '../interfaces/usersInterface';
import connection from '../models/connection';
import UserModel from '../models/userModel';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<string> {
    const { username, password } = user;
    await this.model.createNewUser(user);

    const token = jwt.sign({ username, password }, 'jwt_secret');

    return token;
  }
}