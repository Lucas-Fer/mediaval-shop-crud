import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/ordersService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const result = await this.orderService.getAll();

    return res.status(StatusCodes.OK).json(result);
  };
}