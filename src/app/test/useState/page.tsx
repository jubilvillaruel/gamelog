'use client';

import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert(`Hi ${name}, welcome!`);
        console.log("Submitted name:", name);
    }

    return (
        <div>
            <h1 className=" border border-red-500 flex items-center-safe"> useState Example</h1>
            <form onSubmit={handleSubmit}>
                <label className="p-2">Name</label>
                <input 
                    type="text"
                    name="name"
                    className="border border-gray-300 p-2 rounded"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button 
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Submit
                </button>

            </form>
        </div>


    )
};