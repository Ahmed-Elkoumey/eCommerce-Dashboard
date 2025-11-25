import db from '@/mocks/db.json';

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
    return Promise.resolve(db.sales);
};

export const getSummary = async (): Promise<SalesSummary> => {
    return Promise.resolve(db.summary);
};
