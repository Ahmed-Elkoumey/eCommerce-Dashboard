import { Customer } from '@/features/customers/customersService';
import styles from './CustomerList.module.scss';

interface CustomerListProps {
    customers: Customer[];
}

const CustomerList = ({ customers }: CustomerListProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Customer Insights</h3>
            <div className={styles.grid}>
                {customers.map((customer) => (
                    <div key={customer.id} className={styles.card}>
                        <div className={styles.avatar}>{customer.name.charAt(0)}</div>
                        <div className={styles.info}>
                            <h4>{customer.name}</h4>
                            <p>Joined: {new Date(customer.joined).toLocaleDateString()}</p>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span>Orders</span>
                                <strong>{customer.orders}</strong>
                            </div>
                            <div className={styles.stat}>
                                <span>LTV</span>
                                <strong>${customer.lifetimeValue}</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerList;
