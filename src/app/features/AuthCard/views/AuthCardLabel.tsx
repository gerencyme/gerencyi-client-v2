import { Text, TextProps } from '@shared/components/Text'

export function AuthCardLabel({ text, ...props }: TextProps) {
  return <Text text={text} color="grey" weight="light" {...props} />
}
