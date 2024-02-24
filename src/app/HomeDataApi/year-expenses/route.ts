import { TYearExpensesResponse } from '@shared/types'
import { NextResponse } from 'next/server'
import {
  yearExpenses,
  yearExpensesData,
} from 'src/app/HomeDataApi/HomeDataApiUtils'

export async function GET() {
  const yearExpensesResponse: TYearExpensesResponse = {
    yearExpenses: yearExpenses(),
    yearExpensesData,
  }

  return NextResponse.json(yearExpensesResponse)
}
