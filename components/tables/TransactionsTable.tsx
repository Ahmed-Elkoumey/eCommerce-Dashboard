'use client';

import { Transaction } from '@/features/transactions/transactionsService';
import styles from './TransactionsTable.module.scss';
import { useState } from 'react';

interface TransactionsTableProps {
    transactions: Transaction[];
    onPageChange?: (page: number) => void;
    currentPage?: number;
}

const TransactionsTable = ({ transactions, onPageChange, currentPage = 1 }: TransactionsTableProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Recent Transactions</h3>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((t) => (
                            <tr key={t.id}>
                                <td>#{t.orderId}</td>
                                <td>{t.customer}</td>
                                <td>{new Date(t.date).toLocaleDateString()}</td>
                                <td>${t.amount}</td>
                                <td>
                                    <span className={`${styles.status} ${styles[t.status]}`}>
                                        {t.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {onPageChange && (
                <div className={styles.pagination}>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                        className={styles.pageBtn}
                    >
                        Prev
                    </button>
                    <span>Page {currentPage}</span>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        className={styles.pageBtn}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default TransactionsTable;
