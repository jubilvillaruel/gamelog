// lib/income.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function getTwoWeekIncome() {
    console.log('🔍 [getTwoWeekIncome] Fetching income data from Supabase...')

    const { data, error } = await supabase
        .from('income_tbl')
        .select('amount')

    if (error) {
        console.error('Error fetching income:', error)
        return 0
    }

    console.log('✅ [getTwoWeekIncome] Raw data received:', data)

    // Sum all amounts
    const totalIncome = data.reduce((total, row) => total + row.amount, 0)
    console.log('💰 [getTwoWeekIncome] Total income calculated:', totalIncome)

    return totalIncome

}
