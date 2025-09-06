"use client";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    async function handleSignOut() {
        await supabase.auth.signOut();
        router.push("/login"); // redirect to login page
    }


    return (
        <aside className="w-64 bg-[#1a1a1a] text-white flex flex-col justify-between p-4">
            <div> 
                <h2 className="text-xl font-bold mb-6">My App</h2>
                <nav className="flex flex-col gap-3">
                    <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
                    Dashboard
                    </Link>
                    <Link href="/profile" className="hover:bg-gray-700 p-2 rounded">
                    Profile
                    </Link>
                    <Link href="/settings" className="hover:bg-gray-700 p-2 rounded">
                    Settings
                    </Link>
                </nav>
            </div>
        
            <button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 p-2 rounded mt-6"
            >
                Sign Out
            </button>
        </aside>
    );
}
