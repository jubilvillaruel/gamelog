'use client';

import {signInUser } from "@/lib/auth";

export async function handleLogin(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: 'All fields are required.' };
    }

    const { data, error } = await signInUser(email, password);
    return { data, error };
    // You can handle the response here, e.g., redirecting or showing a success message
    // if (error) {
    //     return { error: error.message };
    // }
    // return { data };
}