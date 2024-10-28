export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

export interface ProductProps {
    product: Product;
    className: string;
}