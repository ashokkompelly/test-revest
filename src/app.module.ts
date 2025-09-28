import { Module } from '@nestjs/common';
import { ProductsModule } from './services/products/products.module';
import { OrdersModule } from './services/orders/orders.module';

@Module({
  imports: [ProductsModule, OrdersModule],
})
export class AppModule {}
