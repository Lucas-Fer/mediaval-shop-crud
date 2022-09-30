import IOrders from '../interfaces/IOrders';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  public async list(): Promise<IOrders[]> {
    const result = await this.ordersModel.getAllOrders();

    return result;
  }
}