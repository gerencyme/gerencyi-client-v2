import { TZipCode, TSupplier } from '@shared/types'

export type TCompanieRequest = {
  id: string
  token: string
  email: string
  cnpj: string
  telephone: string
  corporateReason: string
  name: string
  updateDate: Date
  zipCode: TZipCode
  supplier: TSupplier
  companyImg?: string
}
