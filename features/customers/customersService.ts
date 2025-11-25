import db from '@/mocks/db.json';

export interface Customer {
    id: string;
    name: string;
    orders: number;
    lifetimeValue: number;
    joined: string;
}

export const getCustomers = async (): Promise<Customer[]> => {
    return Promise.resolve(db.customers);
};
