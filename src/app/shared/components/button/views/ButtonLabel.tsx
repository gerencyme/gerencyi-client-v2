import { Text, TextProps } from "@shared/components/Text";

export function ButtonLabel({ text, ...props }: TextProps) {
  return <Text text={text} {...props} />;
}
