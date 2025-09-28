import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(body: {
        productId: number;
        quantity: number;
    }): import("./orders.service").Order;
    findAll(): import("./orders.service").Order[];
}
