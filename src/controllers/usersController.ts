import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userServices';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const user = req.body;

    const token = await this.userService.create(user);

    return res.status(StatusCodes.CREATED).json({ token });
  };
}