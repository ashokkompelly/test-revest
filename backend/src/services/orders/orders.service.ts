import { Injectable } from '@nestjs/common';
import { ProductsService, Product } from '../products/products.service';

export interface Order {
  id: number;
  product: Product;
  quantity: number;
  total: number;
}

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  constructor(private readonly productsService: ProductsService) {}

  createOrder(productId: number, quantity: number): Order {
    const product = this.productsService.findOne(productId);
    if (!product) throw new Error('Product not found');

    const order: Order = {
      id: this.orders.length + 1,
      product,
      quantity,
      total: product.price * quantity
    };

    this.orders.push(order);
    return order;
  }

  findAll(): Order[] {
    return this.orders;
  }
}
