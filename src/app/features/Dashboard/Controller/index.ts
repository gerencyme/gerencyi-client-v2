import { useTheme } from '@shared/hooks/contexts/useTheme'
import { useCompanyInfo } from '@shared/hooks/useCompanyInfo'
import { capitalizeName, formatPrice } from '@shared/utils/transformers'

export const useDashboardController = () => {
  const { company } = useCompanyInfo()
  const { theme } = useTheme()

  const companyName = company?.name.split(' ')[0] || ''

  const name = capitalizeName(companyName)

  const yFormatter: ApexTooltipY = {
    formatter: (val) => {
      const formattedVal = formatPrice(val)
      return formattedVal || ''
    },
  }

  return {
    theme,
    name,
    yFormatter,
  }
}
