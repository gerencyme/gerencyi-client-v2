import { Text, TextProps } from '@shared/components/Text'

export function InputLabel({ text, ...props }: TextProps) {
  return <Text text={text} {...props} />
}
