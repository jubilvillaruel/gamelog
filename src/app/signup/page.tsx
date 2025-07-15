'use client';

import FormInput from '@/components/FormInput';
import React from 'react';
import {useState} from "react";

export default function Page() {
    const [email, setEmail] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(`Email submitted: ${email}`);
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md mx-auto p-6 bg-[#1a1a1a] rounded-lg shadow-md">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit} className=''>
                    <FormInput 
                        label={'Email'} 
                        type={'email'}
                        name={'email'} 
                        value={email} 
                        onChange={(e) => { setEmail(e.target.value) } }
                    />
                    {/* <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0FAC7D]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> */}

                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-blue-500 text-white p-2 rounded mt-2"
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}