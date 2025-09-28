import { ProductsService, Product } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: Omit<Product, 'id'>): Product;
    findAll(): Product[];
    findOne(id: string): Product | undefined;
}
