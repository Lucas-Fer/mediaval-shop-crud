import IProduct from '../interfaces/IProduct';
import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';

export default class ProductsService {
  public productModel: ProductsModel;

  constructor() {
    this.productModel = new ProductsModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> { 
    const result = await this.productModel.createProduct(product);
    return result;
  }
}