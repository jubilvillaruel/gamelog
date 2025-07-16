'use client';

import React from "react"; 
import { inputStyle } from "@/styles/style";

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
                className={inputStyle}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}