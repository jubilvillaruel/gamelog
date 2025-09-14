import React from 'react'

interface SummaryItemProps {
  label: string
  value: number // <-- now expecting a number
  color?: string
}

interface DashboardSummaryProps {
  twoWeekIncome: number
}

function SummaryItem({ label, value, color }: SummaryItemProps) {
  // Format the number into Philippine Peso format
  const formattedValue = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
  }).format(value)

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md w-full">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{formattedValue}</p>
    </div>
  )
}

export default function DashboardSummary({ twoWeekIncome }: DashboardSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg">
      <SummaryItem label="Two-Week Income" value={twoWeekIncome} color="text-black" />
      <SummaryItem label="Wants + Expense Amount" value={0} color="text-orange-500" />
      <SummaryItem label="Expected Monthly Expenses" value={0} color="text-red-600" />
    </div>
  )
}

