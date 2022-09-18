import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productsService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.productService.create(req.body);

    return res.status(StatusCodes.CREATED).json(result);
  }; 
}