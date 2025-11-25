import api from '@/lib/api';

export interface Product {
    id: string;
    name: string;
    unitsSold: number;
    revenue: number;
    stock: number;
    category: string;
}

export const getTopProducts = async (): Promise<Product[]> => {
    return api.get('/products?_sort=unitsSold&_order=desc&_limit=5');
};

export const getProducts = async (): Promise<Product[]> => {
    return api.get('/products');
};
