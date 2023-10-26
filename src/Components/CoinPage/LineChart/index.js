import { Chart as ChartJS } from 'chart.js/auto';
import React from 'react';
import { Line } from 'react-chartjs-2';
import convertNumber from '../../../functions/convertNumber';


function LineChart({multiAxis, chartData}) {
    const options = {
        Plugins:{
            legend:{
                display: multiAxis ? true : false
            }
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + convertNumber(value);
                    }
                },
                type: 'linear',
                display:true,
                position:'left'
            },
            y1:{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + convertNumber(value);
                    }
                },
                type: 'linear',
                display:true,
                position:'right'
            }
        },
        responsive:true,
        interaction: {
            mode:"index",
            intersect:false
        }
    };
  return <Line data={chartData} options={options}/>;
}

export default LineChart;