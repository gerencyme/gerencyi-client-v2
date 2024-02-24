import { Text, TextProps } from "@shared/components/Text";

export function AuthCardLabel({ text, ...props }: TextProps) {
  return <Text text={text} color="gray" weight="light" {...props} />;
}
