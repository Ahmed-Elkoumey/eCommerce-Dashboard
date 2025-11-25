'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './Charts.module.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface BarChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string;
        }[];
    };
    title?: string;
}

const BarChart = ({ data, title }: BarChartProps) => {
    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: !!title,
                text: title,
            },
        },
    };

    return (
        <div className={styles.chartContainer}>
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarChart;
