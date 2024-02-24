'use client'

import { inputFieldTV } from '@shared/components/Input/InputTV'
import { InputHTMLAttributes } from 'react'
import { VariantProps } from 'tailwind-variants'
import { useFormContext } from 'react-hook-form'

type TInputFieldProps = {
  name: string
} & VariantProps<typeof inputFieldTV> &
  InputHTMLAttributes<HTMLInputElement>

export function InputField({ name, variant, ...props }: TInputFieldProps) {
  const { register } = useFormContext()

  return (
    <input
      {...props}
      {...register(name)}
      id={name}
      className={inputFieldTV({ variant })}
    />
  )
}
