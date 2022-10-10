import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';

import { Data } from './Data';
function App() {
  var d = new Date();
  const [userData, setUserData] = useState({
    labels: [Data.map((data) => data.date)],
    datasets: [{
      label: 'Timeline',
      data: [
        Data.map((data, id) => data.task)
      ]
    }]
  })
  const [options, setOptions] = useState({
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            // The y-axis value will start from zero
            beginAtZero: false,
          },
        },
      ],
      xAxes: [{
        type: "time",
        time: {
          format: "HH:mm",
          unit: 'hour',
          unitStepSize: 2,
          displayFormats: {
            'minute': 'HH:mm',
            'hour': 'HH:mm'
          },
          tooltipFormat: 'HH:mm'
        },
        gridLines: {
          display: false
        }
      }],
    },
    legend: {
      labels: {
        fontSize: 15,
      },
    },
    tooltips: {
      callbacks: {
        label: [Data.map((data) => data.details)]
      }
    }
  })

  const chartData = () => {

  }
  return (
    <div className="App">
      <Chart chartData={userData} options={options} />
    </div>
  );
}

export default App;
