"use client";
import React from 'react';

export const InputGroup = ({ label, id, type = 'text', placeholder = '' }) => (
    <div>
        <label htmlFor={id} className="block  text-xs text-[var(--primary-text)] mb-1">
            {label}
        </label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="w-full paragraph px-4 py-1.5 border border-[var(--primary-border)] rounded-custom focus:ring-1 focus:ring-[var(--primary-border)] focus:outline-none text-[var(--secondary-text)] bg-transparent"
        />
    </div>
);

export const TextareaGroup = ({ label, id, placeholder = '', rows = 4 }) => (
    <div>
        <label htmlFor={id} className="block paragraph text-[var(--primary-text)] mb-1">
            {label}
        </label>
        <textarea
            id={id}
            placeholder={placeholder}
            rows={rows}
            className="w-full paragraph px-4 py-2 border border-[var(--primary-border)] rounded-custom 
                 focus:ring-1 focus:ring-[var(--primary-border)] focus:outline-none 
                 bg-transparent resize-none text-[var(--secondary-text)]"
        ></textarea>
    </div>
);


export const SelectGroup = ({ label, id, options, placeholder, defaultValue = "" }) => (
    <div>
        <label htmlFor={id} className="block text-xs text-gray-400 mb-2">
            {label}
        </label>
        <div className="relative">
            <select
                id={id}
                defaultValue={defaultValue || ""}
                className="w-full text-xs border border-[var(--primary-border)] bg-[var(--secondary-bg)] text-[var(--secondary-text)] rounded-custom p-2 appearance-none focus:ring-1 focus:ring-[var(--primary-border)] focus:border-[var(--primary-border)] outline-none"
            >
                <option value="" disabled>
                    {placeholder || "Select an option..."}
                </option>

                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    </div>
);


export const CheckboxGroup = ({ label, id, defaultChecked = false, description }) => (
    <div className="flex items-start">
        <div className="flex items-center h-5">
            <input
                id={id}
                type="checkbox"
                defaultChecked={defaultChecked}
                className="w-4 h-4 text-blue-600 !bg-blue-700 !border-blue-600 rounded focus:ring-blue-500"
            />
        </div>
        <div className="ml-3 text-sm">
            <label htmlFor={id} className="font-medium">
                {label}
            </label>
            {description && <p className="">{description}</p>}
        </div>
    </div>
);

export const RangeSlider = ({ label, description, defaultValue, showValueBox = false, valueText = "" }) => (
    <div>
        <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-300">{label}</label>
            {showValueBox && (
                <span className="text-sm font-semibold text-white bg-gray-700 px-3 py-1 rounded-md">
                    {valueText}
                </span>
            )}
        </div>
        <input
            type="range"
            min="0"
            max="100"
            defaultValue={defaultValue}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb"
            style={{
                // Custom styles for the thumb
                '--thumb-color': 'white',
                '--thumb-border': '#374151',
            } as React.CSSProperties}
        />
        <style>{`
     .range-thumb::-webkit-slider-thumb {
       -webkit-appearance: none;
       appearance: none;
       width: 20px;
       height: 20px;
       background: var(--thumb-color);
       border: 4px solid var(--thumb-border);
       border-radius: 50%;
       cursor: pointer;
       margin-top: -6px; /* Center thumb on track */
     }
     .range-thumb::-moz-range-thumb {
       width: 12px; /* 20px - 8px border */
       height: 12px; /* 20px - 8px border */
       background: var(--thumb-color);
       border: 4px solid var(--thumb-border);
       border-radius: 50%;
       cursor: pointer;
     }
    `}</style>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
    </div>
);

