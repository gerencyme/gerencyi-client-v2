import { Text, TextProps } from '@shared/components'

export function BarChartComparationLabel({ text, ...props }: TextProps) {
  return (
    <Text {...props} text={text} weight="bold" size="md" className="pl-4" />
  )
}
