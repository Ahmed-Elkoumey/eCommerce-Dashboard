import { Metadata } from 'next';
import { getTransactions } from '@/features/transactions/transactionsService';
import TransactionsTable from '@/components/tables/TransactionsTable';

export const metadata: Metadata = {
    title: 'Transactions | eCommerce Dashboard',
    description: 'View and manage recent transactions.',
};

export default async function TransactionsPage() {
    const transactions = await getTransactions();

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Transactions</h2>
            <TransactionsTable transactions={transactions} />
        </div>
    );
}
