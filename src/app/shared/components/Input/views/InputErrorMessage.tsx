'use client'

import { useFormContext } from 'react-hook-form'
import { errorMessageTv } from '../InputTV'
import { getErrors } from '../InputUtils'
import { Text } from '@shared/components'

interface ErrorMessageProps {
  field: string
}

export function InputErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext()

  const fieldError = getErrors(errors, field)

  if (!fieldError) return null

  return (
    <Text
      as="span"
      weight="light"
      color="error"
      size="xs"
      className={errorMessageTv()}
      text={fieldError.message?.toString()}
    />
  )
}
