import api from '@/lib/api';

export interface Transaction {
    id: string;
    date: string;
    orderId: string;
    amount: number;
    status: 'completed' | 'pending' | 'failed';
    customer: string;
}

export const getTransactions = async (page = 1, limit = 10, sort = 'date', order = 'desc'): Promise<Transaction[]> => {
    return api.get(`/transactions?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
};

export const getAllTransactions = async (): Promise<Transaction[]> => {
    return api.get('/transactions');
}
