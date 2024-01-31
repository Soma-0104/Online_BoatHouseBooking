import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const MyPieChart = () => {
    const [chartData] = useState({
        labels: ['No.of.Boats', 'Boats Booked', 'Fast Booking Boats'],
        datasets: [
            {
                label: 'Booking Progress',
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
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
        <div className="card flex row justify-content-center" style={{ height: '400px',padding:'40px' }}>
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ width: '50%', height: '100%' }} />
            <Chart type="bar" data={barChartData} options={lightOptions} style={{ width: '50%', height: '100%' }} />
        </div>
    )
}

export default MyPieChart;
