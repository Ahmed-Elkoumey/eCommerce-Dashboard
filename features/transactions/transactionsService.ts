import db from '@/mocks/db.json';

export interface Transaction {
    id: string;
    date: string;
    orderId: string;
    amount: number;
    status: 'completed' | 'pending' | 'failed';
    customer: string;
}

export const getTransactions = async (
    page = 1,
    limit = 10,
    sort = 'date',
    order = 'desc'
): Promise<Transaction[]> => {
    // Pagination and sorting are ignored for static mock data
    const transactions = db.transactions.map(t => ({
        ...t,
        status: t.status as 'completed' | 'pending' | 'failed'
    }));
    return Promise.resolve(transactions);
};

export const getAllTransactions = async (): Promise<Transaction[]> => {
    const transactions = db.transactions.map(t => ({
        ...t,
        status: t.status as 'completed' | 'pending' | 'failed'
    }));
    return Promise.resolve(transactions);
};
