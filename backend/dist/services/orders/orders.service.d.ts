import { ProductsService, Product } from '../products/products.service';
export interface Order {
    id: number;
    product: Product;
    quantity: number;
    total: number;
}
export declare class OrdersService {
    private readonly productsService;
    private orders;
    constructor(productsService: ProductsService);
    createOrder(productId: number, quantity: number): Order;
    findAll(): Order[];
}
