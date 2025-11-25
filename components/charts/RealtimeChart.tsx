'use client';

import { useState } from 'react';
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
import { usePolling } from '@/hooks/usePolling';
import { getSales } from '@/features/sales/salesService';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const RealtimeChart = () => {
    const [chartData, setChartData] = useState<{
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            borderColor: string;
            backgroundColor: string;
        }[];
    }>({
        labels: [],
        datasets: [
            {
                label: 'Realtime Sales',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    });

    const fetchData = async () => {
        try {
            const sales = await getSales();
            // Simulate realtime by taking last 7 and adding random variation if needed, 
            // or just fetching fresh data if the API was real.
            // For mock, we'll just display the static data but "poll" it.
            // To make it look "realtime", we might want to append a random point locally or rotate data.
            // For this MVP, let's just fetch and update.

            // Let's simulate adding a new data point
            const now = new Date();
            const timeLabel = now.toLocaleTimeString();
            const randomValue = Math.floor(Math.random() * 500) + 500;

            setChartData(prev => {
                const newLabels = [...prev.labels, timeLabel].slice(-10); // Keep last 10
                const newData = [...prev.datasets[0].data, randomValue].slice(-10);

                return {
                    ...prev,
                    labels: newLabels,
                    datasets: [
                        {
                            ...prev.datasets[0],
                            data: newData,
                        }
                    ]
                };
            });

        } catch (error) {
            console.error("Failed to fetch realtime data", error);
        }
    };

    usePolling(fetchData, 5000);

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Realtime Sales (Simulated)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    return (
        <div className={styles.chartContainer}>
            <Line options={options} data={chartData} />
        </div>
    );
};

export default RealtimeChart;
