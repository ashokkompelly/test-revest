import { Injectable } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(product: Omit<Product, 'id'>): Product {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...product
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
