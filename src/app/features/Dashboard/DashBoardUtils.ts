import { TTheme } from '@shared/types'
import { capitalizeName } from '@shared/utils/transformers'

export const comparationGraphicSeries = (
  theme: TTheme,
): ApexAxisChartSeries | ApexNonAxisChartSeries => [
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
]

export const comparationGraphicCategories = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab',
]

export const ExpensiveGraphicSeries = (
  theme: TTheme,
  companyName: string,
): ApexAxisChartSeries | ApexNonAxisChartSeries => [
  {
    name: capitalizeName(companyName),
    data: [31, 40, 28, 51, 42, 109, 100, 85, 77, 94, 112, 154],
    color: theme === 'dark' ? '#E9BC1D' : '#D7F78C',
  },
]

export const ExpensiveGraphicCategories = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]
