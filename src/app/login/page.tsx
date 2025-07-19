'use client';

import FormInput from '@/components/FormInput';
import React from 'react';
import { useState } from 'react';
import { handleLogin } from '@/app/login/action';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

    const validateFields = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !password) {
            return 'Please fill in all fields.';
        }
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }
        return null; // all good
    };  

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const validateionError = validateFields();
        if (validateionError) {
            alert(validateionError);
            return;
        }
        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const { data, error } = await handleLogin(formData);
        if (error) {
            alert(error);
            return;
        }

        alert('Login successful!'); // Handle success, e.g., redirect or show a message
        console.log(data);
    }
        

    return (
        <div className="min-h-screen flex items-center justify-center">
                    <div className="w-full max-w-md mx-auto p-6 bg-[#1a1a1a] rounded-lg shadow-md">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit} className=''>
                            <FormInput 
                                label={'Email'} 
                                type={'email'}
                                name={'email'} 
                                value={email} 
                                onChange={(e) => { setEmail(e.target.value) } }
                            />
                            
                            <FormInput 
                                label={'Password'}
                                type={'password'}
                                name={'password'}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) } }
                            />
        
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
    );
};