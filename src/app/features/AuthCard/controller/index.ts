import {
  TAuthSubmitSchema,
  authSubmitSchema,
} from '@features/AuthCard/AuthCardUtils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { maskCpfOrCnpj } from '@shared/utils/transformers'
import { useEffect } from 'react'
import { auth } from '@features/AuthCard/services'
import { useCookie } from '@shared/hooks/useCookies'
import { companySession } from '@shared/utils/constants/companySession'
import { APP_ROUTES } from '@shared/utils/constants/app-routes'
import { useRouter } from 'next/navigation'

export const useAuthController = () => {
  const { push } = useRouter()
  const { createSession } = useCookie()
  const authSchema = useForm<TAuthSubmitSchema>({
    resolver: zodResolver(authSubmitSchema),
  })

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isLoading },
  } = authSchema

  const cnpj = watch('CNPJ')
  const formattedCnpj = maskCpfOrCnpj(cnpj || '')

  useEffect(() => {
    if (cnpj !== '') return setValue('CNPJ', formattedCnpj)
  }, [cnpj, formattedCnpj, setValue])

  const onSubmit = async (data: TAuthSubmitSchema) => {
    const company = await auth(data)

    if (company) {
      createSession({
        cookieName: companySession,
        value: JSON.stringify(company),
      })

      push(APP_ROUTES.private.dashboard.name)
    }
  }

  return { authSchema, isLoading, handleSubmit, onSubmit }
}
