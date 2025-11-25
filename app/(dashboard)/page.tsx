import { getSummary, getSales } from '@/features/sales/salesService';
import { getTopProducts } from '@/features/products/productsService';
import MetricCard from '@/components/cards/MetricCard';
import LineChart from '@/components/charts/LineChart';
import BarChart from '@/components/charts/BarChart';
import DonutChart from '@/components/charts/DonutChart';
import RealtimeChart from '@/components/charts/RealtimeChart';
import TopProductsList from '@/components/lists/TopProductsList';
import styles from './page.module.scss';

export default async function DashboardPage() {
    const summary = await getSummary();
    const salesData = await getSales();
    const topProducts = await getTopProducts();

    // Prepare Chart Data
    const salesLabels = salesData.map(d => new Date(d.date).toLocaleDateString());
    const salesValues = salesData.map(d => d.revenue);
    const ordersValues = salesData.map(d => d.orders);

    const lineChartData = {
        labels: salesLabels,
        datasets: [
            {
                label: 'Revenue',
                data: salesValues,
                borderColor: 'rgb(37, 99, 235)',
                backgroundColor: 'rgba(37, 99, 235, 0.5)',
            },
        ],
    };

    const barChartData = {
        labels: salesLabels,
        datasets: [
            {
                label: 'Orders',
                data: ordersValues,
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
            },
        ],
    };

    const donutChartData = {
        labels: topProducts.map(p => p.category),
        datasets: [
            {
                label: 'Revenue by Category',
                data: topProducts.map(p => p.revenue), // Simplified: using product revenue as proxy for category
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                ],
            },
        ],
    };

    return (
        <div className={styles.dashboard}>
            <section className={styles.metrics}>
                <MetricCard title="Total Revenue" value={`$${summary.revenue.toLocaleString()}`} change={12.5} />
                <MetricCard title="Total Orders" value={summary.orders} change={-2.4} />
                <MetricCard title="Conversion Rate" value={`${(summary.conversionRate * 100).toFixed(1)}%`} change={0.8} />
                <MetricCard title="Avg Order Value" value={`$${summary.avgOrderValue}`} change={5.2} />
            </section>

            <section className={styles.chartsGrid}>
                <div className={styles.chartCard}>
                    <LineChart data={lineChartData} title="Revenue Over Time" />
                </div>
                <div className={styles.chartCard}>
                    <BarChart data={barChartData} title="Daily Orders" />
                </div>
                <div className={styles.chartCard}>
                    <RealtimeChart />
                </div>
                <div className={styles.chartCard}>
                    <DonutChart data={donutChartData} title="Revenue by Category" />
                </div>
            </section>

            <section className={styles.bottomSection}>
                <TopProductsList products={topProducts} />
            </section>
        </div>
    );
}
