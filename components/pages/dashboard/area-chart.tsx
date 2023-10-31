'use client'

import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";

interface Props {
  date: any[] | any,
  accumulated: any[] | any
}

const AreaChart = ({ date, accumulated }: Props) => {

  const [chartOptions, setChartOptions] = useState<any>()
  useEffect(() => {
    const data = {
      chart: {
        type: 'area',
      },
      xAxis: {
        categories: date,
        title: {
          text: 'Dias da semana'
        },
      },
      yAxis: {
        min: 0,
        max: 125,
        type: 'date',
        title: {
          text: 'Tempo'
        }
      },
      title: {
        text: 'Tempo de operação acumulado (em minutos)'
      },
      series: [
        { 
          name: "Motor Elétrico",
          data: accumulated,
        }
      ],
    }

    setChartOptions(data)
  }, [accumulated, date])
    
  
  return (
      <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'>
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
        />
      </div>
    )
}
export default AreaChart;