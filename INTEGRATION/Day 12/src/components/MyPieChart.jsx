import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import '../assets/css/MyPieChart.css';
import BookingStatus from '../pages/BookingStatus';

const MyPieChart = () => {
    const [chartData] = useState({
        labels: ['Motorboats', 'Sailboats', 'Kayaks', 'Canoes', 'Other'],
        datasets: [
            {
                label: 'Boat Types',
                data: [50, 30, 20, 15, 10], // Example data, replace with actual data
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4CAF50",
                    "#9966FF"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4CAF50",
                    "#9966FF"
                ]
            }]
    });

    const [barChartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Bookings',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Cancellations',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
        <div className="flex row" style={{ padding: '70px' }}>
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ width: '33%', height: '50%' }} />
            <Chart type="bar" data={barChartData} options={lightOptions} style={{ width: '33%', height: '50%' }} />
            <BookingStatus/>
        </div>
    );
};

export default MyPieChart;
