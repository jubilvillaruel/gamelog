// actions/getIncome.ts
'use server'

import { getTwoWeekIncome } from '@/lib/income'

export async function fetchTwoWeekIncome() {
    const result = await getTwoWeekIncome()
    console.log('📦 [fetchTwoWeekIncome] Result received:', result)
    return result
}
