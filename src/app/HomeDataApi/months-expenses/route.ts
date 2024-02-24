import { TMonthsExpensesResponse } from '@shared/types'
import { NextResponse } from 'next/server'
import {
  monthsExpenses,
  monthsExpensesData,
} from 'src/app/HomeDataApi/HomeDataApiUtils'

export async function GET() {
  const monthsExpensesResponse: TMonthsExpensesResponse = {
    monthsExpenses,
    monthsExpensesData,
  }

  return NextResponse.json(monthsExpensesResponse)
}
