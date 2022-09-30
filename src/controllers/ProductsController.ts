import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/ProductsService';

export default class ProductsController {
  public productService: ProductsService;

  constructor() {
    this.productService = new ProductsService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.productService.create(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  };
}