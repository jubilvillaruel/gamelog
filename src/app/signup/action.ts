'use server';

import { signUpUser } from "@/lib/auth";

export async function handleSignUp(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    if (!email || !password) {
        return { error: 'All fields are required.' };
    }

    const { data, error } = await signUpUser(email, password);
    return { data, error };
    // You can handle the response here, e.g., redirecting or showing a success message
    // if (error) {
    //     return { error: error.message };
    // }
    // return { data };
    // return { success: true, message: 'User signed up successfully!' };
    // Note: You might want to handle the response further, like redirecting or showing a success message.
}