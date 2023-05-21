import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';

const data = {
    "full_name": "Auditor #1",
    "ye": "31Dec",
    "scope": "A+R",
    "utilization": [
        {
            "client_name": "Client #1",
            "percentage": "20",
            "phase": [
                {
                    "from": "January 5, 2023",
                    "to": "January 10, 2023"
                },
                {
                    "from": "January 15, 2023",
                    "to": "January 28, 2023"
                }
            ]
        },
        {
            "client_name": "Client #2",
            "percentage": "30",
            "phase": [
                {
                    "from": "January 15, 2023",
                    "to": "January 28, 2023"
                },
                {
                    "from": "January 15, 2023",
                    "to": "January 25, 2023"
                }
            ]
        },
        {
            "client_name": "Client #3",
            "percentage": "40",
            "phase": [
                {
                    "from": "January 4, 2023",
                    "to": "January 10, 2023"
                }
            ]
        }
    ]
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function dataUtil(phase) {
    return phase.map(item => ([new Date(item.from).getDate(), new Date(item.to).getDate(), 21, 25]))
    // return phase.map(item => ([new Date(item.from).getDate(), new Date(item.to).getDate()]))
    // return phase.map(item => ([{ x: new Date(item.from).getDate(), y: new Date(item.to).getDate() }]))
}


const BarChart = () => {

    // chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Auditor data',
            },
        },
    };

    const newData = {
        labels: ["jan", "feb", "march", "april", "may", "june"],
        datasets: [
            {
                label: "label",
                data: [[0, 30]]
            },
            {
                label: "label",
                data: [[{ x: 5, y: 10 }],]
            },
        ],
        // datasets: data.utilization.map(item => {
        //     console.log(dataUtil(item.phase))
        //     return {
        //         label: item.client_name,
        //         data: dataUtil(item.phase),
        //     }
        // })
    };

    return (
        <div className='w-[90%] mx-auto'>
            <Bar
                options={options}
                data={newData}
                style={{ width: 100 }}
            />
        </div>
    )
}

export default BarChart