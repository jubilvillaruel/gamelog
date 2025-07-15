'use client';

import React from "react"; 

type Props = {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({type, label, name, value, onChange}: Props) {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0FAC7D]"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}