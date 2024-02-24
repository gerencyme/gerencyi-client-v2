'use client'

import { responsive } from '@features/Graphics/GraphicsUtils'
import { TApexchartsOptions, TTheme } from '@shared/types'
import Chart from 'react-apexcharts'

interface GraphicContentProps {
  yFormatter: ApexTooltipY
  categories: string[]
  type: 'area' | 'bar'
  series: ApexAxisChartSeries | ApexNonAxisChartSeries
  theme: TTheme
}

export function GraphicContent({
  yFormatter,
  categories,
  type,
  series,
  theme,
}: GraphicContentProps) {
  const options: TApexchartsOptions = {
    responsive,
    series,
    theme: {
      mode: theme || 'dark',
    },
    tooltip: {
      y: yFormatter,
    },
    chart: {
      type,
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
      type: 'category',
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
      categories,
    },

    fill: {
      opacity: 1,
    },
    noData: {
      text: 'Sem dados por aqui.',
    },
    grid: {
      show: false,
    },
  }

  return (
    <Chart options={options} series={options?.series} type={type} width="500" />
  )
}
