import db from '@/mocks/db.json';

export interface Product {
    id: string;
    name: string;
    unitsSold: number;
    revenue: number;
    stock: number;
    category: string;
}

export const getTopProducts = async (): Promise<Product[]> => {
    const sorted = db.products.sort((a: any, b: any) => b.unitsSold - a.unitsSold);
    return Promise.resolve(sorted.slice(0, 5));
};

export const getProducts = async (): Promise<Product[]> => {
    return Promise.resolve(db.products);
};
