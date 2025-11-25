import styles from './MetricCard.module.scss';

interface MetricCardProps {
    title: string;
    value: string | number;
    change?: number;
    icon?: React.ReactNode;
}

const MetricCard = ({ title, value, change }: MetricCardProps) => {
    const isPositive = change && change >= 0;

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.content}>
                <span className={styles.value}>{value}</span>
                {change !== undefined && (
                    <span className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
                        {isPositive ? '↑' : '↓'} {Math.abs(change)}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default MetricCard;
