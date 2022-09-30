import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/OrdersService';

export default class OrdersController {
  public ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  public list = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.ordersService.list();

    return res.status(StatusCodes.OK).json(result);
  };
}