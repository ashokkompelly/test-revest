export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}
export declare class ProductsService {
    private products;
    create(product: Omit<Product, 'id'>): Product;
    findAll(): Product[];
    findOne(id: number): Product | undefined;
}
