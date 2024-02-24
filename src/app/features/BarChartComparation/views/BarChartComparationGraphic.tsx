'use client'

import { useTheme } from '@shared/hooks/contexts/useTheme'
import { TApexchartsOptions } from '@shared/types'
import { formatPrice } from '@shared/utils/transformers'
import Chart from 'react-apexcharts'

export function BarChartComparationGraphic() {
  const { theme } = useTheme()

  const options: TApexchartsOptions = {
    series: [
      {
        name: 'GerencyI',
        data: [500, 650, 575, 745, 649, 600, 790],
        color: theme === 'dark' ? '#E9BC1D' : '#D7F78C',
      },
      {
        name: 'Autônomo',
        data: [400, 450, 550, 600, 540, 489, 410],
        color: '#d3d3d3',
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      fontFamily: '"Poppins", sans-serif',
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: 7,
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 575,
        options: {
          chart: {
            width: '100%',
          },
        },
      },
    ],
    legend: {
      fontSize: '10px',
      markers: {
        radius: 32,
        width: 12,
        height: 12,
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '10px',
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          fontSize: '10px',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    },
    theme: {
      mode: theme || 'dark',
    },
    fill: {
      opacity: 1,
    },
    noData: {
      text: 'Sem dados por aqui.',
    },
    tooltip: {
      y: {
        formatter: function (val) {
          const formattedVal = formatPrice(val)
          return formattedVal || ''
        },
      },
    },
    grid: {
      show: false,
    },
  }

  return (
    <Chart options={options} series={options?.series} type="bar" width="500" />
  )
}
