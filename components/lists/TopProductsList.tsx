import { Product } from '@/features/products/productsService';
import styles from './TopProductsList.module.scss';

interface TopProductsListProps {
    products: Product[];
}

const TopProductsList = ({ products }: TopProductsListProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Top Selling Products</h3>
            <ul className={styles.list}>
                {products.map((product) => (
                    <li key={product.id} className={styles.item}>
                        <div className={styles.info}>
                            <span className={styles.name}>{product.name}</span>
                            <span className={styles.category}>{product.category}</span>
                        </div>
                        <div className={styles.stats}>
                            <span className={styles.sales}>{product.unitsSold} sold</span>
                            <span className={styles.revenue}>${product.revenue.toLocaleString()}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopProductsList;
