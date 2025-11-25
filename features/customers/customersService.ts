import api from '@/lib/api';

export interface Customer {
    id: string;
    name: string;
    orders: number;
    lifetimeValue: number;
    joined: string;
}

export const getCustomers = async (): Promise<Customer[]> => {
    return api.get('/customers');
};
