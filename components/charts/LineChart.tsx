'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './Charts.module.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface LineChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            borderColor: string;
            backgroundColor: string;
        }[];
    };
    title?: string;
}

const LineChart = ({ data, title }: LineChartProps) => {
    const options: ChartOptions<'line'> = {
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
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;
