import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const MyChart = ({ data }) => {
  const chartRef = useRef(null)
  const chartInstanceRef = useRef(null)

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy() // destroy previous chart instance
    }

    const myChartRef = chartRef.current.getContext('2d')
    chartInstanceRef.current = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: [
          'Week 1',
          'Week 2',
          'Week 3',
          'Week 4',
          'Week 5',
          'Week 6',
          'Week 7',
          'Week 8',
          'Week 9',
          'Week 10',
          'Week 11',
          'Week 12'
        ],
        datasets: [
          {
            data: [5, 22, 13, 34, 15, 9, 12, 3, 12, 13, 12, 12],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })

    return () => {
      chartInstanceRef.current.destroy() // clean up on unmount
    }
  }, [data])

  return (
    <div className='w-full h-full overflow-hidden box-border'>
      <canvas ref={chartRef} className='h-[100%] w-[100%]' />
    </div>
  )
}

export default MyChart
