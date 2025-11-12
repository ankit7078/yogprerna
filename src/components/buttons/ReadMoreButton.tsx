"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

interface ReadMoreButtonProps {
    href: string;
    label?: string;
    className?: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
    href,
    label = "Read More",
    className = "",
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`relative inline-block overflow-hidden rounded-full ${className}`}
        >
            {/* ✨ Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--primary-text-h)] via-[var(--text-hover-color)] to-[var(--primary-text-h)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Actual Button */}
            <Link
                href={href}
                className="relative z-10 group inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--text-hover-color)] hover:text-[var(--primary-page-h)] transition-colors duration-300"
            >
                <span className="relative">
                    {label}
                    {/* underline animation */}
                    {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span> */}
                </span>
                <motion.span
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <LuArrowRight className="mt-[2px] w-3.5 h-3.5" />
                </motion.span>
            </Link>

            {/* ✨ Soft border effect */}
            <div className="absolute inset-0 border border-[var(--primary-text-h)] rounded-full opacity-20 group-hover:opacity-50 transition-all duration-500"></div>
        </motion.div>
    );
};

export default ReadMoreButton;
