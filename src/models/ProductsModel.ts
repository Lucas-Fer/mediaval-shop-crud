import { ResultSetHeader, Pool } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const [result] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;
    const newResult = {
      id: insertId,
      ...product,
    };

    return newResult;
  }
}