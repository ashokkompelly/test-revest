import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() body: { productId: number; quantity: number }) {
    return this.ordersService.createOrder(body.productId, body.quantity);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }
}
