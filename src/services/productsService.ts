import IProduct from '../interfaces/productsInterface';
import connection from '../models/connection';
import ProductModel from '../models/productsModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    const result = await this.model.create(product);

    return result;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.model.getAllProducts();

    return result;
  }
}