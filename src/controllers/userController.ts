import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';

export default class UserController {
  public userService: UserService; 

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.userService.create(req.body);

    return res.status(StatusCodes.CREATED).json({ token: result });
  };
}