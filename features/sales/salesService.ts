import api from '@/lib/api';

export interface SalesData {
    id: number;
    date: string;
    revenue: number;
    orders: number;
}

export interface SalesSummary {
    revenue: number;
    orders: number;
    conversionRate: number;
    avgOrderValue: number;
}

export const getSales = async (): Promise<SalesData[]> => {
    return api.get('/sales');
};

export const getSummary = async (): Promise<SalesSummary> => {
    return api.get('/summary');
};
