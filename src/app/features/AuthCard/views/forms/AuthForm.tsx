'use client'

import { useAuthController } from '@features/AuthCard/controller'
import { Button, Form, Input } from '@shared/components'
import { FormProvider } from 'react-hook-form'

export function AuthForm() {
  const { authSchema, isLoading, handleSubmit, onSubmit } = useAuthController()

  return (
    <FormProvider {...authSchema}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input.root variant="mirror">
          <Input.label text="CNPJ" color="grey" weight="bold" />
          <Input.field maxLength={18} variant="mirror" name="CNPJ" />
          <Input.error field="CNPJ" />
        </Input.root>

        <Input.root variant="mirror">
          <Input.label text="Senha" color="grey" weight="bold" />
          <Input.field type="password" variant="mirror" name="password" />
          <Input.error field="password" />
        </Input.root>

        <Button.root variant="mirror">
          <Button.label text={isLoading ? 'Carregando...' : 'Continuar'} />
        </Button.root>
      </Form>
    </FormProvider>
  )
}
