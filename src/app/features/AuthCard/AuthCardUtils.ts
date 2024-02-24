import { z } from 'zod'
import { maskCpfOrCnpj } from '@shared/utils/transformers'

export const minLengthPassword = 8

export const authSubmitSchema = z.object({
  CNPJ: z
    .string()
    .min(18, 'CNPJ inválido.')
    .max(18, 'Máximo de 18 caracteres.')
    .transform((cnpj: string) => maskCpfOrCnpj(cnpj)),
  password: z.string().min(minLengthPassword, `Confira sua senha.`),
})

export type TAuthSubmitSchema = z.infer<typeof authSubmitSchema>
