import { LuSend } from "react-icons/lu";

export const ButtonGroup = ({
  label = "Save Changes",
  type = "button",
  onClick,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`mt-1 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] 
      px-4 py-2 rounded-custom cursor-pointer
      hover:shadow-custom hover:scale-102 active:scale-95 
      transition-all duration-300 ease-in-out 
      animate-fadeIn ${className}`}
  >
    {label}
  </button>
);


export const ButtonGroupSecondary = ({
  label = "Save Changes",
  type = "button",
  onClick,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`mt-1 border border-2 border-[var(--text-hover-color)] text-[var(--text-hover-color)] 
      px-4 py-2 rounded-custom cursor-pointer 
      hover:shadow-custom hover:scale-102 active:scale-95 
      transition-all duration-300
      ${className}`}
  >
    {label}
  </button>
);

export default function ButtonGroup2({ label, type = "button", disabled, isSubmitting, className = "" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-[var(--text-hover-color)] text-[var(--text-color-primary)] py-2 px-4 rounded-custom flex cursor-pointer items-center justify-center gap-2 
        disabled:bg-purple-300 transition-colors hover:shadow-custom hover:scale-102 active:scale-95 
      transition-all duration-300 
      animate-fadeIn ${className}`}
    >
      {isSubmitting ? (
        <>
          <div className="w-4 h-4 border-2 border-[var(--primary-border)] border-t-transparent rounded-full animate-spin" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <LuSend className="w-4 h-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}




