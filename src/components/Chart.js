import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto'
import 'chartjs-adapter-date-fns';
import { enGB } from 'date-fns/locale';


const Chart = ({ chartData, options }) => {
    return (
        <div className='main-chart '>
            <h2>Tech Natives Project</h2>
            <div className='row'>
                <div className="col">
                    <Bar data={chartData} options={options} />
                </div>
            </div>
        </div>
    )
}

export default Chart