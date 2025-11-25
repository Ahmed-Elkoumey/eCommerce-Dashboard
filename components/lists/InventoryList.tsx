import { InventoryItem } from '@/features/inventory/inventoryService';
import styles from './InventoryList.module.scss';

interface InventoryListProps {
    inventory: InventoryItem[];
}

const InventoryList = ({ inventory }: InventoryListProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Inventory Status</h3>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>SKU</th>
                            <th>Stock</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item) => {
                            const isLowStock = item.stock <= item.reorderLevel;
                            const isOutOfStock = item.stock === 0;

                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.sku}</td>
                                    <td>{item.stock}</td>
                                    <td>
                                        {isOutOfStock ? (
                                            <span className={`${styles.badge} ${styles.out}`}>Out of Stock</span>
                                        ) : isLowStock ? (
                                            <span className={`${styles.badge} ${styles.low}`}>Low Stock</span>
                                        ) : (
                                            <span className={`${styles.badge} ${styles.ok}`}>In Stock</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryList;
