'use client';
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { motion } from "framer-motion";

export function BackLink({ href = "/", label = "Go Back" }) {
  return (
    <Link href={href} className="inline-block">
      <motion.div
        className="inline-flex items-center space-x-1 py-2  bg-transparent text-[var(--text-hover-color)] transition-colors group"
        whileHover={{ x: -4, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <LuArrowLeft className="h-4 w-4" />
        </motion.span>
        <motion.span
          className="font-medium heading-sm tracking-wide"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
}
