import React from 'react'
import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabaseServer';
// import { cookies } from 'next/headers';

export default async function dashboardPage() {
    const supabase = createSupabaseServerClient();
    const {
        data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
        redirect('/login');
    }
    return (
        <div>
            Dashboard
        </div>
    )
}
