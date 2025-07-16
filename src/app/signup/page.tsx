'use client';

import FormInput from '@/components/FormInput';
import React from 'react';
import {useState} from "react";
import { handleSignUp } from '@/app/signup/action'; 

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateFields = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordChecks = {
            length: /^.{6,}$/,
            letter: /[a-zA-Z]/,
            number: /\d/,
            uppercase: /[A-Z]/,
            special: /[!@#$%^&*(),.?":{}|<>]/,
        };

        if (!email || !password || !confirmPassword) {
            return 'Please fill in all fields.';
        }

        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }

        if (!passwordChecks.length.test(password)) {
            return 'Password must be at least 6 characters long.';
        }

        if (!passwordChecks.letter.test(password)) {
            return 'Password must contain at least one letter.';
        }

        if (!passwordChecks.number.test(password)) {
            return 'Password must contain at least one number.';
        }

        if (!passwordChecks.uppercase.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }

        if (!passwordChecks.special.test(password)) {
            return 'Password must contain at least one special character.';
        }

        if (password !== confirmPassword) {
            return 'Passwords do not match.';
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

        const result = await handleSignUp(formData);
        if (result.error) {
            alert(result.error);
        }   

        // alert(`Email: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);
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
                    
                    <FormInput 
                        label={'Password'}
                        type={'password'}
                        name={'password'}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) } }
                    />
                    
                    <FormInput 
                        label={'Confirm Password'}
                        type={'password'}
                        name={'confirmPassword'}
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) } }  
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
    )
}