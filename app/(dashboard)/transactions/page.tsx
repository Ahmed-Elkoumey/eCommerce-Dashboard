import { getAllTransactions } from '@/features/transactions/transactionsService';
import TransactionsTable from '@/components/tables/TransactionsTable';

export default async function TransactionsPage() {
    // For MVP, we fetch all and let client handle pagination if needed, 
    // or we could implement server-side pagination with searchParams.
    // The requirement asked for pagination support.
    // Let's fetch initial data.
    const transactions = await getAllTransactions();

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Transactions History</h2>
            <TransactionsTable transactions={transactions} />
        </div>
    );
}
