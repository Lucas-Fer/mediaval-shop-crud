import IOrder from '../interfaces/ordersInterface';
import connection from '../models/connection';
import OrderModel from '../models/ordersModel';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.model.getAllOrders();

    return result;
  }
}