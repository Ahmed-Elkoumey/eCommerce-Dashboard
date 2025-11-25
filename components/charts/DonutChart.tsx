'use client';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './Charts.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor?: string[];
            borderWidth?: number;
        }[];
    };
    title?: string;
}

const DonutChart = ({ data, title }: DonutChartProps) => {
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: !!title,
                text: title,
            },
        },
    };

    return (
        <div className={styles.chartContainer}>
            <Doughnut options={options} data={data} />
        </div>
    );
};

export default DonutChart;
