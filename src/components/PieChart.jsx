import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 0
    }
  ]
}

const options = {
  plugins: {
    legend: {
      position: 'right',
      display: false,
      label: {
        font: {
          size: 20,
          weight: 'bold'
        }
      }
    },
    labels: {
      render: 'percentage', // Show percentage labels
      precision: 2,
      fontColor: 'black',
      position: 'outside', // Move label outside the chart
      textMargin: 10
    }
  }
}

const PieChart = () => {
  return (
    <div className='h-[60%] mx-auto w-fit'>
      <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart
