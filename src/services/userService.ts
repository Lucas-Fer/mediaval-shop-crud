import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import connection from '../models/connection';
import UserModel from '../models/userModel';

export default class UserService {
  public userModel: UserModel;
  
  constructor() {
    this.userModel = new UserModel(connection);  
  }

  public async create(userData: IUser): Promise<string> {
    const { username, password } = userData;

    await this.userModel.createUser(userData);
    
    const token = jwt.sign({ username, password }, 'jwt_secret');

    return token;
  }
}