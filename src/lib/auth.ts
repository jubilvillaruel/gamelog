import { supabase } from "./supabaseClient";

export async function signUpUser(email: string, password: string) {
    return await supabase.auth.signUp({ email, password });
}