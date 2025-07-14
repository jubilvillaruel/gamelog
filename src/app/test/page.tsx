// src/app/test/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestPage() {
    const [data, setData] = useState<any[]>([])
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
        const { data, error } = await supabase.from('users').select('*')
        setData(data || [])
        setError(error)
        }

        fetchData()
    }, [])

    return (
        <div className="p-8 text-white">
        <h1 className="text-xl font-bold mb-4">Supabase Test Connection</h1>
        
        {error && (
            <div className="text-red-500">
            <p>Error: {error.message}</p>
            </div>
        )}

        {data.length > 0 ? (
            <ul className="list-disc pl-5">
            {data.map((user, idx) => (
                <li key={idx}>{JSON.stringify(user)}</li>
            ))}
            </ul>
        ) : (
            <p>No users found or table is empty.</p>
        )}
        </div>
    )
}
