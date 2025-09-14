import React from 'react'
import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabaseServer';
import Sidebar from '@/components/Sidebar';
import DashboardSummary from '@/components/DashboardSummary';
import { fetchTwoWeekIncome } from '@/actions/getIncome';

export default async function dashboardPage() {
    const supabase = createSupabaseServerClient();
    const {
        data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
        redirect('/login');
    }

    console.log('🚀 [DashboardPage] Rendering dashboard page...')
    const twoWeekIncome = await fetchTwoWeekIncome()
    console.log('📊 [DashboardPage] twoWeekIncome:', twoWeekIncome)
    
    return (
        <div className='flex min-h-screen'>
            <div className='flex min-h-screen'>
            <Sidebar />
            </div>

            <div className='flex-1 p-10'>
                <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>
                <p>Welcome to your dashboard!</p>
                <DashboardSummary twoWeekIncome={twoWeekIncome} />

            </div>
        </div>
    )
}
