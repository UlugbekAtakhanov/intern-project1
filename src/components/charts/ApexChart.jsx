import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ data }) => {
    const state = {
        series: [
            {
                name: data.full_name,
                data: data?.utilization.map(item => {
                    return {
                        x: item.client_name,
                        y: [
                            new Date(item.from).getTime(),
                            new Date(item.to).getTime()
                        ]
                    }
                })
            }
        ],
        options: {
            chart: {
                height: 0,
                type: 'rangeBar',
                toolbar: {
                    tools: {
                        zoom: false
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%'
                }
            },
            xaxis: {
                type: 'datetime'
            },
            stroke: {
                width: 1
            },
            fill: {
                type: 'solid',
                opacity: 0.6
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            }
        },
    };
    return (
        <div id="chart" className='border p-4 shadow-sm'>
            <ReactApexChart options={state.options} series={state.series} type="rangeBar" height={300} />
        </div>
    )
}

export default ApexChart
