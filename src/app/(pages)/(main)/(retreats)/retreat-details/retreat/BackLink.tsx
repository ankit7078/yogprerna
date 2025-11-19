const ArrowLeft = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const BackLink = ({ label }) => (
  <div className="flex items-center gap-2 cursor-pointer hover:text-[var(--text-hover-color)] transition">
    <ArrowLeft size={16} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default BackLink;
