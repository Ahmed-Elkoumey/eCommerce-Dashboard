import { Metadata } from 'next';
import { getCustomers } from '@/features/customers/customersService';
import CustomerList from '@/components/customers/CustomerList';

export const metadata: Metadata = {
    title: 'Customers | eCommerce Dashboard',
    description: 'Manage customer relationships and insights.',
};

export default async function CustomersPage() {
    const customers = await getCustomers();

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Customer Insights</h2>
            <CustomerList customers={customers} />
        </div>
    );
}
